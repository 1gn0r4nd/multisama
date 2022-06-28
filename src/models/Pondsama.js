import { getAPIFish } from '../api/MoonsamaMarketplaceAPI';
export default class Pondsama {
    name//: string;
    description
    attributes
    constructor({name, description, breed, attributes}) {
        this.name = name;
        this.description = description;
        this.breed = breed;
        this.attributes = attributes;
    }

    static async fetchPondsama({id}) {
        return getAPIFish({ fishID: id}).then(response => {
                        let base_attributes = response.data.tokenURIObject;
                        // console.log(response.name);
                        const name = base_attributes.name;
                        const description = base_attributes.description;
                        const attributes = base_attributes.attributes
                        return new Pondsama(
                            {
                                name: name, 
                                description: description, 
                                attributes: attributes
                            }
                        );
                    });
                    // {"data":
                    // {"asset":
                    //     {"chainId":1285,"assetAddress":"0xe4edcaaea73684b310fc206405ee80abcec73ee0","assetId":"3150","assetType":"ERC721","id":"0xe4edcaaea73684b310fc206405ee80abcec73ee0-3150"}
                    // ,"name":"Pondsama",
                    // "symbol":"PONDSAMA",
                    // "totalSupply":"6416",
                    // "tokenURI":"ipfs://QmVdTsjDDJUzR4U7eRt1ZqNbqdwqKojPBJnnC2RC1UHagm",
                    // "contractURI":"ipfs://QmdCKgexLpBjST3FdWLbPZLH2FWRtu2NXE9dk5ZirdDRGb",
                    // "tokenURIObject":{"image":"ipfs://QmNr7bQ45eAsKRy7MhNSoA1NtRJnZmraLB5mJE2Eh6KPke/pondsama_organic_support.jpg",
                    // "name":"TOUGH ORGANIC SPELLY",
                    // "description":"Harnessing ancient powers, Spelly commands the waters to aid its allies.",
                    // "external_url":"https://moonsama.com",
                    // "composite":false,
                    // "asset":{"assetType":"ERC721","assetAddress":"0xe4edcaaea73684b310fc206405ee80abcec73ee0","chainId":1285},
                    // "attributes":[
                    //     {"trait_type":"Breed","value":"Spelly"},
                    //     {"trait_type":"Type","value":"Organic"},
                    //     {"trait_type":"Nature","value":"Tough"},
                    //     {"trait_type":"Passive","value":"Adrenaline Rush"},
                    //     {"trait_type":"Skill","value":"Healing Wave"},
                    //     {"trait_type":"Breed Counter","value":1},
                    //     {"trait_type":"Gen","value":1},
                    //     {"display_type":"range_1_100","trait_type":"HP","value":93},
                    //     {"display_type":"range_1_100", "trait_type":"PW","value":36},
                    //     {"display_type":"range_1_100","trait_type":"DF","value":71},
                    //     {"display_type":"range_1_100","trait_type":"SP","value":33},
                    // ],
                    // "image_meta":{"ext":"jpg","mime":"image/jpeg"}},
                    // "contractURIObject":{"name":"Pondsama","description":"Pondsama is a 5v5 autobattler set in a browser-based metaverse. Enjoy the fish, the fighting, and most importantly, the poop.","image":"ipfs://QmTDjazcg4zvvnzvAHnwkpprttFYt3jKzwkAdRVn7XmqVE","external_link":"https://moonsama.com"}},"status":200,"statusText":"OK","headers":{"content-type":"application/json; charset=utf-8"},"config":{"transitional":{"silentJSONParsing":true,"forcedJSONParsing":true,"clarifyTimeoutError":false},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1,"env":{"FormData":null},"headers":{"Accept":"application/json, text/plain, */*"},"method":"get","url":"https://moonsama-api.moonsama.com/api/v1/nft/info/1285/ERC721/0xe4edcaaea73684b310fc206405ee80abcec73ee0/3150"},"request":{}}


        // Perform `async` stuff here...
        // const db = await initializeDatabase();
        // const data = await db.fetchUser(id);
        // const result = await doSomeMoreWork(data);
        // const name = await result.text();

        // Invoke the private constructor...
    }
}