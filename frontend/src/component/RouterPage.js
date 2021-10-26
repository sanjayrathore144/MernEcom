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
                <Route path='/' exact component={Home}/>
                <Route path='/listofproduct' component={ListProductView}/>
                <Route path='/productview' component={ProductView}/>
                <Route path='/cart' component={Cart}/>


              



                
                
                
                </Switch>
                <Footer/>
         
           
        </React.Fragment>
    )
}
export default RouterPage;