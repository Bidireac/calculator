import './App.css';
import Calculator from './Calculator'
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/:firstNumber/:secondNumber' component={Calculator} />
          <Route exact path='/:firstNumber' component={Calculator} />
          <Route exact path="/" component={Calculator} />
      </Switch>
    </div>
  );
}

export default App;
