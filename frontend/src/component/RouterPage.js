import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import ListProductView from './ListProductView'
import ProductView from './ProductView'
import Cart from './Cart'
import Header from './Header'
import Footer from './Footer'
import Category from './admin/Category'
import Sidebar from './admin/Sidebar'
import Dashboard from './admin/Dashboard'



function RouterPage() {
    return (
        <React.Fragment>
            
          
        
            <Header/>

                <Switch>
                <Route exact path='/'  component={Home}/>
                <Route exact path='/listofproduct' component={ListProductView}/>
                <Route exact path='/productview' component={ProductView}/>
                <Route exact path='/cart' component={Cart}/>
                </Switch>

            <Footer/>
           
         
           
        </React.Fragment>
    )
}
export default RouterPage;