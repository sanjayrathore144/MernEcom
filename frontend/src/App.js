
import './App.css';
import React from 'react';
import RouterPage from './component/RouterPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './component/dashboard/Sidebar';


function App() {
  return (
    <React.Fragment>
      
      <Router>
           
                <Switch>
                <Route path='/dashboard' component={Sidebar}/>
                <Route path='/' component={RouterPage}/>
                

                </Switch>

                
               
            </Router>
      
      
    </React.Fragment>
  );
}

export default App;
