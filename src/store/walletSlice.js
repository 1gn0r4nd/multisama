import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAPIFishes } from '../api/MoonsamaMarketplaceAPI';
//import Pondsama from '../models/Pondsama';

const initialState = {
    fishes: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed',
    error: null
}

export const updateFishes = createAsyncThunk('wallet/updateFishes', async (payload) => {
    const response = await getAPIFishes(
        {
            walletAddress: payload.walletAddress
        }
    )
    return response;
})

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(updateFishes.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updateFishes.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.fishes = action.payload;
                // state.fishes = initialized_fishes;
            })
            .addCase(updateFishes.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
  })


//selectors
export function selectAllFishes(state) {
    return state.wallet.fishes;
} 

export const getWalletStatus = (state) => state.wallet.status;
export const getWalletError = (state) => state.wallet.error;

export default walletSlice.reducer;