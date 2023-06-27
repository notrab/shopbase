/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, is compliant with the date-time format outlined in section 5.6 of the RFC 3339
   * profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
   *
   * This scalar is a description of an exact instant on the timeline such as the instant that a user account was created.
   *
   * # Input Coercion
   *
   * When expected as an input type, only RFC 3339 compliant date-time strings are accepted. All other input values raise a query error indicating an incorrect type.
   *
   * # Result Coercion
   *
   * Where an RFC 3339 compliant date-time string has a time-zone other than UTC, it is shifted to UTC.
   * For example, the date-time string 2016-01-01T14:10:20+01:00 is shifted to 2016-01-01T13:10:20Z.
   */
  DateTime: { input: any; output: any }
}

export type DateTimeSearchFilterInput = {
  ALL?: InputMaybe<Array<DateTimeSearchFilterInput>>
  ANY?: InputMaybe<Array<DateTimeSearchFilterInput>>
  NONE?: InputMaybe<Array<DateTimeSearchFilterInput>>
  NOT?: InputMaybe<DateTimeSearchFilterInput>
  eq?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  neq?: InputMaybe<Scalars['DateTime']['input']>
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>
}

/** Possible operations for an Int field */
export type IntOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>
  increment?: InputMaybe<Scalars['Int']['input']>
  set?: InputMaybe<Scalars['Int']['input']>
}

export type IntSearchFilterInput = {
  ALL?: InputMaybe<Array<IntSearchFilterInput>>
  ANY?: InputMaybe<Array<IntSearchFilterInput>>
  NONE?: InputMaybe<Array<IntSearchFilterInput>>
  NOT?: InputMaybe<IntSearchFilterInput>
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<Scalars['Int']['input']>>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  neq?: InputMaybe<Scalars['Int']['input']>
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Create a Product */
  productCreate?: Maybe<ProductCreatePayload>
  /** Delete a Product by ID or unique field */
  productDelete?: Maybe<ProductDeletePayload>
  /** Update a Product */
  productUpdate?: Maybe<ProductUpdatePayload>
}

export type MutationProductCreateArgs = {
  input: ProductCreateInput
}

export type MutationProductDeleteArgs = {
  by: ProductByInput
}

export type MutationProductUpdateArgs = {
  by: ProductByInput
  input: ProductUpdateInput
}

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  hasPreviousPage: Scalars['Boolean']['output']
  startCursor?: Maybe<Scalars['String']['output']>
}

export type Product = {
  __typename?: 'Product'
  brand: Scalars['String']['output']
  /** when the model was created */
  createdAt: Scalars['DateTime']['output']
  /** Unique identifier */
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  price: Scalars['Int']['output']
  type?: Maybe<Scalars['String']['output']>
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output']
}

export type ProductByInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type ProductConnection = {
  __typename?: 'ProductConnection'
  edges?: Maybe<Array<Maybe<ProductEdge>>>
  /** Information to aid in pagination */
  pageInfo: PageInfo
}

/** Input to create a Product */
export type ProductCreateInput = {
  brand: Scalars['String']['input']
  name: Scalars['String']['input']
  price?: Scalars['Int']['input']
  type?: InputMaybe<Scalars['String']['input']>
}

export type ProductCreatePayload = {
  __typename?: 'ProductCreatePayload'
  product?: Maybe<Product>
}

export type ProductDeletePayload = {
  __typename?: 'ProductDeletePayload'
  deletedId: Scalars['ID']['output']
}

export type ProductEdge = {
  __typename?: 'ProductEdge'
  cursor: Scalars['String']['output']
  node: Product
}

export type ProductOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>
}

export type ProductSearchConnection = {
  __typename?: 'ProductSearchConnection'
  edges: Array<ProductSearchEdge>
  pageInfo: PageInfo
  searchInfo?: Maybe<SearchInfo>
}

export type ProductSearchEdge = {
  __typename?: 'ProductSearchEdge'
  cursor: Scalars['String']['output']
  node: Product
  score: Scalars['Float']['output']
}

export type ProductSearchFilterInput = {
  ALL?: InputMaybe<Array<ProductSearchFilterInput>>
  ANY?: InputMaybe<Array<ProductSearchFilterInput>>
  NONE?: InputMaybe<Array<ProductSearchFilterInput>>
  NOT?: InputMaybe<ProductSearchFilterInput>
  brand?: InputMaybe<StringSearchFilterInput>
  createdAt?: InputMaybe<DateTimeSearchFilterInput>
  name?: InputMaybe<StringSearchFilterInput>
  price?: InputMaybe<IntSearchFilterInput>
  type?: InputMaybe<StringOrNullSearchFilterInput>
  updatedAt?: InputMaybe<DateTimeSearchFilterInput>
}

