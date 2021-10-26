import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Category from './Category'
import CreateProduct from './CreateProduct'
import Dashboard from './Dashboard'

import ListProduct from './ListProduct'
import Sidebar from './Sidebar'
import SubCategory from './SubCategory'


function RouterDashboard() {
    return (
        <React.Fragment>
            
          
     
      <Sidebar/>
            <Switch>
            
           
            {/* <Route path='/dashboard' exact component={Dashboard}/>
            <Route path='/categories'  component={Category}/>
            <Route path='/subcategory' component={SubCategory}/>
            <Route path='/product'  component={ListProduct}/>
            <Route path='/product/create'  component={CreateProduct}/> */}
            {/* <Redirect from="/dashboard" to="/categories" component={Category}/> */}

            {/* <Redirect from="/dashboard" to="/categories" />
  <Route path="/categories" exact component={Category}>
  
  </Route>  */}
  
 

            </Switch>
          
        
       
    </React.Fragment>
    )
}

export default RouterDashboard
