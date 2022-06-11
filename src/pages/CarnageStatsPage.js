import React from 'react';
import { connect } from 'react-redux';
import MoonsamaCarnageStats from '../components/MoonsamaCarnageStats';
import { getLastSunday } from '../helpers/CarnageCalculator';

class CarnageStatsPage extends React.Component {
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

    render() {
        return (
            <div className='CarnageStatsPage'>
                <h1>Pondsama</h1>
                <h1>Test</h1>
                <input type='text' id='player_name' placeholder='player name' ></input>
                <input type='select' id='carnage_date' placeholder={getLastSunday()}></input>
                <button  type='button' 
                    onClick={() => this.props.dispatch({type: "carnage/CHANGE_PLAYER", player: document.getElementById('player_name').value })}>
                        Fetch
                    </button >
                <MoonsamaCarnageStats player={this.props.player} year={2022} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        player: state.player
    };
}
export default connect(mapStateToProps)(CarnageStatsPage);