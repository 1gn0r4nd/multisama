import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import carnageReducer from './carnageSlice';
import marketplaceReducer from './marketplaceSlice';
import walletReducer from './walletSlice';

const rootReducer = combineReducers({
    carnage: carnageReducer, 
    marketplace: marketplaceReducer,
    wallet: walletReducer
});
const store = configureStore( {
    reducer: rootReducer
    //, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store