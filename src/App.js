import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import Menu from "./components/Menu";
import Accueil from "./components/Accueil";
import Leagues from "./components/Leagues";
import League from "./components/League";
import Error  from "./components/Error";
import Teams  from "./components/Teams";
import Team  from "./components/Team";
import contextVal from './Context';

function App() {

  const [game, SetGame] = useState([]);

  const handleChange=(e) =>{
    SetGame(JSON.parse(e.target.value));
  }

  return (
    <Router>
      <div className="App">
        <Menu handleChange={handleChange}/>
        <Switch>
          
            <Route exact path="/" component={Accueil}/>

            <contextVal.Provider value={game}>
                <Route exact path="/leagues" component={Leagues}/>

                <Route exact path="/leagues/:leagueId" component={League}/>

                <Route exact path="/teams" component={Teams}/>

                <Route exact path="/teams/:teamId" component={Team}/>
            </contextVal.Provider>

            <Route exact path="/*" component={Error}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
