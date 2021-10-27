import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import $ from 'jquery';
import Category from './Category';
import CreateProduct from './CreateProduct';
import Dashboard from './Dashboard';
import SubCategory from './SubCategory';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import ListProduct from './ListProduct';
import RouterDashboard from './RouterAdmin';

export class Sidebar extends Component {


  componentDidMount(){
    // var $= window.$;
    (function (window, document, $) {

      /***********************/
      // Component Variables //
      /***********************/
      var accordion = $(".accordion"),
         defaultaccordion = $(".accordion .card-header"),
        collapseTitle = $(".collapsible .card-header"),
        collapseHoverTitle = $(".card-hover .card-header"),
        dropdownMenuIcon = $(".dropdown-icon-wrapper .dropdown-item");
    
      // To open Collapse on hover
      if (accordion.attr("data-toggle-hover", "true")) {
        collapseHoverTitle.closest(".card").on("mouseenter", function () {
          var $this = $(this);
          $this.children(".collapse").collapse("show");
          $this.closest(".card").addclassName("open");
        });
        collapseHoverTitle.closest(".card").on("mouseleave", function () {
          var $this = $(this);
          $this.children(".collapse").collapse("hide");
          $this.closest(".card").removeclassName("open");
        });
      }
      // When Collapse open on click
      collapseTitle.on("click", function () {
        var $this = $(this);
        $this.next(".collapse").on('show.bs.collapse', function () {
          $this.parent().addclassName("open")
        })
        $this.next(".collapse.show").on('hide.bs.collapse', function () {
          $this.parent().removeclassName("open")
        })
      });
      // When accordion open on click
      defaultaccordion.on("click", function () {
        var $this = $(this);
        if ($this.parent().next(".show")) {
          $this.closest(".card").toggleclassName("open");
          $this.closest(".card").siblings(".open").removeclassName("open");
        }
      });
    
      /************/
      // Dropdown //
      /************/
      // For Dropdown With Icons
      dropdownMenuIcon.on("click", function () {
        $(".dropdown-icon-wrapper .dropdown-toggle i").remove();
        $(this).find("i").clone().appendTo(".dropdown-icon-wrapper .dropdown-toggle");
        $(".dropdown-icon-wrapper .dropdown-toggle .dropdown-item").removeclassName("dropdown-item");
      });
    
      /*********/
      // Chips //
      /*********/
      // To close chips
      $('.chip-closeable').on('click', function () {
        $(this).closest('.chip').remove();
      })
    
      // /***********/
      // // Tooltip //
      // /***********/
      // // Add Custom className For Light Tooltip
    
      // // if (typeof $.fn.tooltip.Constructor === 'undefined') {
      // //   throw new Error('Bootstrap Tooltip must be included first!');
      // // }
    
      // var Tooltip = $.fn.tooltip.Constructor;
    
      // // add customclassName option to Bootstrap Tooltip
      // $.extend(Tooltip.Default, {
      //   customclassName: ''
      // });
    
      // var _show = Tooltip.prototype.show;
    
      // Tooltip.prototype.show = function () {
    
      //   // invoke parent method
      //   _show.apply(this, Array.prototype.slice.apply(arguments));
    
      //   if (this.config.customclassName) {
      //     var tip = this.getTipElement();
      //     $(tip).addclassName(this.config.customclassName);
      //   }
    
      // };
    
   
    
    })(window, document, $);
  }