/** Input to update a Product */
export type ProductUpdateInput = {
  brand?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  price?: InputMaybe<IntOperationsInput>
  type?: InputMaybe<Scalars['String']['input']>
}

export type ProductUpdatePayload = {
  __typename?: 'ProductUpdatePayload'
  product?: Maybe<Product>
}

export type Query = {
  __typename?: 'Query'
  /** Query a single Product by an ID or a unique field */
  product?: Maybe<Product>
  /** Paginated query to fetch the whole list of `Product`. */
  productCollection?: Maybe<ProductConnection>
  /** Search `Product` */
  productSearch?: Maybe<ProductSearchConnection>
}

export type QueryProductArgs = {
  by: ProductByInput
}

export type QueryProductCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ProductOrderByInput>
}

export type QueryProductSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  fields?: InputMaybe<Array<Scalars['String']['input']>>
  filter?: InputMaybe<ProductSearchFilterInput>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
}

export type SearchInfo = {
  __typename?: 'SearchInfo'
  totalHits: Scalars['Int']['output']
}

export type StringOrNullSearchFilterInput = {
  ALL?: InputMaybe<Array<StringOrNullSearchFilterInput>>
  ANY?: InputMaybe<Array<StringOrNullSearchFilterInput>>
  NONE?: InputMaybe<Array<StringOrNullSearchFilterInput>>
  NOT?: InputMaybe<StringOrNullSearchFilterInput>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  neq?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type StringSearchFilterInput = {
  ALL?: InputMaybe<Array<StringSearchFilterInput>>
  ANY?: InputMaybe<Array<StringSearchFilterInput>>
  NONE?: InputMaybe<Array<StringSearchFilterInput>>
  NOT?: InputMaybe<StringSearchFilterInput>
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  neq?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type SearchQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  brands_in?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >
}>

export type SearchQuery = {
  __typename?: 'Query'
  productSearch?:
    | ({ __typename?: 'ProductSearchConnection' } & {
        ' $fragmentRefs'?: {
          SearchResultsList_ProductSearchConnectionFragmentFragment: SearchResultsList_ProductSearchConnectionFragmentFragment
        }
      })
    | null
}

export type SearchResultsList_ProductFragmentFragment = {
  __typename?: 'Product'
  id: string
  name: string
  price: number
  brand: string
} & { ' $fragmentName'?: 'SearchResultsList_ProductFragmentFragment' }

export type SearchResultsList_ProductSearchConnectionFragmentFragment = {
  __typename?: 'ProductSearchConnection'
  edges: Array<{
    __typename?: 'ProductSearchEdge'
    cursor: string
    node: { __typename?: 'Product' } & {
      ' $fragmentRefs'?: {
        SearchResultsList_ProductFragmentFragment: SearchResultsList_ProductFragmentFragment
      }
    }
  }>
} & {
  ' $fragmentName'?: 'SearchResultsList_ProductSearchConnectionFragmentFragment'
}

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType']

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value)
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value
  }
}
export const SearchResultsList_ProductFragmentFragmentDoc =
  new TypedDocumentString(
    `
    fragment SearchResultsList_ProductFragment on Product {
  id
  name
  price
  brand
}
    `,
    { fragmentName: 'SearchResultsList_ProductFragment' }
  ) as unknown as TypedDocumentString<
    SearchResultsList_ProductFragmentFragment,
    unknown
  >
export const SearchResultsList_ProductSearchConnectionFragmentFragmentDoc =
  new TypedDocumentString(
    `
    fragment SearchResultsList_ProductSearchConnectionFragment on ProductSearchConnection {
  edges {
    cursor
    node {
      ...SearchResultsList_ProductFragment
    }
  }
}
    fragment SearchResultsList_ProductFragment on Product {
  id
  name
  price
  brand
}`,
    { fragmentName: 'SearchResultsList_ProductSearchConnectionFragment' }
  ) as unknown as TypedDocumentString<
    SearchResultsList_ProductSearchConnectionFragmentFragment,
    unknown
  >
export const SearchDocument = new TypedDocumentString(`
    query search($first: Int, $query: String, $brands_in: [String!]) {
  productSearch(first: $first, query: $query, filter: {brand: {in: $brands_in}}) {
    ...SearchResultsList_ProductSearchConnectionFragment
  }
}
    fragment SearchResultsList_ProductFragment on Product {
  id
  name
  price
  brand
}
fragment SearchResultsList_ProductSearchConnectionFragment on ProductSearchConnection {
  edges {
    cursor
    node {
      ...SearchResultsList_ProductFragment
    }
  }
}`) as unknown as TypedDocumentString<SearchQuery, SearchQueryVariables>
