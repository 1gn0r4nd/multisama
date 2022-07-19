import { configureStore } from "@reduxjs/toolkit";
import carnageReducer from './carnageSlice';
import marketplaceReducer from './marketplaceSlice.tsx';
import walletReducer from './walletSlice';

const store = configureStore( {
    reducer: {
        carnage: carnageReducer, 
        marketplace: marketplaceReducer,
        wallet: walletReducer
    }
    //, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch