import OrderPressure from '../components/OrderPressure';

function OrderBookPressure({orders}) {
    // let order_book = items.data.orders.map((o,index)=>(
    //     <div key={index}>
    //     {o.active}
    //     {moment.unix(o.createdAt).format()}
    //     {o.id}
    //     {o.onlyTo}
    //     {o.orderType}
    //     {o.pricePerUnit}
    //     {o.quantityLeft}
    //     {o.salt}
    //     {o.seller.id}
    //     </div>
    // ));
    orders.sort((a, b) => a.pricePerUnit < b.pricePerUnit ? 1 : -1);
    let max_qty = Math.max(...orders.map(o => o.quantityLeft))
    let orderBook = orders.map(function( order, index ) {
        return( 
            <OrderPressure 
            key={index} 
            price={order.pricePerUnit} 
            qty={order.quantityLeft} 
            percentage_fill={100* order.quantityLeft / max_qty} 
            type={order.orderType} 
            />    
        )
        });
    return (
        <div>
            {orderBook}
        </div>
    );
}

export default OrderBookPressure;
