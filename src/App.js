import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Loginpage from './Loginpage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Loginpage/>
        </Route>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}



export default App;
