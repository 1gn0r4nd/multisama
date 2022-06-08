import axios from 'axios';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ResourceListItem from './ResourceListItem';
import aStone from './../assets/img/mmaf/aStone.png';
import aWood from './../assets/img/mmaf/aWood.png';
import aIron from './../assets/img/mmaf/aIron.png';
import aGold from './../assets/img/mmaf/aGold.png';
import aExp from './../assets/img/mmaf/aExp.png';
import aGrain from './../assets/img/mmaf/aGrain.png';
import aString from './../assets/img/mmaf/aString.png';
import aFish from './../assets/img/mmaf/aFishSpecimen.png';

function MoonsamaCarnageStats({player, week, year}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // function getSundayOfCurrentWeek() {
    //     const today = new Date();
    //     const first = today.getDate() - today.getDay() + 1;
    //     const last = first + 6;
    //     const sunday = new Date(today.setDate(last));
    //     return sunday;
    // }

    useEffect(() => {
        const carnage_url = 'https://mcapi.moonsama.com/game/minecraft-carnage-' + year + '-05-29/carnage-stats/result/final?player='+ player 
        axios.get(carnage_url)
        .then(result=>{
            setIsLoaded(true);
            setItems(result.data);
        })
        .catch(err=>{
            setIsLoaded(true);
            setError(err);
        })
    }, [year, player]);
    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Card variant="outlined" className="CarnageStatsCard">
                <List>
                    <ResourceListItem name='aStone' image={aStone} qty={items.stone} />
                    <ResourceListItem name='aWood' image={aWood} qty={items.wood} />
                    <ResourceListItem name='aIron' image={aIron} qty={items.iron} />
                    <ResourceListItem name='aGold' image={aGold} qty={items.gold} />
                    <ResourceListItem name='aExp' image={aExp} qty={items.exp} />
                    <ResourceListItem name='aGrain' image={aGrain} qty={items.grain} />
                    <ResourceListItem name='aString' image={aString} qty={items.string} />
                    <ResourceListItem name='aFish' image={aFish} qty={items.fish_specimen} />
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
    export default MoonsamaCarnageStats;