import {  createApi } from '@reduxjs/toolkit/query/react'
import { gql } from 'graphql-request'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'

const marketplace_graphql_url = 'https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/marketplacev5';

export interface BuyOrder {
    id: string
    orderType: string
    seller: {
        id: string
    }
    salt: string
    createdAt: number
    buyAsset: {
        id: string
    }
    active: boolean
    quantity: number
    quantityLeft: number
    askPerUnitNominator: string
    askPerUnitDenominator: string
    fills: {
        id: string
        order: {
            id: string
        }
        buyerSentAmount: number
        sellerSentAmount: number
    }
    onlyTo: string
    pricePerUnit: number
}

export interface SellOrder{
    id: string
    orderType: string
    seller: {
        id: string
    }
    salt: string
    createdAt: number
    buyAsset: {
        id: string
    }
    active: boolean
    quantity: number
    quantityLeft: number
    askPerUnitNominator: number
    askPerUnitDenominator: number
    fills: {
        id: string
        order: {
            id: string
        }
        buyerSentAmount: number
        sellerSentAmount: number
    }
    onlyTo: string
    pricePerUnit: number
}
export interface OrdersList {
    'buyOrders': BuyOrder[], 
    'sellOrders': SellOrder[]
}
export interface Pagination {
    page: number
    per_page: number
    total: number
    total_pages: number
}

export interface GetMarketplaceOrdersResponse extends Pagination {
    data: {
        orders_list: OrdersList
    }
}

export const api = createApi({
    baseQuery: graphqlRequestBaseQuery({
      url: marketplace_graphql_url,
    }),
    endpoints: (builder) => ({
      getOrdersList: builder.query<
        GetMarketplaceOrdersResponse,
        { page?: number; per_page?: number; asset: string; }
      >({
        query: ({ page, per_page, asset }) => ({
          document: gql`
            #($page-1) * $per_page
            query getAssetOrders($page: Int = 1, $per_page: Int = 1000) {
                buyOrders:
                    orders(
                        skip: 0, 
                        first: $per_page, 
                        orderBy: pricePerUnit, 
                        orderDirection: desc, 
                        where: {
                            active: true, 
                            buyAsset: $asset
                        }, 
                        subgraphError: deny
                    ) 
                    {
                        id
                        orderType
                        seller {
                            id
                        }
                        salt
                        createdAt
                        buyAsset{
                            id
                        }
                        active
                        quantity
                        quantityLeft
                        askPerUnitNominator
                        askPerUnitDenominator
                        fills {
                            id
                            order {
                                id
                            }
                            buyerSentAmount
                            sellerSentAmount
                        }
                        onlyTo
                        pricePerUnit
                    }
                sellOrders:
                    orders(
                        skip: 0, 
                        first: $per_page, 
                        orderBy: pricePerUnit, 
                        orderDirection: asc, 
                        where: {
                            active: true, 
                            sellAsset: $asset
                        }, 
                        subgraphError: deny
                    ) 
                    {
                        id
                        orderType
                        seller {
                            id
                        }
                        salt
                        createdAt
                        buyAsset{
                            id
                        }
                        active
                        quantity
                        quantityLeft
                        askPerUnitNominator
                        askPerUnitDenominator
                        fills {
                            id
                            order {
                                id
                            }
                            buyerSentAmount
                            sellerSentAmount
                        }
                        onlyTo
                        pricePerUnit
                    }
            }
          `,
          variables: {
            page,
            per_page,
            asset
          },
          transformResponse: (response: GetMarketplaceOrdersResponse) => response.data,
        }),
      }),
    //   getPost: builder.query<Post, string>({
    //     query: (id) => ({
    //       document: gql`
    //       query GetPost($id: ID!) {
    //         post(id: ${id}) {
    //           id
    //           title
    //           body
    //         }
    //       }
    //       `,
    //     }),
    //     transformResponse: (response: PostResponse) => response.data.post,
    //   }),
    }),
  })
export const { useGetOrdersListQuery } = api
//   export const { useGetPostsQuery, useGetPostQuery } = api
