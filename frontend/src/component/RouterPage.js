import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import ListProductView from './ListProductView'
import ProductView from './ProductView'
import Cart from './Cart'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './admin/Sidebar'


function RouterPage() {
    return (
        <React.Fragment>
            
          
            <Router>
            <Header/>
                <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/listofproduct' exact component={ListProductView}/>
                <Route path='/product' exact component={ProductView}/>
                <Route path='/cart' exact component={Cart}/>
                
                </Switch>
                <Footer/>
            </Router>
           
        </React.Fragment>
    )
}
export default RouterPage;