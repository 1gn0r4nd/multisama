import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';
// import { selectAllFishes, getWalletError } from "../store/walletSlice";
import { getWalletError } from "../store/walletSlice";
import { updateFishes } from "../store/walletSlice";
import WalletTable from "../components/WalletTable";

const PondsamaPage = () => {
    // const fishes = useSelector(selectAllFishes);
    const error = useSelector(getWalletError);
    const dispatch = useDispatch();
    const [walletAddress, setWalletAddress] = useState('0x3526Df3288bd0874e059643fA9645beCaA571FEC'); //store player only in this component
    const onWalletAddressChanged = e => {
        //check if its a moonsama#
        setWalletAddress(e.target.value)
    };
    return (
        <div>
            { error }
            Wallet {walletAddress}
            <Fab 
                size="small" 
                color="primary"
                aria-label="add" 
                onClick={() => dispatch(updateFishes({walletAddress: walletAddress}))}
                >
                <RefreshIcon />
            </Fab>
            <br />
            <input 
                type='text' 
                id='wallet_address' 
                placeholder='wallet address' 
                value={walletAddress}
                onChange={onWalletAddressChanged}
            >
            </input>
            <WalletTable />
        </div>
    );
}


export default PondsamaPage;