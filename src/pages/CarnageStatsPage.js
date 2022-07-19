import React from 'react';
import { useState } from "react";
import { useSelector } from "react-redux";
import MoonsamaCarnageStats from '../components/MoonsamaCarnageStats';
import { getCarnageStatsError } from "../store/carnageSlice";


const CarnageStatsPage = () => {
    const [player, setPlayer] = useState(''); //store player only in this component
    const onPlayerChanged = e => setPlayer(e.target.value);
    // constructor(props) {
    //      super(props);
    //      let timeout = null;
    // }
    
    // handlePlayerInputChange = (component) => (event) => {
    //     // clearTimeout(component.timeout);
    //     // component.timeout = setTimeout(function () {
    //     //  console.log('Input Value:', event.target.value);
    //     //  handler(event.target.value);
    //     //     this.handlePlayerChange(event.target.value);
    //     // }, 1000);
    //     const addPlayerAction = {type: "CHANGE_PLAYER", player: event.target.value }
    //     component.props.dispatch(addPlayerAction);
    // };  

    // handlePlayerChange(event){
    //     const new_player = document.getElementById('player_name').value;
    //     if(new_player){
    //         const addPlayerAction = {type: "CHANGE_PLAYER", player: new_player }
    //         this.props.dispatch(addPlayerAction);
    //     }
    // }
    const error = useSelector(getCarnageStatsError);
    return (
        <div className='CarnageStatsPage'>
            {error}
            <h1>Carnage {player}</h1>
            <input 
                type='text' 
                id='player_name' 
                placeholder='player name' 
                value={player}
                onChange={onPlayerChanged}
            >
            </input>
            <MoonsamaCarnageStats player={player} />
        </div>
    )
}

export default CarnageStatsPage;