    render() {
        return (
            <React.Fragment>
           


<div className="header-navbar-shadow"></div>
<nav className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top ">
  <div className="navbar-wrapper">
    <div className="navbar-container content">
      <div className="navbar-collapse" id="navbar-mobile">
        <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
          <ul className="nav navbar-nav">
            <li className="nav-item mobile-menu d-xl-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="javascript:void(0);"><i className="ficon bx bx-menu"></i></a></li>
          </ul>
          <ul className="nav navbar-nav bookmark-icons">
            <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-email.html" data-toggle="tooltip" data-placement="top" title="Email"><i className="ficon bx bx-envelope"></i></a></li>
            <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-chat.html" data-toggle="tooltip" data-placement="top" title="Chat"><i className="ficon bx bx-chat"></i></a></li>
            <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-todo.html" data-toggle="tooltip" data-placement="top" title="Todo"><i className="ficon bx bx-check-circle"></i></a></li>
            <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-calendar.html" data-toggle="tooltip" data-placement="top" title="Calendar"><i className="ficon bx bx-calendar-alt"></i></a></li>
          </ul>
          <ul className="nav navbar-nav">
            <li className="nav-item d-none d-lg-block"><a className="nav-link bookmark-star"><i className="ficon bx bx-star warning"></i></a>
              <div className="bookmark-input search-input">
                <div className="bookmark-input-icon"><i className="bx bx-search primary"></i></div>
                <input className="form-control input" type="text" placeholder="Explore Frest..." tabindex="0" data-search="template-search"/>
                <ul className="search-list"></ul>
              </div>
            </li>
          </ul>
        </div>
        <ul className="nav navbar-nav float-right">
          <li className="dropdown dropdown-language nav-item"><a className="dropdown-toggle nav-link" id="dropdown-flag" href="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flag-icon flag-icon-us"></i><span className="selected-language">English</span></a>
            <div className="dropdown-menu" aria-labelledby="dropdown-flag"><a className="dropdown-item" href="javascript:void(0);" data-language="en"><i className="flag-icon flag-icon-us mr-50"></i> English</a><a className="dropdown-item" href="javascript:void(0);" data-language="fr"><i className="flag-icon flag-icon-fr mr-50"></i> French</a><a className="dropdown-item" href="javascript:void(0);" data-language="de"><i className="flag-icon flag-icon-de mr-50"></i> German</a><a className="dropdown-item" href="javascript:void(0);" data-language="pt"><i className="flag-icon flag-icon-pt mr-50"></i> Portuguese</a></div>
          </li>
          <li className="nav-item d-none d-lg-block"><a className="nav-link nav-link-expand"><i className="ficon bx bx-fullscreen"></i></a></li>
          <li className="nav-item nav-search"><a className="nav-link nav-link-search"><i className="ficon bx bx-search"></i></a>
            <div className="search-input">
              <div className="search-input-icon"><i className="bx bx-search primary"></i></div>
              <input className="input" type="text" placeholder="Explore Frest..." tabindex="-1" data-search="template-search"/>
              <div className="search-input-close"><i className="bx bx-x"></i></div>
              <ul className="search-list"></ul>
            </div>
          </li>
          <li className="dropdown dropdown-notification nav-item"><a className="nav-link nav-link-label" href="javascript:void(0);" data-toggle="dropdown"><i className="ficon bx bx-bell bx-tada bx-flip-horizontal"></i><span className="badge badge-pill badge-danger badge-up">5</span></a>
            <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
              <li className="dropdown-menu-header">
                <div className="dropdown-header px-1 py-75 d-flex justify-content-between"><span className="notification-title">7 new Notification</span><span className="text-bold-400 cursor-pointer">Mark all as read</span></div>
              </li>
              <li className="scrollable-container media-list"><a className="d-flex justify-content-between" href="javascript:void(0);">
                  <div className="media d-flex align-items-center">
                    <div className="media-left pr-0">
                      <div className="avatar mr-1 m-0"><img src="app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="39" width="39"/></div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading"><span className="text-bold-500">Congratulate Socrates Itumay</span> for work anniversaries</h6><small className="notification-text">Mar 15 12:32pm</small>
                    </div>
                  </div></a><a className="d-flex justify-content-between read-notification cursor-pointer" href="javascript:void(0);">
                  <div className="media d-flex align-items-center">
                    <div className="media-left pr-0">
                      <div className="avatar mr-1 m-0"><img src="app-assets/images/portrait/small/avatar-s-16.jpg" alt="avatar" height="39" width="39"/></div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading"><span className="text-bold-500">New Message</span> received</h6><small className="notification-text">You have 18 unread messages</small>
                    </div>
                  </div></a><a className="d-flex justify-content-between cursor-pointer" href="javascript:void(0);">
                  <div className="media d-flex align-items-center py-0">
                    <div className="media-left pr-0"><img className="mr-1" src="app-assets/images/icon/sketch-mac-icon.png" alt="avatar" height="39" width="39"/></div>
                    <div className="media-body">
                      <h6 className="media-heading"><span className="text-bold-500">Updates Available</span></h6><small className="notification-text">Sketch 50.2 is currently newly added</small>
                    </div>
                    <div className="media-right pl-0">
                      <div className="row border-left text-center">
                        <div className="col-12 px-50 py-75 border-bottom">
                          <h6 className="media-heading text-bold-500 mb-0">Update</h6>
                        </div>
                        <div className="col-12 px-50 py-75">
                          <h6 className="media-heading mb-0">Close</h6>
                        </div>
                      </div>
                    </div>
                  </div></a><a className="d-flex justify-content-between cursor-pointer" href="javascript:void(0);">
                  <div className="media d-flex align-items-center">
                    <div className="media-left pr-0">
                      <div className="avatar bg-primary bg-lighten-5 mr-1 m-0 p-25"><span className="avatar-content text-primary font-medium-2">LD</span></div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading"><span className="text-bold-500">New customer</span> is registered</h6><small className="notification-text">1 hrs ago</small>
                    </div>
                  </div></a><a href="javascript:void(0);">
                  <div className="media d-flex align-items-center justify-content-between">
                    <div className="media-left pr-0">
                      <div className="media-body">
                        <h6 className="media-heading">New Offers</h6>
                      </div>
                    </div>
                    <div className="media-right">
                      <div className="custom-control custom-switch">
                        <input className="custom-control-input" type="checkbox" checked id="notificationSwtich"/>
                        <label className="custom-control-label" for="notificationSwtich"></label>
                      </div>
                    </div>
                  </div></a><a className="d-flex justify-content-between cursor-pointer" href="javascript:void(0);">
                  <div className="media d-flex align-items-center">
                    <div className="media-left pr-0">
                      <div className="avatar bg-danger bg-lighten-5 mr-1 m-0 p-25"><span className="avatar-content"><i className="bx bxs-heart text-danger"></i></span></div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading"><span className="text-bold-500">Application</span> has been approved</h6><small className="notification-text">6 hrs ago</small>
                    </div>
                  </div></a><a className="d-flex justify-content-between read-notification cursor-pointer" href="javascript:void(0);">
                  <div className="media d-flex align-items-center">
                    <div className="media-left pr-0">
                      <div className="avatar mr-1 m-0"><img src="app-assets/images/portrait/small/avatar-s-4.jpg" alt="avatar" height="39" width="39"/></div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading"><span className="text-bold-500">New file</span> has been uploaded</h6><small className="notification-text">4 hrs ago</small>
                    </div>
                  </div></a><a className="d-flex justify-content-between cursor-pointer" href="javascript:void(0);">
                  <div className="media d-flex align-items-center">
                    <div className="media-left pr-0">
                      <div className="avatar bg-rgba-danger m-0 mr-1 p-25">
                        <div className="avatar-content"><i className="bx bx-detail text-danger"></i></div>
                      </div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading"><span className="text-bold-500">Finance report</span> has been generated</h6><small className="notification-text">25 hrs ago</small>
                    </div>
                  </div></a><a className="d-flex justify-content-between cursor-pointer" href="javascript:void(0);">
                  <div className="media d-flex align-items-center border-0">
                    <div className="media-left pr-0">
                      <div className="avatar mr-1 m-0"><img src="app-assets/images/portrait/small/avatar-s-16.jpg" alt="avatar" height="39" width="39"/></div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading"><span className="text-bold-500">New customer</span> comment recieved</h6><small className="notification-text">2 days ago</small>
                    </div>
                  </div></a></li>
              <li className="dropdown-menu-footer"><a className="dropdown-item p-50 text-primary justify-content-center" href="javascript:void(0)">Read all notifications</a></li>
            </ul>
          </li>
          <li className="dropdown dropdown-user nav-item"><a className="dropdown-toggle nav-link dropdown-user-link" href="javascript:void(0);" data-toggle="dropdown">
              <div className="user-nav d-sm-flex d-none"><span className="user-name">John Doe</span><span className="user-status text-muted">Available</span></div><span><img className="round" src="app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="40" width="40"/></span></a>
            <div className="dropdown-menu dropdown-menu-right pb-0"><a className="dropdown-item" href="page-user-profile.html"><i className="bx bx-user mr-50"></i> Edit Profile</a><a className="dropdown-item" href="app-email.html"><i className="bx bx-envelope mr-50"></i> My Inbox</a><a className="dropdown-item" href="app-todo.html"><i className="bx bx-check-square mr-50"></i> Task</a><a className="dropdown-item" href="app-chat.html"><i className="bx bx-message mr-50"></i> Chats</a>
              <div className="dropdown-divider mb-0"></div><a className="dropdown-item" href="auth-login.html"><i className="bx bx-power-off mr-50"></i> Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>


<div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
  <div className="navbar-header">
    <ul className="nav navbar-nav flex-row">
      <li className="nav-item mr-auto"><a className="navbar-brand" href="index.html">
          <div className="brand-logo">
            {/* logo image */}
          </div>
          <h2 className="brand-text mb-0">Ecommerce</h2></a></li>
      <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i className="bx bx-x d-block d-xl-none font-medium-4 primary"></i><i className="toggle-icon bx bx-disc font-medium-4 d-none d-xl-block primary" data-ticon="bx-disc"></i></a></li>
    </ul>
  </div>
  <div className="shadow-bottom"></div>
  <div className="main-menu-content">
    <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation" data-icon-style="lines">
      <li className=" nav-item dash has-sub sidebar-group-active"><a ><span>Dashboard</span></a>
      </li>
      <li className=" navigation-header text-truncate"><span data-i18n="Apps">Lists</span>
      </li>
     
      <li className=" nav-item has-sub"><a href="#"><i className="menu-livicon" data-icon="notebook"></i><span className="menu-title text-truncate" data-i18n="List of category">List of category</span></a>
        <ul className="menu-content">
          <li> 
            <NavLink to="/dashboard/categories" className="d-flex align-items-center" href=""><i className="bx bx-right-arrow-alt"></i><span className="menu-item text-truncate" data-i18n="Category">Category</span></NavLink>
          </li>
          <li> 
            <NavLink to="/dashboard/subcategory" className="d-flex align-items-center"><i className="bx bx-right-arrow-alt"></i><span className="menu-item text-truncate" data-i18n="Add Subcategory">Add Subcategory</span></NavLink>
          </li>
        </ul>
      </li>

      <li className=" nav-item has-sub"><a href="#"><i className="menu-livicon" data-icon="notebook"></i><span className="menu-title text-truncate">Product</span></a>
        <ul className="menu-content">
          <li> <Link to="/dashboard/product" className="d-flex align-items-center" href=""><i className="bx bx-right-arrow-alt"></i><span className="menu-item text-truncate">List Product</span></Link>
          </li>
          <li> <Link to="/dashboard/product/create" className="d-flex align-items-center"><i className="bx bx-right-arrow-alt"></i><span className="menu-item text-truncate" >Create Product</span></Link>
          </li>
        </ul>
      </li>
      
     
      
     
    </ul>
  </div>
</div>

<Switch>
  
          {/* <Route exact path='/dashboard' component = {Dashboard}/>  */}
          <Route exact path='/dashboard/categories'  component = {Category}/>
          <Route exact path='/dashboard/subcategory' component = {SubCategory}/>
          <Route exact path='/dashboard/product'  component = {ListProduct}/>
          <Route exact path='/dashboard/product/create'  component = {CreateProduct}/> 
</Switch>


<div className="sidenav-overlay"></div>
<div className="drag-target"></div> 


 <footer className="footer footer-static footer-light">
  <p className="clearfix mb-0"><span className="float-left d-inline-block">2021 &copy; PIXINVENT</span><span className="float-right d-sm-inline-block d-none">Crafted with<i className="bx bxs-heart pink mx-50 font-small-3"></i>by<a className="text-uppercase" href="https://1.envato.market/pixinvent_portfolio" target="_blank">Pixinvent</a></span>
    <button className="btn btn-primary btn-icon scroll-top" type="button"><i className="bx bx-up-arrow-alt"></i></button>
  </p>
</footer>

            </React.Fragment>
        )
    }
}

export default Sidebar
