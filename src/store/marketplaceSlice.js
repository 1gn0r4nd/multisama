import { createSlice } from "@reduxjs/toolkit";
import { getAPIOrders } from '../api/MoonsamaMarketplaceAPI';
// const aWood = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/1';
// const aStone = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/2';
// const aIron = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/3';
// const aGold = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/4';
// const aExp = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/5';
// const aBullets = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/6';
// const aGrenades = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/7';
// const aShampoo = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/8';
// const aChips = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/9';
// const aGrain = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/10';
// const S1RewardKey = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/11';
// const aString = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/12';
// const aFish = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/13';
// const aBait = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/14';
// const aPoop = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777/15';
// const address_everyone = '0x0000000000000000000000000000000000000000';
// const default_skip = 0;
// const default_first = 100;
//0xe4edcaaea73684b310fc206405ee80abcec73ee0/# FISH

const initialState = {
    orders: []
}

// export function marketplaceReducer(state = initialState, action) {
//     console.log("called marketplace Reducer");
//     console.log(JSON.stringify(state));
//     console.log(JSON.stringify(action));
//     switch (action.type){
//         case 'marketplace/UPDATE_ORDERS':
//             //let fresh_orders = updateOrders(action.payload);
//             console.log("OLD state.orders");
//             console.log(state.orders);
//             return { 
//                 ...state,
//                 orders: state.orders.concat(action.payload)
//             };
//         default:
//             return state;
//     }
// }

