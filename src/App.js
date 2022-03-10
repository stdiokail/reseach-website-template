import logo from './logo.svg';
import { HashRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Research from './Research';
import Home from './Home';
import News from './News';
import Contact from './Contact';
import './App.css';

function App() {
 
  return (

       
    <Router basename = {process.env.PUBLIC_URL}>

    <div className="App">
      <Switch >
              <Route exact path ='/'>
                  < Home />
               </Route>

               <Route exact path ='/contact'>
                  < Contact />
               </Route>

               <Route exact path ='/research'>
                  < Research />
               </Route>

               <Route exact path ='/news'>
                  < News />
               </Route>
       </Switch>

    </div>
    </Router>

  );
}

export default App;
