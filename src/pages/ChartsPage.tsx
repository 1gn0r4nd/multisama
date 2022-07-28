import React, { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import Fab from '@mui/material/Fab';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import RefreshIcon from '@mui/icons-material/Refresh';
import { resources_addresses}  from '../helpers/ResourceAddresses';
//import { selectAllFills, getOrdersError, updateFills } from "../store/marketplaceSlice.tsx";
// import { useGetOrderIdsByAssetListQuery } from '../services/MarketplaceOpenOrders';
import { useGetFilledOrdersByAssetListQuery } from '../services/MarketplaceFilledOrders';
// import OrderFillTable from '../components/OrderFillTable'
import { getDailyCandles } from '../helpers/OrdersCalculator';
import { createChart, ColorType } from 'lightweight-charts';


const ChartsPage = () => {
    const [RSS, setRSS] = useState('aStone'); 
    //const [filledOrders, setFilledOrders] = useState('');
    // const fills = useSelector(selectAllFills);
    const error = 'some error';//TODO useSelector(getOrdersError);
    // const dispatch = useDispatch();
    // const payload = {
    //     asset: '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2',
    //     maker: '', 
    // };
    const processChangeRSS = (event: SelectChangeEvent) => {
        setRSS(event.target.value);
    };
    const chartContainerRef = useRef<HTMLDivElement>(null);
    
    const menuItems = Object.entries(resources_addresses).map(
        ([rss_name, rss_address]) => (
            <MenuItem key={rss_address} value={rss_name}>{rss_name}</MenuItem>
        )
    );
    const per_page = 1000;
    const page = 1;
     const all_order_ids = (
        ['0x36109a7e94142ccad6bc1fc6295b751645a8022064ee31441dbf25ef509d7837']
        );  
    console.log('###############################');
    console.log(RSS);
    console.log('###############################');
    const { 
        data: filled_orders_list, 
        isLoading, 
        isFetching 
    } = useGetFilledOrdersByAssetListQuery({ page: page, per_page: per_page, order_ids:all_order_ids });

    // const updateG = (resourceaddress: string): void => {
    //     const all_order_ids = (
    //         // data?.buyOrders.map((order: {id: string}) => order.id) || 
    //         //[] as string[]
    //         ['0x36109a7e94142ccad6bc1fc6295b751645a8022064ee31441dbf25ef509d7837']
    //         // )
    //         // .concat(
    //         //     ordersIdsList?.data.order_ids_list.sellOrders?.map((order: {id: string}) => order.id) || 
    //         //     []
    //         );        
    // }
   
    // console.log(JSON.stringify(isLoading));
    // console.log(JSON.stringify(isFetching));
    // console.log(JSON.stringify(orderIdsList));
    
    //const { data: filled_orders_list, isLoading, isFetching } = useGetOrderIdsByAssetListQuery({ page: page, per_page: per_page, order_ids:all_order_ids });
    
    //const filled_orders = useGetFilledOrdersByAssetListQuery({ page: page, per_page: per_page, order_ids:all_order_ids });
    //console.log(JSON.stringify(filled_orders_list));
    // setFilledOrders(JSON.stringify(filled_orders));
    //{"status":"pending","endpointName":"getFilledOrdersByAssetList","requestId":"klntnkWr9FW8nOZn3yecD","originalArgs":{"page":1,"per_page":1000,"order_ids":["0x36109a7e94142ccad6bc1fc6295b751645a8022064ee31441dbf25ef509d7837"]},"startedTimeStamp":1658261372527,"isUninitialized":false,"isLoading":true,"isSuccess":false,"isError":false,"isFetching":true}
    // console.log(JSON.stringify(filled_orders?.isLoading));
    // console.log(JSON.stringify(filled_orders?.isFetching));
    // const areaSeries = chart.addAreaSeries();
    useEffect(
        () => {
            const chart = createChart(
                chartContainerRef.current || '', 
                {
                    layout: {
                        background: { type: ColorType.Solid, color: 'white' },
                        textColor: 'black'
                    },
                    width: chartContainerRef.current?.clientWidth,
                    height: 300
                }
            );
            // if(orderIdsList){
                // const data = getDailyCandles({filled_orders: fills[RSS], days:30})
                // console.log(JSON.stringify(data));
                // chart.timeScale().fitContent();
                // const newSeries = chart.addLineSeries({ lineColor: '#2962FF', topColor: '#2962FF', bottomColor: 'rgba(41, 98, 255, 0.28)' });
                // newSeries.setData(data);
            // }
        },[]
    );
    return (
        <div>
            { error }
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="resource-select-label">RSS</InputLabel>
                <Select
                    labelId="resource-select-label"
                    id="resource-select"
                    value={RSS}
                    label="RSS"
                    onChange={processChangeRSS}
                >
                    { menuItems }
                </Select>
            </FormControl>
            <Fab 
                size="small" 
                color="primary"
                aria-label="add" 
                onClick={
                    () => alert('todo')}
                    //dispatch(updateFills(payload))
            ><RefreshIcon /></Fab>
            <p>
                Status {isLoading}
                Fetching {isFetching}
                {JSON.stringify(filled_orders_list)}
            </p>
            <div ref={chartContainerRef} />
            {/* <OrderFillTable fills={fills[resources_addresses[RSS]]} /> */}
        </div>
    );
}


export default ChartsPage;