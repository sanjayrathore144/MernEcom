import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Category from './Category'
import CreateProduct from './CreateProduct'
import Dashboard from './Dashboard'
import ListProduct from './ListProduct'
import Sidebar from './Sidebar'
import SubCategory from './SubCategory'


function RouterAdmin() {
    return (
        <React.Fragment>
            
          
        <Router>
      <Sidebar/>
            <Switch>
            
            <Route path='/admin' exact component={Dashboard}/>
            <Route path='/categories' exact component={Category}/>
            <Route path='/subcategory' exact component={SubCategory}/>
            <Route path='/product' exact component={ListProduct}/>
            <Route path='/create_product' exact component={CreateProduct}/>
            </Switch>
          
        </Router>
       
    </React.Fragment>
    )
}

export default RouterAdmin
