import './App.css';
import SideMenu from './components/SideMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio';
import Last_Transaction from './components/pages/Last_Transaction';
import Wallet_1 from './components/pages/Wallet_1';
import Wallet_2 from './components/pages/Wallet_2';
import Wallet_3 from './components/pages/Wallet_3';
import Tutorial from './components/pages/Tutorial';
import Setting from './components/pages/Setting';
import Receive from './components/pages/Receive';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <SideMenu />
          <Switch>
            <Route exact path={'/'}>
              <Portfolio />
            </Route>
            <Route exact path={'/wallet/wallet-1'}>
              <Wallet_1 />
            </Route>
            <Route exact path={'/wallet/wallet-2'}>
              <Wallet_2 />
            </Route>
            <Route exact path={'/wallet/wallet-3'}>
              <Wallet_3 />
            </Route>
            <Route exact path={'/last-transaction'}>
              <Last_Transaction />
            </Route>
            <Route exact path={'/tutorials'}>
              <Tutorial />
            </Route>
            <Route exact path={'/setting'}>
              <Setting />
            </Route>
            <Route exact path={'/wallet/wallet-1/receive'}>
              <Receive />
            </Route>
            {/* <Route path="*" element={<Notfound />} /> */}
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
