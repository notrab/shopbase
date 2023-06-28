import { graphql } from '@/gql'
import type {
  GetProductByIdQuery,
  GetProductByIdQueryVariables
} from '@/gql/graphql'
import { notFound } from 'next/navigation'

const query = graphql(/* GraphQL */ `
  query GetProductById($id: ID!) {
    product(by: { id: $id }) {
      id
      name
      price
      brand
    }
  }
`)

export async function generateStaticParams() {
  return []
}

export default async function ProductPage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params

  const { data }: { data: GetProductByIdQuery } = await fetch(
    process.env.GRAFBASE_API_URL!,
    {
      method: 'POST',
      headers: {
        'x-api-key': process.env.GRAFBASE_API_KEY!
      },
      body: JSON.stringify({
        query: query as GetProductByIdQuery,
        variables: {
          id
        } as GetProductByIdQueryVariables
      }),
      next: { revalidate: 10 }
    }
  ).then((res) => res.json())

  if (!data?.product) {
    notFound()
  }

  return (
    <div className="max-w-6xl mx-auto px-6 md:py-12">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12">
        <div>
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
        </div>
        <div className="md:pt-12 space-y-3">
          <h1 className="text-black text-xl md:text-4xl font-semibold">
            {data.product.name}
          </h1>
          <p className="pointer-events-none block font-medium text-lg text-gray-500 normal-nums">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(data.product.price / 100)}
          </p>
        </div>
      </div>
    </div>
  )
}
