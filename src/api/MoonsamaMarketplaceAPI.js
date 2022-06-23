import axios from 'axios';

const marketplace_graphql_url = `https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/marketplacev5`;

export function getAPIOrders({orderType, asset, maker, skip, first}){
    //TODO filter by maker
    let assetType = orderType.toLowerCase()+'Asset'
    const query = `
        {
            orders(
                skip: ${skip}, 
                first: ${first}, 
                orderBy: createdAt, 
                orderDirection: asc, 
                where: {
                    active: true, 
                    ${assetType}: "${asset}"
                }, 
                subgraphError: deny
            ) {
            id
            orderType
            seller {
                id
            }
            salt
            createdAt
            active
            quantityLeft
            onlyTo
            pricePerUnit
            }
        }`
    return axios.post(marketplace_graphql_url, {query});
}