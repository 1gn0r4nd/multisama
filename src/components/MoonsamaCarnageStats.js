import axios from 'axios';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ResourceListItem from './ResourceListItem';
import {ResourceIcons} from '../helpers/ResourceIcons';

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
                    <ResourceListItem name='aStone' image={ResourceIcons.aplha.aStone} qty={items.stone} />
                    <ResourceListItem name='aWood' image={ResourceIcons.aplha.aWood} qty={items.wood} />
                    <ResourceListItem name='aIron' image={ResourceIcons.aplha.aIron} qty={items.iron} />
                    <ResourceListItem name='aGold' image={ResourceIcons.aplha.aGold} qty={items.gold} />
                    <ResourceListItem name='aExp' image={ResourceIcons.aplha.aExp} qty={items.exp} />
                    <ResourceListItem name='aGrain' image={ResourceIcons.aplha.aGrain} qty={items.grain} />
                    <ResourceListItem name='aString' image={ResourceIcons.aplha.aString} qty={items.string} />
                    <ResourceListItem name='aFish' image={ResourceIcons.aplha.aFish} qty={items.fish_specimen} />
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