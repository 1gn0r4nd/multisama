import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import carnageReducer from './carnageSlice';
import marketplaceReducer from './marketplaceSlice.tsx';
import walletReducer from './walletSlice';
import { marketplaceOpenOrdersApi } from '../services/MarketplaceOpenOrders';
import { marketplaceFilledOrdersApi } from '../services/MarketplaceFilledOrders';

const store = configureStore( {
    reducer: {
        carnage: carnageReducer, 
        marketplace: marketplaceReducer,
        wallet: walletReducer,
        [marketplaceOpenOrdersApi.reducerPath]: marketplaceOpenOrdersApi.reducer,
        [marketplaceFilledOrdersApi.reducerPath]: marketplaceFilledOrdersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(marketplaceOpenOrdersApi.middleware, marketplaceFilledOrdersApi.middleware)
    //, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});
setupListeners(store.dispatch);
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch