// import moment from 'moment';
// import { useEffect} from 'react';
// import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react"; 
import OrderBookPressure from '../components/OrderBookPressure';
import { update_orders } from "../store/marketplaceSlice";
import { selectAllOrders } from "../store/marketplaceSlice";
//function sanitize(stats){
//    let keys = Object.keys(stats);
    //add keys which dont exist?
    //stats.hasOwnProperty(resource)
//}

const MoonsamaMFFOrders = () => {
    //const orders = useSelector((state) => state.marketplace.orders);
    const orders = useSelector(selectAllOrders);
    // const setOrders = useState();
    const dispatch = useDispatch();
    const payload = {
        orderType: "BUY", 
        asset: '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2', 
        maker: '0x0000000000000000000000000000000000000000', 
        skip: 0, 
        first: 100
    }
    return(
        <section>
            <OrderBookPressure orders={orders} />
            { JSON.stringify(orders)}
            <button onClick={() => dispatch(update_orders(payload))}>Refresh</button>
        </section>
    )
}

export default MoonsamaMFFOrders;
// function MoonsamaMFFOrders({}) {
//     // const dispatch = useDispatch();
//     // const orders = useSelector(getOrders);
    
//     useEffect(() => {
//         const asset = "0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2"
//         const maker_everyone = '0x0000000000000000000000000000000000000000'
//         updateOrders(dispatch, 
//             {
//                 orderType: 'buy', 
//                 asset: asset, 
//                 maker: maker_everyone, 
//                 skip: 0, 
//                 first: 100
//             })
//         updateOrders(dispatch, 
//             {
//                 orderType: 'sell', 
//                 asset: asset, 
//                 maker: maker_everyone, 
//                 skip: 0, 
//                 first: 100
//             });
//     }, [dispatch]);
   
//     // if (error) {
//     //     // Request failed with status code 422
//     //     return <div>Error: {error.message}</div>;

//     // } else if (!isLoaded) {
//     //     return <div>Loading...</div>;
//     // } else {
//         return (
//             <div> 
//                 <OrderBookPressure orders={orders} />
//             </div>
//             );
//         // }
//     }
//     // {items.map(item => (
//     //     <li key={item.id}>
//     //     {item.name} {item.price}
//     //     </li>
//     // ))}
//     // Set default props
// //   getDefaultProps() {
// //     return {
// //       year: 2021,
// //       label: "Button Text"
// //     };
// //   }
//     // const mapStateToProps = state => ({
// 	//     player: state.player
//     // })
//     export default MoonsamaMFFOrders;
