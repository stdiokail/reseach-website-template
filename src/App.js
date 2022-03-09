import logo from './logo.svg';
import { HashRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Research from './Research';
import Home from './Home';
import './App.css';

function App() {
 
  return (
    <AnimatePresence  >
       
    <Router>
    <div className="App">
      <Switch >
              <Route exact path ='/'>
                  < Home />
               </Route>

               <Route exact path ='/research'>
                  < Research />
               </Route>
       </Switch>

    </div>
    </Router>
    </AnimatePresence>
  );
}

export default App;