export const marketplaceSlice = createSlice({
    name: 'marketplace',
    initialState,
    reducers: {
// const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);
// const [items, setItems] = useState([]);
//type: marketplace/update_orders
        update_orders: (state, action) => {
            // const type = action.type;
            // const payload = action.payload;
            // console.log("type: "+ type +" payload: "+ JSON.stringify(payload));
            //{orderType, asset, maker=address_everyone, skip=default_skip, first=default_first}
            //const orderType = payload.orderType || "BUY";
            // getAPIOrders(
            //     {
            //         orderType: payload.orderType,
            //         asset: payload.asset,
            //         maker: payload.maker,
            //         skip: payload.skip,
            //         first: payload.first
            //     }
            // ).then(result => {
                // console.log("marketplaceslice : "+ result);
                //sort on pricePerUnit
                let result = [
                    {
                      "id": "0xd185399b7c589e0cbdc57102680a3353651132193dce5c6fcec0ec6eb2af4ed1",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0x4fcc51e2e0a9d65e87e75dc2db1e68196532a33f"
                      },
                      "salt": "0x117e33da2a7079",
                      "createdAt": "1653755718",
                      "active": true,
                      "quantityLeft": "197316324600000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1070000000000000"
                    },
                    {
                      "id": "0x00f5f1cb944b50b9ff4905eb80919be725272719c4ecc63d28f936d26eeba326",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0xc60048fd2bccd82da8a1c0d06b3cf1bfd7d740a2"
                      },
                      "salt": "0x1c90089ba8bf25",
                      "createdAt": "1654014720",
                      "active": true,
                      "quantityLeft": "2349870000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1110000000000000"
                    },
                    {
                      "id": "0xf7dd8cb5a35b90dcaf872f259c11f164012bd17d1a879435685b2b52b1aef977",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0xef2b926b43f971cc0ef243876a7aaa4b2aae1f40"
                      },
                      "salt": "0x1b38912ee04f07",
                      "createdAt": "1655071044",
                      "active": true,
                      "quantityLeft": "8640000000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1080000000000000"
                    },
                    {
                      "id": "0x3af7aa6822ec4ca4fca8d89882006a3795173507bbffc82f06a9dae2c39cd538",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0xc60048fd2bccd82da8a1c0d06b3cf1bfd7d740a2"
                      },
                      "salt": "0x10861e0b038278",
                      "createdAt": "1655285274",
                      "active": true,
                      "quantityLeft": "3450000000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1150000000000000"
                    },
                    {
                      "id": "0xb17b3e4d4d4e60bf06e33a46afdefabd8a32af8d609a438d8080c47b79bbbbb4",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0xc60048fd2bccd82da8a1c0d06b3cf1bfd7d740a2"
                      },
                      "salt": "0x1c59e86f930994",
                      "createdAt": "1655305170",
                      "active": true,
                      "quantityLeft": "2117366973000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1350000000000000"
                    },
                    {
                      "id": "0x3424acc25149aeb423dff70d3d112927afad6686456b26d1336136012ca2e5de",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0x5a10b47c520d2dd756657787c65afcfc9b9d4935"
                      },
                      "salt": "0x11bf20b12f833b",
                      "createdAt": "1655410176",
                      "active": true,
                      "quantityLeft": "48881936000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1360000000000000"
                    },
                    {
                      "id": "0xccd75a5734a739dc131e82b40554af6d021d22495c94947f3f95b12c5ead91e8",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0x0939ece40293c89df6f4639af3c7c35d799b5f00"
                      },
                      "salt": "0x18dc95281be29d",
                      "createdAt": "1655453400",
                      "active": true,
                      "quantityLeft": "959000000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1370000000000000"
                    },
                    {
                      "id": "0xa3c969fa184c18e532dd867869cd2086ab7ca853f0e85aad4b07e68d7c2c2334",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0x6d03524dabfeee640f0e2011ea79285d1b3db200"
                      },
                      "salt": "0x1a87b6e43274fd",
                      "createdAt": "1655504970",
                      "active": true,
                      "quantityLeft": "1125252000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1380000000000000"
                    },
                    {
                      "id": "0x493321136e523f6f22c6bc35b621856cc83b4536cabf942cfc72d3a5c07638b8",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0x6e9ca31c4cc4804df5a92a389a7ddd839584b931"
                      },
                      "salt": "0x11e0f25f2c17e9",
                      "createdAt": "1655608512",
                      "active": true,
                      "quantityLeft": "304876000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1430000000000000"
                    },
                    {
                      "id": "0x3c5757e47d27ea839fb5d9b0022d783830f5f3725f32d9fa3bc6eea5aa343c4e",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0x72da9e9246fd1a7df139a127961879561fea674e"
                      },
                      "salt": "0x184d076913662b",
                      "createdAt": "1655617920",
                      "active": true,
                      "quantityLeft": "114000000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1500000000000000"
                    },
                    {
                      "id": "0x2355446cb4ad0eb89ef01f241a8dc9aa4a2c370a7b5adea06fd2552a30715d01",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0x0939ece40293c89df6f4639af3c7c35d799b5f00"
                      },
                      "salt": "0xd60e1856c4757",
                      "createdAt": "1655664864",
                      "active": true,
                      "quantityLeft": "479500000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1370000000000000"
                    },
                    {
                      "id": "0x87d2d7a1b834ba1813dd27071ccdfe17070c4314b759e17d29292add8d7f9fd6",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0xc60048fd2bccd82da8a1c0d06b3cf1bfd7d740a2"
                      },
                      "salt": "0x68848404de529",
                      "createdAt": "1655709174",
                      "active": true,
                      "quantityLeft": "5250000000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1750000000000000"
                    },
                    {
                      "id": "0xaf71e2d1080aa5fa81fd3f8d1b4fcc1fc3e88fc6e91fc0a868c658d061c10629",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0x0939ece40293c89df6f4639af3c7c35d799b5f00"
                      },
                      "salt": "0x1a02b7eded8ed3",
                      "createdAt": "1655761440",
                      "active": true,
                      "quantityLeft": "8750000000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1750000000000000"
                    },
                    {
                      "id": "0x2a11e9a2d9486bbe141452ed6be654f9e5b7dd5589f44e25fe16d4b384acbaf1",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0xc60048fd2bccd82da8a1c0d06b3cf1bfd7d740a2"
                      },
                      "salt": "0x14ed9fe2f40beb",
                      "createdAt": "1655762592",
                      "active": true,
                      "quantityLeft": "4600000000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "2300000000000000"
                    },
                    {
                      "id": "0xca783276f7acdf8c9bc146b3f7097a5c0a64d723cdfa706c0cd474ad8341eefc",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0xf0db619363881ceb6ba06b9ae3dd4886652aa896"
                      },
                      "salt": "0x162da60d77d22f",
                      "createdAt": "1655789412",
                      "active": true,
                      "quantityLeft": "34146000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "2710000000000000"
                    },
                    {
                      "id": "0xa73a62eb5f33efaa37d842443ddddd2b4abaab3cd1fcd0c15ffdeb1db4d6f696",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0xf0db619363881ceb6ba06b9ae3dd4886652aa896"
                      },
                      "salt": "0x1c9ee8d0639ee5",
                      "createdAt": "1655792154",
                      "active": true,
                      "quantityLeft": "677500000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "2710000000000000"
                    },
                    {
                      "id": "0x5b78df316d9c7c023d67439805f550f977e0bd850048fcc085ceba7c588bac8a",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0xe3ce175c493af8de3786e7319c6da0b58c8c0007"
                      },
                      "salt": "0x1500682ee4eac3",
                      "createdAt": "1655884410",
                      "active": true,
                      "quantityLeft": "3520000000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "1760000000000000"
                    },
                    {
                      "id": "0x2ad57e4b6239a10ae574ad403bd6e2fd2f07204ae6d8574c9378c099b14335f8",
                      "orderType": "BUY",
                      "seller": {
                        "id": "0x498bcbaed87038e83a190eec8993ac4626e1c92f"
                      },
                      "salt": "0x234552712adb3",
                      "createdAt": "1655888136",
                      "active": true,
                      "quantityLeft": "2400000000000000000",
                      "onlyTo": "0x0000000000000000000000000000000000000000",
                      "pricePerUnit": "2400000000000000"
                    }
                  ];
                result.sort((a, b) => a.pricePerUnit < b.pricePerUnit ? 1 : -1);
                return {
                    orders: result
                };
            // });
      }
    }
  })

  
export const { update_orders } = marketplaceSlice.actions;
export const selectAllOrders = (state) => {
    return state.marketplace.orders;
}

export default marketplaceSlice.reducer;

// export function updateOrders(dispatch, {orderType, asset, maker=address_everyone, skip=default_skip, first=default_first}) {
//     // const [error, setError] = useState(null);
//     // const [isLoaded, setIsLoaded] = useState(false);
//     // const [items, setItems] = useState([]);
//     getAPIOrders(
//         {
//             orderType: orderType,
//             asset: asset,
//             maker: maker,
//             skip: skip,
//             first: first
//         }
//     ).then(result => {
//         dispatch(
//             {
//                 type: 'marketplace/UPDATE_ORDERS', 
//                 payload: [result]
//             });
//     });


//     // let sellOrders = getAPIOrders({
//     //     orderType: 'sell',
//     //     asset: asset,
//     //     maker: address_everyone,
//     //     skip: default_skip,
//     //     first: default_first
//     // });
//     // return (dispatch, getState) => {
//     //     const state = getState();
//     // } 
//     // [...buyOrders, ...sellOrders];
    
// }


//selectors
// export function getOrders(state) {
//     return state.marketplace.orders;
// } 