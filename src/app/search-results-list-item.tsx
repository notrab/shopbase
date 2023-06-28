import { graphql } from '@/gql'
import { type FragmentType, useFragment } from '@/gql/fragment-masking'

export const SearchResultsList_ProductFragment = graphql(/* GraphQL */ `
  fragment SearchResultsList_ProductFragment on Product {
    id
    name
    price
    brand
  }
`)

type SearchResultsListItemProps = {
  product: FragmentType<typeof SearchResultsList_ProductFragment>
}

export function SearchResultsListItem(props: SearchResultsListItemProps) {
  const product = useFragment(SearchResultsList_ProductFragment, props.product)

  return (
    <li className="relative">
      <div className="group aspect-square overflow-hidden rounded-md bg-black flex items-center justify-center">
        <svg
          viewBox="0 0 13 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 stroke-current text-white"
        >
          <path
            d="M6.8219 8.64715L6.60505 9.22218L7.02011 9.67539L10.6595 13.6492C11.8345 14.9322 10.9243 17 9.18453 17H3C1.89543 17 1 16.1046 1 15V9V3C1 1.89543 1.89543 1 3 1H6.81398C8.21196 1 9.17862 2.39764 8.68534 3.7057L6.8219 8.64715Z"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="pt-3 md:space-y-3">
        <p className="pointer-events-none mt-2 block truncate md:text-xl font-semibold text-black">
          {product.name}
        </p>
        <p className="pointer-events-none block font-medium text-sm text-black/60 normal-nums">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(product.price / 100)}
        </p>
      </div>
    </li>
  )
}
