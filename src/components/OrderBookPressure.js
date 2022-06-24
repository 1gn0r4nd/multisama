import { useState } from "react";
import OrderPressure from '../components/OrderPressure';

function OrderBookPressure({orders}) {
    const [distance, setDistance] = useState(0.001)
    // let order_book = items.data.orders.map((o,index)=>(
    //     <div key={index}>
    //     {moment.unix(o.createdAt).format()}
    //     </div>
    // ));

    const distanceOptionsArray = [0.001, 0.0025, 0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 10, 25, 50, 100, 250, 500, 1000, 2500]
    const distanceOptions = distanceOptionsArray.map((option,index) => (
        <option key={`option${index}`} value={option}>
            {option}
        </option>
    ))
    const onDistanceChanged = e => setDistance(e.target.value)

    //Assume orders are sorted on price
    //orders.sort((a, b) => a.pricePerUnit < b.pricePerUnit ? 1 : -1);
    let buyOrderBook
    let sellOrderBook
    if(orders) {
        let max_buy_qty = Math.max(...orders.buyOrders.map(o => o.quantityLeft/o.askPerUnitDenominator))
        let max_sell_qty = Math.max(...orders.sellOrders.map(o => o.quantityLeft/o.askPerUnitDenominator))
        let max_qty = Math.max(max_buy_qty, max_sell_qty);
        // let highest_buy = orders.buyOrders[0].pricePerUnit / 10**18
        // let lowest_buy = orders.buyOrders[orders.buyOrders.length-1].pricePerUnit / 10**18
        // let lowest_sell = orders.sellOrders[0].pricePerUnit / 10**18
        // let highest_sell = orders.sellOrders[orders.sellOrders.length-1].pricePerUnit / 10**18
        

        // let result;
        // for(let i = 0;i<6;i++){
        //     let temp_price = orders.buyOrders[0].pricePerUnit + distance * i;
        //     let price = Math.round(temp_price/distance) * distance;
        //     let cummalative_qty = orders.buyOrders.reduce(
        //             (total, currentValue) =>{
        //                 if(Math.round(currentValue.pricePerUnit/distance) * distance === price){
        //                     return total + currentValue.quantityLeft/currentValue.askPerUnitDenominator
        //                 } else {
        //                     return total;
        //                 } 
        //             }
        //         ,0);
        //     let ordertype = orders.buyOrders[0].orderType
        //     result += (
        //         <OrderPressure 
        //         key={`buy${price}`} 
        //         price={price / 10**18} 
        //         qty={cummalative_qty} 
        //         percentage_fill={100* cummalative_qty/max_qty} 
        //         type={ordertype} 
        //         />    
        //     )   
        // }
        
        // buyOrderBook = (
        //     <div>
        //         { result }
        //     </div>
        //     );
        buyOrderBook = orders.buyOrders.map(function( buyorder, index ) {
            let qty = buyorder.quantityLeft/buyorder.askPerUnitDenominator
            let percentage = qty / max_qty
            return(
                <div>
                <OrderPressure 
                key={`buy${index}`} 
                price={buyorder.pricePerUnit / 10**18} 
                qty={qty} 
                percentage_fill={100* percentage} 
                type={buyorder.orderType} 
                />    
                </div>
            )
            });

        sellOrderBook = orders.sellOrders.map(function( sellorder, index ) {
            let qty = sellorder.quantityLeft/sellorder.askPerUnitDenominator
            let percentage = qty / max_qty
            return(
                <div>
                <OrderPressure 
                key={`sell${index}`} 
                price={sellorder.pricePerUnit / 10**18} 
                qty={qty} 
                percentage_fill={100* percentage} 
                type={sellorder.orderType} 
                />    
                </div>
            )
            });

    }
    return (
        <div>
            ###
            { buyOrderBook }
            ###
            { sellOrderBook }
            <select id="distanceOptions" value={distance} onChange={onDistanceChanged}>
                    {distanceOptions}
                </select>
        </div>
    );
}

export default OrderBookPressure;
