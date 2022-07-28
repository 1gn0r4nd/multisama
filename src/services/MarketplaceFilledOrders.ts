import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
const marketplace_graphql_url = 'https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/marketplacev5';


// export interface Pagination {
//     page: number
//     per_page: number
//     total: number
//     total_pages: number
// }
export interface FilledOrder {
    id: string,
    // buyerSendsAmountFull: number,
    // order: {
    //     quantity: number,
    //     sellAsset: {
    //         assetId: string,
    //         assetAddress: string
    //     },
    //     buyAsset: {
    //         assetId: string,
    //         assetAddress: string
    //     },
    //     askPerUnitNominator: number,
    //     askPerUnitDenominator: number
    // }
    createdAt: number
}

export interface GetFilledOrdersByAssetListResponse{
    data: {
        latestFills: FilledOrder[]
    }
}

export const api = createApi({
    baseQuery: graphqlRequestBaseQuery({
      url: marketplace_graphql_url,
    }),
    endpoints: (builder) => ({
        getFilledOrdersByAssetList: builder.query<
            GetFilledOrdersByAssetListResponse,
            { page?: number; per_page?: number; order_ids: string[]; }
        >({
        query: ({ page, per_page, order_ids }) => ({
            document: gql`
                #($page-1) * $per_page
                query getLatestFills($page: Int = 1, $per_page: Int = 1000, $order_ids: [String]) {
                    latestFills:
                        fills(
                            skip: 0, 
                            first: $per_page, 
                            orderBy: createdAt, 
                            orderDirection: desc, 
                            where: {
                                order_in: $order_ids
                            }
                        ) 
                        {
                            id
                            # buyerSendsAmountFull
                            # order {
                            #     quantity
                            #     sellAsset {
                            #     assetId
                            #     assetAddress
                            #     }
                            #     buyAsset {
                            #     assetId
                            #     assetAddress
                            #     }
                            #     askPerUnitNominator
                            #     askPerUnitDenominator
                            # }
                            createdAt
                        }
                }
            `,
            variables: {
                page,
                per_page,
                order_ids
            },
            transformResponse: (response: GetFilledOrdersByAssetListResponse) => response.data.latestFills,
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
export const { useGetFilledOrdersByAssetListQuery } = api
//   export const { useGetPostsQuery, useGetPostQuery } = api
