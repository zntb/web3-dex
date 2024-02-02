import { Link } from 'react-router-dom';

import Logo from '../moralis-logo.svg';
import Eth from '../eth.svg';

function Header() {
  return (
    <header>
      <div className="leftH">
        <img className="logo" src={Logo} alt="logo" />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton">Connect</div>
      </div>
    </header>
  );
}

export default Header;
