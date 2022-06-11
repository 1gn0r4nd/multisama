// import moment from 'moment';
import { useEffect} from 'react';
// import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import OrderBookPressure from '../components/OrderBookPressure';
import { updateOrders, getOrders } from "../store/Marketplace";
//function sanitize(stats){
//    let keys = Object.keys(stats);
    //add keys which dont exist?
    //stats.hasOwnProperty(resource)
//}
function MoonsamaMFFOrders({player, last_sunday_from_date}) {
    const dispatch = useDispatch();
    const orders = useSelector(getOrders);
    
    useEffect(() => {
        const asset = "0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2"
        const maker_everyone = '0x0000000000000000000000000000000000000000'
        updateOrders(dispatch, 
            {
                orderType: 'buy', 
                asset: asset, 
                maker: maker_everyone, 
                skip: 0, 
                first: 100
            })
        updateOrders(dispatch, 
            {
                orderType: 'sell', 
                asset: asset, 
                maker: maker_everyone, 
                skip: 0, 
                first: 100
            });
    }, [dispatch]);
   
    // if (error) {
    //     // Request failed with status code 422
    //     return <div>Error: {error.message}</div>;

    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
        return (
            <div> 
                <OrderBookPressure orders={orders} />
            </div>
            );
        // }
    }
    // {items.map(item => (
    //     <li key={item.id}>
    //     {item.name} {item.price}
    //     </li>
    // ))}
    // Set default props
//   getDefaultProps() {
//     return {
//       year: 2021,
//       label: "Button Text"
//     };
//   }
    // const mapStateToProps = state => ({
	//     player: state.player
    // })
    export default MoonsamaMFFOrders;
