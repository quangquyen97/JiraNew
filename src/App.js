import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/Home/Header/Header';
import Home from './page/Home/Home';
import { LoginTemplate } from './templates/HomeTemplate/LoginTemplate';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home' Component={Home} />
        <Route exact path='/' Component={Home} />
        <LoginTemplate exact path="/header" Component={Header} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
