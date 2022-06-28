import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';
import { selectAllFishes, getWalletError } from "../store/walletSlice";
import { updateFishes } from "../store/walletSlice";

const PondsamaPage = () => {
    const fishes = useSelector(selectAllFishes);
    const error = useSelector(getWalletError);
    const dispatch = useDispatch();
    const payload = {
        walletAddress: "0x3526Df3288bd0874e059643fA9645beCaA571FEC"
    };
    return (
        <div>
            { error }
            Hi
            <Fab 
                size="small" 
                color="primary"
                aria-label="add" 
                onClick={() => dispatch(updateFishes(payload))}
                >
                <RefreshIcon />
            </Fab>
            { JSON.stringify(fishes) }
        </div>
    );
}


export default PondsamaPage;