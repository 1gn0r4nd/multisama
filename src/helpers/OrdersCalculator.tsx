import moment from 'moment';
import FilledOrder from '../models/FilledOrder';
import { CandlestickData, Time } from 'lightweight-charts';

function getDailyCandles({filled_orders, days} : {filled_orders: FilledOrder[], days: number}) {

    let currentDateTime = moment();
    const daily_candles = [];
    for (let i = 0; i < days; i++) {
        const from_currentDateTime = currentDateTime.startOf('day').unix();
        const to_currentDateTime = currentDateTime.endOf('day').unix();
        const candle_data = getFilledOrdersBetween({
            filled_orders: filled_orders, 
            from: from_currentDateTime, 
            to: to_currentDateTime
        })
        daily_candles.push(
            getOpenClosedHighLow({filled_orders: candle_data, from: from_currentDateTime, to: to_currentDateTime})
            );
        currentDateTime = currentDateTime.subtract(1, 'days');
    } 
}

function getOpenClosedHighLow({filled_orders, from, to}: {filled_orders: FilledOrder[], from: number, to: number}): CandlestickData{
    const high = Math.max(...filled_orders.map(o => o.price()));
    const low = Math.min(...filled_orders.map(o => o.price()));
    const last_filled_order = filled_orders[filled_orders.length];
    const open = filled_orders[0].price();
    const close = last_filled_order.price();
    const time = last_filled_order.createdAt as Time
    const color = open > close ? 'green' : 'red'
    return{
        open: open, 
        high: high, 
        low: low, 
        close: close, 
        color: color,
        time: time
    }
}

function getFilledOrdersBetween({filled_orders, from, to}: {filled_orders: FilledOrder[], from: number, to: number}): FilledOrder[]{
    return filled_orders.filter((filled_order)=>{
        return filled_order.createdAt > from && filled_order.createdAt <= to 
    });
}

export { getDailyCandles };