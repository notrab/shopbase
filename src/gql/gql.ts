/* eslint-disable */
import * as types from './graphql'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query search($first: Int, $query: String, $brands_in: [String!]) {\n    productSearch(\n      first: $first\n      query: $query\n      filter: { brand: { in: $brands_in } }\n    ) {\n      ...SearchResultsList_ProductSearchConnectionFragment\n    }\n  }\n':
    types.SearchDocument,
  '\n  fragment SearchResultsList_ProductFragment on Product {\n    id\n    name\n    price\n    brand\n  }\n':
    types.SearchResultsList_ProductFragmentFragmentDoc,
  '\n    fragment SearchResultsList_ProductSearchConnectionFragment on ProductSearchConnection {\n      edges {\n        cursor\n        node {\n          ...SearchResultsList_ProductFragment\n        }\n      }\n    }\n  ':
    types.SearchResultsList_ProductSearchConnectionFragmentFragmentDoc
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query search($first: Int, $query: String, $brands_in: [String!]) {\n    productSearch(\n      first: $first\n      query: $query\n      filter: { brand: { in: $brands_in } }\n    ) {\n      ...SearchResultsList_ProductSearchConnectionFragment\n    }\n  }\n'
): typeof import('./graphql').SearchDocument
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment SearchResultsList_ProductFragment on Product {\n    id\n    name\n    price\n    brand\n  }\n'
): typeof import('./graphql').SearchResultsList_ProductFragmentFragmentDoc
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    fragment SearchResultsList_ProductSearchConnectionFragment on ProductSearchConnection {\n      edges {\n        cursor\n        node {\n          ...SearchResultsList_ProductFragment\n        }\n      }\n    }\n  '
): typeof import('./graphql').SearchResultsList_ProductSearchConnectionFragmentFragmentDoc

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}
