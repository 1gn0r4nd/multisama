import Button from '@mui/material/Button';
import OpenInNew from '@mui/icons-material/OpenInNew';
import logo from './../assets/img/moonsama/moonsama.svg';
import { Link } from "react-router-dom";
function NavigationBar() {
    return (
      <div className="Navigation">
          <img src={logo} className="App-logo" alt="logo" />
          <Button component={Link} variant="text" to="orders">Orders</Button>
          <Button component={Link} variant="text" to="pondsama">Pondsama</Button>
          <Button component={Link} variant="text" to="chpostarts">Post</Button>
          
          <Button component={Link} variant="text" to="charts">Charts</Button>
          
          <Button startIcon={<OpenInNew />} variant="text" href="https://minecraft-metaverse.moonsama.com/login" target="_blank">Bridge</Button>
          <Button startIcon={<OpenInNew />} variant="text" href="https://wiki.moonsama.com/" target="_blank">Wiki</Button>
          <Button startIcon={<OpenInNew />} variant="text" href="https://marketplace.moonsama.com/" target="_blank">Marketplace</Button>
      </div>
    );
  }

export default NavigationBar;