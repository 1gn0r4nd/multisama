import '../assets/css/MoonsamaMFFRefreshBtn.css';
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { updateOrders } from "../store/marketplaceSlice";
import { getOrdersStatus } from "../store/marketplaceSlice";

const MoonsamaMFFRefreshBtn = ({asset, order_type}) => {
    const dispatch = useDispatch();
    const status = useSelector(getOrdersStatus);
    const payload = {
        orderType: "BUY", 
        asset: asset, 
        maker: '0x0000000000000000000000000000000000000000', 
        skip: 0, 
        first: 100
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
                status
            }
            
            <Fab 
                size="small" 
                color="primary"
                className={status} 
                aria-label="add" 
                onClick={() => dispatch(updateOrders(payload))}
                >
                <RefreshIcon />
            </Fab>
        </section>
    )
}

export default MoonsamaMFFRefreshBtn;
