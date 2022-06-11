import '../assets/css/OrderPressure.css';
function OrderPressure({price, qty, percentage_fill, type}) {
    return (
    <div className={`OrderPressureBar ${type}OrderPressureBar`}>
        <span className="filled" style={{width: percentage_fill + '%'}}>{qty}</span>
        <span className="unfilled">{price}</span>
    </div>
    );
}

export default OrderPressure;