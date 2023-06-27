import { graphql, useFragment, type FragmentType } from '@/gql'
import { SearchResultsListItem } from '@/app/search-results-list-item'

const SearchResultsList_ProductSearchConnectionFragment =
  graphql(/* GraphQL */ `
    fragment SearchResultsList_ProductSearchConnectionFragment on ProductSearchConnection {
      edges {
        cursor
        node {
          ...SearchResultsList_ProductFragment
        }
      }
    }
  `)

type ProductListProps = {
  query: FragmentType<typeof SearchResultsList_ProductSearchConnectionFragment>
}

export function SearchResultsList(props: ProductListProps) {
  const { edges } = useFragment(
    SearchResultsList_ProductSearchConnectionFragment,
    props.query
  )

  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 w-full"
    >
      {edges.map(({ cursor, node }: any) => (
        <SearchResultsListItem key={cursor} product={node} />
      ))}
    </ul>
  )
}
