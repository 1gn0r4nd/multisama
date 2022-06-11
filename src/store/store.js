import { createStore, combineReducers } from 'redux';
import { carnageReducer } from './Carnage';
import { marketplaceReducer } from './Marketplace';

const rootReducer = combineReducers({
    carnage: carnageReducer, 
    marketplace: marketplaceReducer
});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store