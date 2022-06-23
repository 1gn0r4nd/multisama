import '../assets/css/OrderPressure.css';
function OrderPressure({price, qty, percentage_fill, type}) {
    return (
    <div className={`OrderPressureBar ${type}OrderPressureBar`}>
        <span className="unfilled">{price/10**18}</span>
        <span className="filled" style={{width: percentage_fill + '%'}}>{qty}</span>
    </div>
    );
}

export default OrderPressure;