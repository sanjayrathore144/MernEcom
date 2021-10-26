
import './App.css';
import React from 'react';
import RouterPage from './component/RouterPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RouterDashboard from './component/admin/RouterAdmin';
import Category from './component/admin/Category';
import Sidebar from './component/admin/Sidebar';


function App() {
  return (
    <React.Fragment>
      
      <Router>
           
                <Switch>
                <Route path='/dashboard' exact component={Sidebar}/>
                {/* <Sidebar/> */}
               
                
               <RouterPage/>

                
                
                
                </Switch>

                
               
            </Router>
      
      
    </React.Fragment>
  );
}

export default App;
