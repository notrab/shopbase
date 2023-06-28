import { graphql } from '@/gql'
import type { SearchQuery, SearchQueryVariables } from '@/gql/graphql'
import { SearchResultsList } from '@/app/(search)/search-results-list'

const query = graphql(/* GraphQL */ `
  query search($first: Int, $query: String, $brands_in: [String!]) {
    productSearch(
      first: $first
      query: $query
      filter: { brand: { in: $brands_in } }
    ) {
      ...SearchResultsList_ProductSearchConnectionFragment
    }
  }
`)

export default async function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const brands_in =
    Array.isArray(searchParams?.brand) && searchParams?.brand?.length === 1
      ? [searchParams.brand]
      : searchParams.brand || []

  const first = Number(searchParams.perPage) || 12
  const term = searchParams.query

  const { data }: { data: SearchQuery } = await fetch(
    process.env.GRAFBASE_API_URL!,
    {
      method: 'POST',
      headers: {
        'x-api-key': process.env.GRAFBASE_API_KEY!
      },
      body: JSON.stringify({
        query: query as SearchQuery,
        variables: {
          query: term,
          first,
          ...(brands_in.length && { brands_in })
        } as SearchQueryVariables
      }),
      next: { revalidate: 10 }
    }
  ).then((res) => res.json())

  return <SearchResultsList query={data?.productSearch || {}} />
}
