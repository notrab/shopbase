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
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img
          src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt=""
          className="pointer-events-none object-cover group-hover:opacity-75"
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {product.name}</span>
        </button>
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {product.name}
      </p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(product.price / 100)}
      </p>
    </li>
  )
}
