import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';
import { selectAllFills, getOrdersError } from "../store/marketplaceSlice";
import { updateFills } from "../store/marketplaceSlice";
import OrderFillTable from '../components/OrderFillTable'

const ChartsPage = () => {
    const fills = useSelector(selectAllFills);
    const error = useSelector(getOrdersError);
    const dispatch = useDispatch();
    const payload = {
        asset: '0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2',
        maker: '', 
    };
    return (
        <div>
            { error }
            <Fab 
                size="small" 
                color="primary"
                aria-label="add" 
                onClick={() => dispatch(updateFills(payload))}
                >
                <RefreshIcon />
            </Fab>
            <h1>0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2</h1>
            <OrderFillTable fills={fills['0x1b30a3b5744e733d8d2f19f0812e3f79152a8777-2']} />
        </div>
    );
}


export default ChartsPage;