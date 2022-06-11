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
const address_everyone = '0x0000000000000000000000000000000000000000';
const default_skip = 0;
const default_first = 100;
//0xe4edcaaea73684b310fc206405ee80abcec73ee0/# FISH

const initialState = {
    orders: []
}

export function marketplaceReducer(state = initialState, action) {
    console.log("called marketplace Reducer");
    console.log(JSON.stringify(state));
    console.log(JSON.stringify(action));
    switch (action.type){
        case 'marketplace/UPDATE_ORDERS':
            //let fresh_orders = updateOrders(action.payload);
            console.log("OLD state.orders");
            console.log(state.orders);
            return { 
                ...state,
                orders: state.orders.concat(action.payload)
            };
        default:
            return state;
    }
}

export function updateOrders(dispatch, {orderType, asset, maker=address_everyone, skip=default_skip, first=default_first}) {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);
    getAPIOrders(
        {
            orderType: orderType,
            asset: asset,
            maker: maker,
            skip: skip,
            first: first
        }
    ).then(result => {
        dispatch(
            {
                type: 'marketplace/UPDATE_ORDERS', 
                payload: [result]
            });
    });


    // let sellOrders = getAPIOrders({
    //     orderType: 'sell',
    //     asset: asset,
    //     maker: address_everyone,
    //     skip: default_skip,
    //     first: default_first
    // });
    // return (dispatch, getState) => {
    //     const state = getState();
    // } 
    // [...buyOrders, ...sellOrders];
    
}


//selectors
export function getOrders(state) {
    return state.marketplace.orders;
} 