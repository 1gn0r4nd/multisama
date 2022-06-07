import Button from '@mui/material/Button';
import logo from './../assets/img/moonsama/moonsama.svg';

function NavigationBar() {
    return (
      <div className="Navigation">
          <img src={logo} className="App-logo" alt="logo" />
          <Button variant="text" href="https://minecraft-metaverse.moonsama.com/login" target="_blank">Bridge</Button>
          <Button variant="text" href="https://wiki.moonsama.com/" target="_blank">Wiki</Button>
          <Button variant="text" href="https://marketplace.moonsama.com/" target="_blank">Marketplace</Button>
      </div>
    );
  }

export default NavigationBar;