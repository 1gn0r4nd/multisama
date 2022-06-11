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
    axios.post(marketplace_graphql_url, {query})
    .then(result=>{
        let axios_result = result.data
        //TODO do error handling
        //result.status
        //result.statusText
        console.log(result.data.data.orders);
        return axios_result.data.orders;
    })
    .catch(err=>{
        //TODO push it to state
        return err;
    })
}