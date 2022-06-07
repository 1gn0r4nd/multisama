import axios from 'axios';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Card from '@mui/material/Card';
import aStone from './../assets/img/mmaf/aStone.png';
import aWood from './../assets/img/mmaf/aWood.png';
import aIron from './../assets/img/mmaf/aIron.png';
import aGold from './../assets/img/mmaf/aGold.png';
import aExp from './../assets/img/mmaf/aExp.png';
import aGrain from './../assets/img/mmaf/aGrain.png';
import aString from './../assets/img/mmaf/aString.png';
import aFish from './../assets/img/mmaf/aFishSpecimen.png';
import Avatar from '@mui/material/Avatar';


function MoonsamaCarnageStats(player) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('https://mcapi.moonsama.com/game/minecraft-carnage-2022-05-29/carnage-stats/result/final?player=1gn0r4nd')
        .then(result=>{
            setIsLoaded(true);
            setItems(result.data);
        })
        .catch(err=>{
            setIsLoaded(true);
            setError(err);
        })
    }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Card variant="outlined">
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <Avatar alt="aStone" src={aStone} />
                        </ListItemIcon>
                        <ListItemText primary="aStone" />{items.stone}
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <Avatar alt="aWood" src={aWood} />
                        </ListItemIcon>
                        <ListItemText primary="aWood" />{items.wood}
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <Avatar alt="aIron" src={aIron} />
                        </ListItemIcon>
                        <ListItemText primary="aIron" />{items.iron}
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <Avatar alt="aGold" src={aGold} />
                        </ListItemIcon>
                        <ListItemText primary="aGold" />{items.gold}
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemIcon>
                            <Avatar alt="aExp" src={aExp} />
                        </ListItemIcon>
                        <ListItemText primary="aExp" />{items.exp}
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemIcon>
                            <Avatar alt="aGrain" src={aGrain} />
                        </ListItemIcon>
                        <ListItemText primary="aGrain" />0
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemIcon>
                            <Avatar alt="aString" src={aString} />
                        </ListItemIcon>
                        <ListItemText primary="aString" />{items.string}
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <Avatar alt="aFish" src={aFish} />
                        </ListItemIcon>
                        <ListItemText primary="aFish Specimen" />{items.fish_specimen}
                    </ListItem>
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
    
    export default MoonsamaCarnageStats;