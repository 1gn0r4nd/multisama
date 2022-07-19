import { createSlice } from "@reduxjs/toolkit";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getAPIFishes } from '../api/MoonsamaMarketplaceAPI';
//https://redux-toolkit.js.org/rtk-query/overview

const initialState = {
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed',
    error: null
}

export const carnageSlice = createSlice({
  name: 'carnage',
  initialState,
  reducers: {
    // change_player: (state, action) => {
    // state.player = action.player;
    // }
  }
})

export default carnageSlice.reducer;


export const getCarnageStatsStatus = (state) => state.carnage.status;
export const getCarnageStatsError = (state) => state.carnage.error;
