import axios from 'axios';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ResourceListItem from './ResourceListItem';
import {ResourceIcons} from '../helpers/ResourceIcons';
import { getLastSunday, formatDate } from '../helpers/CarnageCalculator'
// import { connect } from 'react-redux';

//function sanitize(stats){
//    let keys = Object.keys(stats);
    //add keys which dont exist?
    //stats.hasOwnProperty(resource)
//}
function MoonsamaCarnageStats({player, last_sunday_from_date}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    function sanitize(data){
        if(!data.hasOwnProperty('exp')){
            data.exp = 0;
        }
        if(!data.hasOwnProperty('grain')){
            data.grain = 0;
        }
        if(!data.hasOwnProperty('string')){
            data.string = 0;
        }
        if(!data.hasOwnProperty('fish_specimen')){
            data.fish_specimen = 0;
        }
        setItems(data);
    }

    useEffect(() => {
        if(last_sunday_from_date === undefined){
            last_sunday_from_date = getLastSunday();
        }
        let formatted_date = formatDate(last_sunday_from_date);
        
        const carnage_url = `https://mcapi.moonsama.com/game/minecraft-carnage-${formatted_date}/carnage-stats/result/final?player=${player}` 
        axios.get(carnage_url)
        .then(result=>{
            setIsLoaded(true);
            sanitize(result.data);
        })
        .catch(err=>{
            setIsLoaded(true);
            setError(err);
        })
    }, [player, last_sunday_from_date]);

   
    if (error) {
        // Request failed with status code 422
        return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Card variant="outlined" className="CarnageStatsCard">
                <h1>player: {player} year: 2022 </h1>
                <List>
                    <ResourceListItem name='aStone' image={ResourceIcons.alpha.aStone} qty={items.stone} />
                    <ResourceListItem name='aWood' image={ResourceIcons.alpha.aWood} qty={items.wood} />
                    <ResourceListItem name='aIron' image={ResourceIcons.alpha.aIron} qty={items.iron} />
                    <ResourceListItem name='aGold' image={ResourceIcons.alpha.aGold} qty={items.gold} />
                    <ResourceListItem name='aExp' image={ResourceIcons.alpha.aExp} qty={items.exp} />
                    <ResourceListItem name='aGrain' image={ResourceIcons.alpha.aGrain} qty={items.grain} />
                    <ResourceListItem name='aString' image={ResourceIcons.alpha.aString} qty={items.string} />
                    <ResourceListItem name='aFish' image={ResourceIcons.alpha.aFish} qty={items.fish_specimen} />
                </List>
            </Card>
            );
        }
    }
    // {items.map(item => (
    //     <li key={item.id}>
    //     {item.name} {item.price}
    //     </li>
    // ))}
    // Set default props
//   getDefaultProps() {
//     return {
//       year: 2021,
//       label: "Button Text"
//     };
//   }
    // const mapStateToProps = state => ({
	//     player: state.player
    // })
    export default MoonsamaCarnageStats;
