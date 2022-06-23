import axios from 'axios';

const marketplace_graphql_url = `https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/marketplacev5`;

export function getAPIOrders({orderType, asset, maker, skip, first}){
    //TODO filter by maker
    let assetType = orderType.toLowerCase()+'Asset'
    let orderDirection = orderType.toLowerCase() === 'buy' ? 'desc' : 'asc'
    const query = `
        {
            orders(
                skip: ${skip}, 
                first: ${first}, 
                orderBy: pricePerUnit, 
                orderDirection: ${orderDirection}, 
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
        }`
    return axios.post(marketplace_graphql_url, {query});
}

//https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/marketplacev5/graphql?query=query%7B%0A%20%20orders(skip%3A%200%2C%20first%3A%20100%2C%20orderBy%3A%20createdAt%2C%20orderDirection%3A%20asc%2C%20where%3A%20%7Bactive%3A%20true%2C%20sellAsset%3A%20%220x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2%22%2C%20seller%3A%20%220x53142db7e4b06c6137963e9298f4f65ea73ff3c0%22%20%7D%2C%20subgraphError%3A%20deny)%20%7B%0A%20%20%20%20id%0A%20%20%20%20orderType%0A%20%20%20%20seller%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20escrowBalances%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20sellAsset%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20assetId%0A%20%20%20%20%20%20assetType%0A%20%20%20%20%20%20assetAddress%0A%20%20%20%20%7D%0A%20%20%20%20buyAsset%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20assetId%0A%20%20%20%20%20%20assetType%0A%20%20%20%20%20%20assetAddress%0A%20%20%20%20%7D%0A%20%20%20%20strategyType%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20address%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%7D%0A%20%20%20%20salt%0A%20%20%20%20createdAt%0A%20%20%20%20active%0A%20%20%20%20cancel%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20sellerGetsBackAmount%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%7D%0A%20%20%20%20fills%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20buyer%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20buyerSendsAmountFull%0A%20%20%20%20%20%20buyerSentAmount%0A%20%20%20%20%20%20sellerSendsAmountFull%0A%20%20%20%20%20%20sellerSentAmount%0A%20%20%20%20%20%20complete%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20order%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20quantity%0A%20%20%20%20quantityLeft%0A%20%20%20%20startsAt%0A%20%20%20%20expiresAt%0A%20%20%20%20askPerUnitNominator%0A%20%20%20%20askPerUnitDenominator%0A%20%20%20%20onlyTo%0A%20%20%20%20partialAllowed%0A%20%20%20%20pricePerUnit%0A%20%20%7D%0A%7D