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
    orders: new Array([
        ['0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-1',{'buyOrders': [], 'sellOrders': []}],
        ['0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2',{'buyOrders': [], 'sellOrders': []}]
    ]),
    //{
    //     buyOrders: [],
    //     sellOrders: []
    //},
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed',
    error: null
}

// export function marketplaceReducer(state = initialState, action) {
//     switch (action.type){
//         case 'marketplace/UPDATE_ORDERS':
//             //let fresh_orders = updateOrders(action.payload);
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
        //     //{orderType, asset, maker=address_everyone, skip=default_skip, first=default_first}
        //     //const orderType = payload.orderType || "BUY";
    },
    extraReducers(builder) {
        builder
            .addCase(updateOrders.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updateOrders.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // let orders = action.payload.data.orders;
                // orders.sort((a, b) => a.pricePerUnit < b.pricePerUnit ? 1 : -1);
                let buyAsset = action.payload.data.buyOrders[0].buyAsset.id;
                state.orders[buyAsset] =
                    { 
                        buyOrders: action.payload.data.buyOrders,
                        sellOrders: action.payload.data.sellOrders,
                    };
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

export const getOrdersStatus = (state) => state.marketplace.status;
export const getOrdersError = (state) => state.marketplace.error;

export default marketplaceSlice.reducer;

// export function updateOrders(dispatch, {orderType, asset, maker=address_everyone, skip=default_skip, first=default_first}) {