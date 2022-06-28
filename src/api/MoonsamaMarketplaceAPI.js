import axios from 'axios';
import Pondsama from '../models/Pondsama';

const marketplace_graphql_url = 'https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/marketplacev5';
const moonsama_api_url = 'https://moonsama-api.moonsama.com/api/v1/asset/address/check';
const contract_graphql_url = 'https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/nft-1155-mx/graphql';

//https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/multiverse-bridge/graphql
//https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/nft
//https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/nft-1155-factory
//https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/nft-1155-multiverseart
//https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/nft-721-mmplots1
//https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/nft-1155-samabox


export function getAPIOrders({orderType, asset, maker, skip, first}){
    //TODO filter by maker
    const query = `
    query getAssetOrders {
        buyOrders:
            orders(
                skip: ${skip}, 
                first: ${first}, 
                orderBy: pricePerUnit, 
                orderDirection: desc, 
                where: {
                    active: true, 
                    buyAsset: "${asset}"
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
                skip: ${skip}, 
                first: ${first}, 
                orderBy: pricePerUnit, 
                orderDirection: asc, 
                where: {
                    active: true, 
                    sellAsset: "${asset}"
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
export function getAPIFishes({walletAddress, chainId='MOONRIVER', skip=0, first=1000}){
    const url = `${moonsama_api_url
    }?recognizedAsset=PONDSAMA&owner=${walletAddress}&chainId=${chainId}&skip=${skip}&first=${first}`
    return axios.get(url).then(response => {
        let promise_array = response.data.tokens.map(
            async function (fish) {
                //assetId, location, amountOwned
                return Pondsama.fetchPondsama({id: fish.assetId});
        });
        console.log(JSON.stringify(promise_array));
        return Promise.all(promise_array);
    });
}

export function getAPIFish({fishID}){
    const url = `https://moonsama-api.moonsama.com/api/v1/nft/info/1285/ERC721/0xe4edcaaea73684b310fc206405ee80abcec73ee0/${fishID}`
    return axios.get(url);
}

export function getAPIMoonsamas({walletAddress, chainId='MOONRIVER', maker, skip=0, first=1000}){
    const url = `${moonsama_api_url}?recognizedAsset=MOONSAMA&owner=${walletAddress}&chainId=${chainId}&skip=${skip}&first=${first}`
    return axios.get(url);
}

export function getContracts({orderType, asset, maker, skip, first}){
    //TODO ??? collection
    const query = `
        {
            tokens(
                skip: ${skip}
                first: ${first}
                orderBy: id
                orderDirection: asc
                subgraphError: deny
            ) 
            {
                id
                totalSupply
                uri
                contract {
                    id
                    name
                    symbol
                }
            }
        }`
        //id, totalSupply, uri, contract.id
        // {
        //     "id": "10",
        //     "totalSupply": "3",
        //     "uri": "ipfs://QmamrWpgxSUo9nZ7q5eoAXcUG97scRmkTXno3fzLf4zHiW",
        //     "contract": {
        //       "id": "0x1974eeaf317ecf792ff307f25a3521c35eecde86",
        //       "name": "MoonX",
        //       "symbol": "MX"
        //     }
        //   },
    return axios.post(contract_graphql_url, {query});
}
//https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/nft-1155-mx/graphql?query=%7B%0A%20%20tokens(skip%3A%200%2C%20first%3A%201000%2C%20orderBy%3A%20id%2C%20orderDirection%3A%20asc%2C%20subgraphError%3A%20deny)%20%7B%0A%20%20%20%20id%2C%0A%20%20%20%20totalSupply%2C%0A%20%20%20%20uri%2C%2C%0A%20%20%20%20contract%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A
//https://moonsama-api.moonsama.com/api/v1/asset/address/check?recognizedAsset=MOONSAMA&owner=0x9c6cd49392e48a7dbe14d26164bedb32db70f9b0&chainId=MOONRIVER&skip=0&first=1000
//https://moonsama-api.moonsama.com/api/v1/asset/address/check?recognizedAsset=SAMABOX&owner=0x3526Df3288bd0874e059643fA9645beCaA571FEC&chainId=MOONRIVER&skip=0&first=1000
//MMPLOTS1 MSAMA, "???", MMAF, MMA, SAMABOX, MEMBASSY
//https://moonriver-subgraph.moonsama.com/subgraphs/name/moonsama/marketplacev5/graphql?query=query%7B%0A%20%20orders(skip%3A%200%2C%20first%3A%20100%2C%20orderBy%3A%20createdAt%2C%20orderDirection%3A%20asc%2C%20where%3A%20%7Bactive%3A%20true%2C%20sellAsset%3A%20%220x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2%22%2C%20seller%3A%20%220x53142db7e4b06c6137963e9298f4f65ea73ff3c0%22%20%7D%2C%20subgraphError%3A%20deny)%20%7B%0A%20%20%20%20id%0A%20%20%20%20orderType%0A%20%20%20%20seller%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20escrowBalances%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20sellAsset%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20assetId%0A%20%20%20%20%20%20assetType%0A%20%20%20%20%20%20assetAddress%0A%20%20%20%20%7D%0A%20%20%20%20buyAsset%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20assetId%0A%20%20%20%20%20%20assetType%0A%20%20%20%20%20%20assetAddress%0A%20%20%20%20%7D%0A%20%20%20%20strategyType%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20address%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%7D%0A%20%20%20%20salt%0A%20%20%20%20createdAt%0A%20%20%20%20active%0A%20%20%20%20cancel%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20sellerGetsBackAmount%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%7D%0A%20%20%20%20fills%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20buyer%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20buyerSendsAmountFull%0A%20%20%20%20%20%20buyerSentAmount%0A%20%20%20%20%20%20sellerSendsAmountFull%0A%20%20%20%20%20%20sellerSentAmount%0A%20%20%20%20%20%20complete%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20order%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20quantity%0A%20%20%20%20quantityLeft%0A%20%20%20%20startsAt%0A%20%20%20%20expiresAt%0A%20%20%20%20askPerUnitNominator%0A%20%20%20%20askPerUnitDenominator%0A%20%20%20%20onlyTo%0A%20%20%20%20partialAllowed%0A%20%20%20%20pricePerUnit%0A%20%20%7D%0A%7D