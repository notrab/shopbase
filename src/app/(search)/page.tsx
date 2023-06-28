import { graphql } from '@/gql'
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

  const { data } = await fetch(process.env.GRAFBASE_API_URL!, {
    method: 'POST',
    headers: {
      'x-api-key': process.env.GRAFBASE_API_KEY!
    },
    body: JSON.stringify({
      query,
      variables: {
        query: term,
        first,
        ...(brands_in.length && { brands_in })
      }
    }),
    next: { revalidate: 10 }
  }).then((res) => res.json())

  return <SearchResultsList query={data?.productSearch} />
}

export const revalidate = 0
