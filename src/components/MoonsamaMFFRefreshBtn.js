import '../assets/css/MoonsamaMFFRefreshBtn.css';
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';
//import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { useEffect } from "react";
//import { updateOrders, getOrdersStatus } from "../store/marketplaceSlice.tsx";

import { updateOrders } from "../store/marketplaceSlice.tsx";

const MoonsamaMFFRefreshBtn = ({asset, order_type}) => {
    const dispatch = useDispatch();
    // const status = useSelector(getOrdersStatus);
    const payload = {
        asset: asset, 
        page: 1, 
        per_page: 1000
    }

    // useEffect(() => {
    //     if (status === 'idle') {
    //         dispatch(updateOrders(payload))
    //     }
    // }, [asset, payload, status, dispatch])

    return(
        <section>
            {
            //TODO make logo spin on loading
                //status
            }
            
            <Fab 
                size="small" 
                color="primary"
                className="someclassname" 
                aria-label="add" 
                onClick={
                    () => dispatch(updateOrders(payload))}
                >
                <RefreshIcon />
            </Fab>
        </section>
    )
}

export default MoonsamaMFFRefreshBtn;
