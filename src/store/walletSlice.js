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
    console.log(JSON.stringify(response));
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
                // let fishes = action.payload.tokens;
                // let initialized_fishes = fishes.map((fish) => {
                    // return Pondsama.fetchPondsama({id: fish.assetId});
                    // let id = fish.assetId;
                    // getAPIFish({fishID: id}).then(response => {
                    //     console.log(response.tokenURIObject);
                    //     console.log(response.name);
                    //     console.log(response.description);
                    //     console.log(response.attributes);
                    // });
                // });
                console.log(JSON.stringify(action));
                state.fishes = action.payload.tokens;
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