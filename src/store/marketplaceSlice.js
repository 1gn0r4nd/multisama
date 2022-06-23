import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    orders: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed',
    error: null
}

// export function marketplaceReducer(state = initialState, action) {
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

export const updateOrders = createAsyncThunk('marketplace/update_orders', async (payload) => {
    const response = await getAPIOrders(
        {
            orderType: payload.orderType,
            asset: payload.asset,
            maker: payload.maker,
            skip: payload.skip,
            first: payload.first
        }
    )
    return response.data;
})

export const marketplaceSlice = createSlice({
    name: 'marketplace',
    initialState,
    reducers: {
        // update_orders: (state, action) => {
        //     const payload = action.payload;
        //     //{orderType, asset, maker=address_everyone, skip=default_skip, first=default_first}
        //     //const orderType = payload.orderType || "BUY";
        //     getAPIOrders(
        //         {
        //             orderType: payload.orderType,
        //             asset: payload.asset,
        //             maker: payload.maker,
        //             skip: payload.skip,
        //             first: payload.first
        //         }
        //     ).then(result => {
                // console.log("marketplaceslice : "+ result);
                //sort on pricePerUnit
                // let result = [
                //     {
                //       "id": "0xd185399b7c589e0cbdc57102680a3353651132193dce5c6fcec0ec6eb2af4ed1",
                //       "orderType": "BUY",
                //       "seller": {
                //         "id": "0x4fcc51e2e0a9d65e87e75dc2db1e68196532a33f"
                //       },
                //       "salt": "0x117e33da2a7079",
                //       "createdAt": "1653755718",
                //       "active": true,
                //       "quantityLeft": "197316324600000000000",
                //       "onlyTo": "0x0000000000000000000000000000000000000000",
                //       "pricePerUnit": "1070000000000000"
                //     },
                //     {
                //       "id": "0x00f5f1cb944b50b9ff4905eb80919be725272719c4ecc63d28f936d26eeba326",
                //       "orderType": "BUY",
                //       "seller": {
                //         "id": "0xc60048fd2bccd82da8a1c0d06b3cf1bfd7d740a2"
                //       },
                //       "salt": "0x1c90089ba8bf25",
                //       "createdAt": "1654014720",
                //       "active": true,
                //       "quantityLeft": "2349870000000000000",
                //       "onlyTo": "0x0000000000000000000000000000000000000000",
                //       "pricePerUnit": "1110000000000000"
                //     },
                //     {
                //       "id": "0x2ad57e4b6239a10ae574ad403bd6e2fd2f07204ae6d8574c9378c099b14335f8",
                //       "orderType": "BUY",
                //       "seller": {
                //         "id": "0x498bcbaed87038e83a190eec8993ac4626e1c92f"
                //       },
                //       "salt": "0x234552712adb3",
                //       "createdAt": "1655888136",
                //       "active": true,
                //       "quantityLeft": "2400000000000000000",
                //       "onlyTo": "0x0000000000000000000000000000000000000000",
                //       "pricePerUnit": "2400000000000000"
                //     }
                //   ];
            //     result.sort((a, b) => a.pricePerUnit < b.pricePerUnit ? 1 : -1);
            //     return {
            //         orders: result
            //     };
            // });
    //   }
    },
    extraReducers(builder) {
        builder
            .addCase(updateOrders.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updateOrders.fulfilled, (state, action) => {
                state.status = 'succeeded'
                let orders = action.payload.data.orders;
                orders.sort((a, b) => a.pricePerUnit < b.pricePerUnit ? 1 : -1);
                state.orders = orders;
                // Add any fetched posts to the array
                //state.orders = state.orders.concat(loadedOrders);
            })
            .addCase(updateOrders.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
  })


//selectors
// export function selectAllOrders(state) {
//     return state.marketplace.orders;
// } 
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

