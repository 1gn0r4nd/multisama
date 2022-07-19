import React, { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';
//import { selectAllFills, getOrdersError, updateFills } from "../store/marketplaceSlice.tsx";
// import OrderFillTable from '../components/OrderFillTable'
import { getDailyCandles } from '../helpers/OrdersCalculator.tsx';
import { createChart, ColorType } from 'lightweight-charts';

const ChartsPage = () => {
    // const fills = useSelector(selectAllFills);
    const error = 'some error'//TODO useSelector(getOrdersError);
    // const dispatch = useDispatch();
    // const payload = {
    //     asset: '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2',
    //     maker: '', 
    // };
    const chartContainerRef = useRef();
    
        
    // const areaSeries = chart.addAreaSeries();
    useEffect(
        () => {
            const fills = [];
            // const initialData = [
            //     { time: '2018-12-22', value: 32.51 },
            //     { time: '2018-12-23', value: 31.11 },
            //     { time: '2018-12-24', value: 27.02 },
            //     { time: '2018-12-25', value: 27.32 },
            //     { time: '2018-12-26', value: 25.17 },
            //     { time: '2018-12-27', value: 28.89 },
            //     { time: '2018-12-28', value: 25.46 },
            //     { time: '2018-12-29', value: 23.92 },
            //     { time: '2018-12-30', value: 22.68 },
            //     { time: '2018-12-31', value: 22.67 },
            // ];
            
                
            const chart = createChart(
                chartContainerRef.current, 
                {
                    layout: {
                        background: { type: ColorType.Solid, color: 'white' },
                        textColor: 'black'
                    },
                    width: chartContainerRef.current.clientWidth,
                    height: 300
                }
            );
            if(fills['0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2']){
                const data = getDailyCandles({filled_orders: fills['0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2'], days:30})
                console.log(JSON.stringify(data));
                chart.timeScale().fitContent();
                const newSeries = chart.addLineSeries({ lineColor: '#2962FF', topColor: '#2962FF', bottomColor: 'rgba(41, 98, 255, 0.28)' });
                newSeries.setData(data);
            }
        },
        []
    );
    return (
        <div>
            { error }
            <Fab 
                size="small" 
                color="primary"
                aria-label="add" 
                onClick={
                    () => alert('hi')}
                    //dispatch(updateFills(payload))
                >
                <RefreshIcon />
            </Fab>
            <h1>Stone - 0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2</h1>
            <div ref={chartContainerRef} />
            {/* <OrderFillTable fills={fills['0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2']} /> */}
        </div>
    );
}


export default ChartsPage;