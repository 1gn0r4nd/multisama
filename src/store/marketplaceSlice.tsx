import { createSlice, PayloadAction , createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from './store.js';
import Order from '../models/Order';
import { 
    getAPIOrderFills 
} from '../api/MoonsamaMarketplaceAPI';
// import FilledOrder from '../models/FilledOrder.tsx';
import { OrdersList, useGetOrdersListQuery } from '../services/MarketplaceOrders'

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

//todo use model
export interface FilledOrder {
    id: string,
    buyerSendsAmountFull: number
    order: Order
    createdAt: number
}
export interface FilledOrdersList {
    asset: string,
    filled_orders: []
}
export interface MarketPlaceState {
    orders: AssetOrders[],
    // { asset: string, orders: OrdersList[]}[]
    fills: FilledOrdersList[],
    status: string, //'idle' | 'loading' | 'succeeded' | 'failed',
    error: string
}

interface UpdateOrderPayload{
    asset: string;
    page: number;
    per_page: number
}
interface AssetOrders {
    asset: string
    orders: OrdersList
}
const initialState: MarketPlaceState = {
    orders: [],
    fills: [
        {
            asset: '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-1',
            filled_orders: []
        },
        {
            asset: '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2',
            filled_orders: []
        }
    ],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed',
    error: ''
}

// export const updateOrders = createAsyncThunk(
//     'marketplace/updateOrders', 
//     async (payload: {
//         orderType: string, 
//         asset: string, 
//         maker: string,
//         skip: number, 
//         first: number
//     }) => {
//     const response = await getAPIOrders(
//         {
//             orderType: payload.orderType,
//             asset: payload.asset,
//             maker: payload.maker,
//             skip: payload.skip,
//             first: payload.first
//         }
//     )
//     return response.data;
    
// })

export const updateFills = createAsyncThunk(
    'marketplace/updateFills', 
    async (payload: {
        orderType: string, 
        asset: string, 
        maker: string,
        skip: number, 
        first: number
    }) => {
    const response = await getAPIOrderFills(
        {
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
        //incrementByAmount: (state, action: PayloadAction<number>) => {
        updateOrders: (state, action: PayloadAction<UpdateOrderPayload>) => {
            const page = 1;
            const per_page = 1000;
            const asset = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2';
            const { data: ordersList, isLoading, isFetching } = useGetOrdersListQuery({ page, per_page, asset });
            //GetMarketplaceOrdersResponse
            console.log(JSON.stringify(ordersList));
            console.log(JSON.stringify(isLoading));
            console.log(JSON.stringify(isFetching));
            // state.orders = 
            // [
                //todo add to orders
                //...state.orders,
                // {
                    // asset: asset,
                    // orders: ordersList
                // }
            // ];
        }
        
        //     //{orderType, asset, maker=address_everyone, skip=default_skip, first=default_first}
        //     //const orderType = payload.orderType || "BUY";
    },
    extraReducers(builder) {
        builder
            // .addCase(updateOrders.pending, (state, action) => {
            //     state.status = 'loading'
            // })
            // .addCase(updateOrders.fulfilled, (state, action) => {
            //     state.status = 'succeeded'
            //     // let orders = action.payload.data.orders;
            //     // orders.sort((a, b) => a.pricePerUnit < b.pricePerUnit ? 1 : -1);
            //     const buyAsset = action.payload.data.buyOrders[0].buyAsset.id as string;
            //     const buyOrders = action.payload.data.buyOrders as BuyOrder[]
            //     const updated_asset_orders = {
            //         asset: buyAsset,
            //         orders: { 
            //             buyOrders: buyOrders,
            //             sellOrders: action.payload.data.sellOrders as SellOrder[],
            //         }
            //     }
            //     state.orders = [updated_asset_orders];
            // })
            // .addCase(updateOrders.rejected, (state, action) => {
            //     state.status = 'failed'
            //     state.error = action.error.message || 'Unknown error'
            // })
            .addCase(updateFills.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updateFills.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // let buyAsset = '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2';
                // state.fills[buyAsset] = action.payload.data.latestFills;
                const updated_asset_filled_orders = {
                    asset: '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2',
                    filled_orders: action.payload.data.latestFills
                }
                state.fills = [updated_asset_filled_orders];
            })
            .addCase(updateFills.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'Unknown error'
            })

    }
  })


//selectors
// export function selectAllOrders(state) {
//     return state.marketplace.orders;
// } 
// export const selectAllOrders = (state: RootState) => {
//     return state.marketplace.orders;
// }

// export const selectAllFills = (state: RootState) => {
//     return state.marketplace.fills;
// }


// export const getOrdersStatus = (state: RootState) => state.marketplace.status;
// export const getOrdersError = (state: RootState) => state.marketplace.error;

export default marketplaceSlice.reducer;
export const { updateOrders } = marketplaceSlice.actions
// export function updateOrders(dispatch, {orderType, asset, maker=address_everyone, skip=default_skip, first=default_first}) {