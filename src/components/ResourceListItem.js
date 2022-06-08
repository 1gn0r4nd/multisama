import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';

function ResourceListItem({name, image, qty}) {
    return (
        <ListItem disablePadding className="ResourceListItem">
            <ListItemIcon>
                <Avatar alt={name} src={image} />
            </ListItemIcon>
            <ListItemText primary={name} />{qty}
        </ListItem>
        );
    }
export default ResourceListItem;