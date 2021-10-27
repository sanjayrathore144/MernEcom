
import './App.css';
import React from 'react';
import RouterPage from './component/RouterPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RouterDashboard from './component/admin/RouterAdmin';
import Category from './component/admin/Category';
import Sidebar from './component/admin/Sidebar';
import Dashboard from './component/admin/Dashboard';
import SubCategory from './component/admin/SubCategory';


function App() {
  return (
    <React.Fragment>
      
      <Router>
           
                <Switch>
                <Route  path='/dashboard' component={Sidebar}/>
                <Route path='/' component={RouterPage}/>
                </Switch>

                
               
            </Router>
      
      
    </React.Fragment>
  );
}

export default App;