import axios from 'axios';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Card from '@mui/material/Card';
import { ressourcesIcons } from '../../SamaHelper';
import Avatar from '@mui/material/Avatar';


function MoonsamaCarnageStats(player) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('https://mcapi.moonsama.com/game/minecraft-carnage-2022-05-29/carnage-stats/result/final?player=1gn0r4nd')
        .then(result=>{
            setIsLoaded(true);
            let _items = Object.entries(result.data);
            _items.shift();
            setItems(_items);
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
                {items.map(item => 
                <ListItem disablePadding key={`ListItem` + item[0]}>
                    <ListItemIcon key={`ItemIcon` + item[0]}>
                        <Avatar 
                        alt={item[0]} 
                        src={ressourcesIcons.alpha[item[0]]}  
                        key={`Avatar` + item[0]}/>
                    </ListItemIcon>
                    <ListItemText 
                        primary={"a" + item[0].charAt(0).toUpperCase() + (item[0].slice(1)).replace(/_/g, ' ')} 
                        key={`ItemText` + item[0]} />
                        {parseInt(item[1])}
                    </ListItem>
                
                )}
                </List>
            </Card>
            );
        }
    }
    export default MoonsamaCarnageStats;