import {Link } from 'react-router-dom';
import React, { Component } from 'react';
import $ from 'jquery';

export class Header extends Component {

    componentDidMount(){

        var $= window.$;
        var bootstrap= window.bootstrap;

        (function ($) {
            
            "use strict";
        
           
        
            // // Mobile menu
            // $('#mob_menubar').on('click', function () {
            //     $('#mob_menu').toggleClass('active')
            // })
        
            // // product filter in mobile
            // $('#mobile_filter_btn').on('click', function () {
            //     $('.filter_box').toggleClass('active')
            // })
        
            // $('.close_filter').on('click', function () {
            //     $('.filter_box').removeClass('active')
            // })
        
            // // search for mobile
            // $('#src_icon').on('click', function () {
            //     $('.mobile_search_bar').addClass('active')
            // })
        
            // $('#close_mbsearch').on('click', function () {
            //     $('.mobile_search_bar').removeClass('active')
            // })
        
            // // payment method switch
            // $('.single_payment_method').on('click', function () {
            //     let getCls = $(this).attr('data-target')
            //     $('.single_payment_method, .payment_methods').removeClass('active')
            //     $(getCls).addClass('active')
            //     $(this).addClass('active')
            // })
        
            // nice selector
            $('.nice_select').niceSelect();
        
            // banner slider
            $('.banner_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="las la-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="las la-angle-right"></i></button>',
                responsive: [{
                    breakpoint: 1300,
                    settings: {
                        arrows: false,
                    }
                }]
            });
        
            // Hero slider
            $('.hero_slider_active').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            });
        
            // single product view slider
            $('.product_view_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.product_viewslid_nav',
                infinite: false
            });
        
            // single product view slider nav
            $('.product_viewslid_nav').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="slick-prev"><i class="las la-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="las la-angle-right"></i></button>',
                asNavFor: '.product_view_slider',
                focusOnSelect: true,
                centerMode: false,
                centerPadding: '0px',
                infinite: false,
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                    }
                }]
            });
        
            // product slider
            $('.product_slider_2').slick({
                dots: false,
                arrows: true,
                infinite: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="las la-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="las la-angle-right"></i></button>',
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1366,
                        settings: {
                            arrows: false,
                        }
                    },{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        }
                    }
                ]
            });
        
            // team slider
            $('.team_slider').slick({
                dots: false,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1366,
                        settings: {
                            arrows: false,
                        }
                    },{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        }
                    }
                ]
            });
        
            // brand slider
            $('.brand_slider').slick({
                dots: false,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 6,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1366,
                        settings: {
                            arrows: false,
                        }
                    },{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                            arrows: false,
                        }
                    }
                ]
            });
        
            // search suggest
            $('#show_suggest').on('focus',function(){
                $('.search_suggest').addClass('active')
            })
            $('#show_suggest').on('focusout',function(){
                $('.search_suggest').removeClass('active')
            })
        
            
            // switch product bottom section
            $('.pbt_single_btn').on('click', function () {
                let getCls = $(this).attr('data-target')
                $('.pb_tab_content, .pbt_single_btn').removeClass('active')
                $(getCls).addClass('active')
                $(this).addClass('active')
            })
        
            // Price Range slider
            $(function () {
                $("#slider-range").slider({
                    range: true,
                    min: 1,
                    max: 1000,
                    values: [150, 500],
                    slide: function (event, ui) {
                        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                    }
                });
                $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                    " - $" + $("#slider-range").slider("values", 1));
            });
        
            // Mobile categories
            $('.singlecats.withsub span').click(function () {
                if ($(this).closest('.singlecats').hasClass('active')) {
                    $(this).closest('.singlecats').removeClass('active')
                    $('.mega_menu_wrap').removeClass('active')
                } else {
                    $('.singlecats').removeClass('active')
                    $(this).closest('.singlecats').addClass('active')
                }
            })
        
            $('.mega_menu_wrap h4').click(function () {
                if ($(this).closest('.mega_menu_wrap').hasClass('active')) {
                    $(this).closest('.mega_menu_wrap').removeClass('active')
                } else {
                    $('.mega_menu_wrap').removeClass('active')
                    $(this).closest('.mega_menu_wrap').addClass('active')
                }
            })
        
            $('.all_category .bars, .open_category').click(function () {
                $('#mobile_catwrap').addClass('active')
            })
                
            $('#catclose').click(function () {
                $('#mobile_catwrap').removeClass('active')
            })
        
            // Menu
            $('.open_menu').click(function () {
                $('#mobile_menwrap').addClass('active')
            })
        
            $('#menuclose').click(function () {
                $('#mobile_menwrap').removeClass('active')
            })
        
            // mobile cart
            $('#openCart').click(function () {
                $('#mobileCart').addClass('active')
            })
        
            $('#mobileCartClose').click(function () {
                $('#mobileCart').removeClass('active')
            })
        
            // outside click handle
            $(document).on('click', function(e){
                if(e.target.id==='mobile_menwrap'){
                    $('#mobile_menwrap').removeClass('active')
                }
                if(e.target.id==='mobile_catwrap'){
                    $('#mobile_catwrap').removeClass('active')
                    $('.singlecats').removeClass('active')
                    $('.mega_menu_wrap').removeClass('active')
                }
                if(e.target.classList.contains('product_quickview')){
                    $('.product_quickview').removeClass('active');
                    $('body').css('overflow-y', 'auto')
                }
                if(e.target.classList.contains('popup_wrap')){
                    $('.popup_wrap').removeClass('active');
                    $('body').css('overflow-y', 'auto')
                }
                if(e.target.id==='mobileCart'){
                    $('#mobileCart').removeClass('active');
                }
        
                $('.acprof_wrap').removeClass('active')
            })
        
            // my account sidebar
            $('.profile_hambarg').on('click', function(e){
                e.stopPropagation();
                $('.acprof_wrap').toggleClass('active')
            })
        
            $('.acprof_wrap').on('click', function(e){
                e.stopPropagation();
            })
        
            // product quick view
            $('.open_quickview').on('click', function(){
                $('.product_quickview').addClass('active');
                $('body').css('overflow-y', 'hidden')
            })
        
            $('.close_quickview').on('click', function(){
                $('.product_quickview').removeClass('active');
                $('body').css('overflow-y', 'auto')
            })
        
            // mobile submenu
            $('.mobile_menu_2 .withsub').on('click', function(){
                if($(this).hasClass('active')){
                    $('.mobile_menu_2 .withsub').removeClass('active')
                }else{
                    $('.mobile_menu_2 .withsub').removeClass('active')
                    $(this).addClass('active')
                }
            })
        
            // popup show
            setTimeout(function(){
                $('.popup_wrap').addClass('active')
            }, 2000)
            
            $('.close_popup').on('click', function(){
                $('.popup_wrap').removeClass('active')
            })
        
            // timer
            //count down
            function startTimer(duration) {
                var timer = duration, minutes, seconds;
                setInterval(function () {
                    minutes = parseInt(timer / 60, 10)
                    seconds = parseInt(timer % 60, 10);
        
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;
        
                    $('#count_minute').text(minutes)
                    $('#count_second').text(seconds)
        
                    if (--timer < 0) {
                        timer = duration;
                    }
        
                }, 1000);
            }
        
            startTimer(2000)
        
            // activate bootstrap tooltip
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
            })

        })($);
        
    
    }
    

    render() {
        return (
       


        <React.Fragment>

        <div class="top_heaeder">
<div class="container">
  <div class="d-flex align-items-center justify-content-between">
      <div class="tophead_items">
          <a href="#"> <span><i class="far fa-envelope"></i></span> rafcart@support.com</a>
      </div>
      <div class="tophead_items">
          <a href="track-order.html">Track My Order</a>
          <div class="ms-3">
              <Link to="/dashboard"><a class="me-0">Login</a><span class="text_xs">/</span><a >Register</a></Link>
          </div>
          <div class="ms-3">
              <select class="nice_select">
                  <option>Language</option>
                  <option>English</option>
                  <option>Franch</option>
              </select>
          </div>
          <div class="ms-3">
              <select class="nice_select">
                  <option>Currency</option>
                  <option>Dollar</option>
                  <option>Euro</option>
              </select>
          </div>
      </div>
  </div>
</div>
</div>


<header>
<div class="container">
  <div class="d-flex align-items-center justify-content-sm-between">
      <div class="logo">
          <a href="index-1.html">
              <img loading="lazy"  src="assets/images/svg/logo.svg" alt="logo"/>
          </a>
      </div>
      <div class="search_wrap d-none d-lg-block">
          <div class="search d-flex">
              <div class="search_category">
                  <select class="nice_select">
                      <option value="">All category</option>
                      <option value="">Men</option>
                  </select>
              </div>
              <div class="search_input">
                  <input type="text" placeholder="Search" id="show_suggest"/>
              </div>
              <div class="search_subimt">
                  <button>
                      <span class="d-none d-sm-inline-block">Search</span>
                  </button>
              </div>
              <div class="search_suggest shadow-sm">
                  <div class="search_result_product">
                      <a href="product-view.html" class="single_sresult_product">
                          <div class="sresult_img">
                              <img loading="lazy"  src="assets/images/laptop-2.png" alt="product"/>
                          </div>
                          <div class="sresult_content">
                              <h4>HP Pavilion 15</h4>
                              <div class="price">
                                  <span class="org_price">$45.00</span>
                              </div>
                          </div>
                      </a>
                      <a href="product-view.html" class="single_sresult_product">
                          <div class="sresult_img">
                              <img loading="lazy"  src="assets/images/laptop-1.png" alt="product"/>
                          </div>
                          <div class="sresult_content">
                              <h4>HP Pavilion 15</h4>
                              <div class="price">
                                  <span class="org_price">$45.00</span>
                              </div>
                          </div>
                      </a>

                  </div>
              </div>
          </div>
      </div>
      <div class="header_icon d-flex align-items-center ms-auto ms-sm-0">
          <a href="wish-list.html" class="icon_wrp text-center wishlist ms-0">
              <span class="icon">
                  <i class="icon-heart"></i>
              </span>
              <span class="icon_text">Wish List</span>
              <span class="pops">6</span>
          </a>
          <div class="shopcart">
              <a href="shopping-cart.html" class="icon_wrp text-center d-none d-lg-block">
                  <span class="icon">
                      <i class="icon-cart"></i>
                  </span>
                  <span class="icon_text">Cart</span>
                  <span class="pops">8</span>
              </a>
              <div class="shopcart_dropdown">
                  <div class="cart_droptitle">
                      <h4 class="text_lg">2 Items</h4>
                  </div>
                  <div class="cartsdrop_wrap">
                      <a href="product-view.html" class="single_cartdrop mb-3">
                          <span class="remove_cart"><i class="las la-times"></i></span>
                          <div class="cartdrop_img">
                              <img loading="lazy"  src="assets/images/shoes-5.png" alt="product"/>
                          </div>
                          <div class="cartdrop_cont">
                              <h5 class="text_lg mb-0 default_link">
                                  Men casual shoes
                              </h5>
                              <p class="mb-0 text_xs text_p">x1 <span class="ms-2">$450</span></p>
                          </div>
                      </a>
                      <a href="product-view.html" class="single_cartdrop">
                          <span class="remove_cart"><i class="las la-times"></i></span>
                          <div class="cartdrop_img">
                              <img loading="lazy"  src="assets/images/headphone-2.png" alt="product"/>
                          </div>
                          <div class="cartdrop_cont">
                              <h5 class="text_lg mb-0 default_link">
                                  Men casual shoes
                              </h5>
                              <p class="mb-0 text_xs text_p">x1 <span class="ms-2">$450</span></p>
                          </div>
                      </a>
                  </div>
                  <div class="total_cartdrop">
                      <h4 class="text_lg text-uppercase mb-0">Sub Total:</h4>
                      <h4 class="text_lg mb-0 ms-2">$980.00</h4>
                  </div>
                  <div class="cartdrop_footer d-flex mt-3">
                      <a href="shopping-cart.html" class="default_btn w-50 text_xs px-1">View Cart</a>
                       <a href="checkout.html" class="default_btn second ms-3 w-50 text_xs px-1">Checkout</a>
                  </div>
              </div>
          </div>
          <div class="position-relative myacwrap home-1">
              <a href="javascript:void(0)" class="icon_wrp text-center myacc">
                  <span class="icon">
                      <i class="icon-user-line"></i>
                  </span>
                  <span class="icon_text">Account</span>
              </a>
              <div class="myacc_cont">
                  <div class="ac_join">
                      <p>Welcome to RAFCART Shop</p>
                      <div class="account_btn d-flex justify-content-between">
                         <a href="register.html" class="default_btn">Join</a>
                          <a href="login.html" class="default_btn second">Sing in</a>
                      </div>
                  </div>
                  <div class="ac_links">
                        <a href="account.html" class="myac">
                          <i class="lar la-id-card"></i>
                          My Account
                      </a>
                     <a href="account-order-history.html">
                          <i class="las la-gift"></i>
                          My Order
                      </a>
                     <a href="wish-list.html">
                          <i class="lar la-heart"></i>
                          My Wishlist
                      </a>
                      <a href="shopping-cart.html">
                           <i class="icon-cart"></i>
                          My Cart
                      </a>
                      <a href="login.html">
                          <i class="las la-power-off"></i>
                          Log out
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</header>


<nav class="d-none d-lg-block">
<div class="container">
  <div class="d-flex">
      <div class="all_category">
          <div class="bars text-white d-flex align-items-center justify-content-center">
              <span class="icon"> <i class="las la-bars"></i></span>
              <span class="icon_text">All categories</span>
          </div>
          <div class="sub_categories_wrp">
              <div class="sub_categories">
                  <h5 class="d-block position-relative d-lg-none subcats_title">
                      All categories

                  </h5>
                  <a href="#" class="singlecats">
                      <span class="img_wrp">
                         <i class="las la-shoe-prints"></i>  
                      </span>
                      <span class="txt">Shoes</span>
                  </a>

                  <div class="singlecats withsub">
                      <span class="img_wrp">
                         <i class="las la-male"></i>
                      </span>
                      <span class="txt">Men</span>
                      <span class="wsicon"><i class="las la-angle-right"></i></span>
                      <div class="mega_menu">
                          <div class="single_mega_menu">
                              <div class="mega_menu_wrap">
                                  <h4>Hot sale</h4>
                                  <div class="mega_categories">
                                      <a href="#">Hoodies $ Sweatshirts</a>
                                      <a href="#">T-Shirt</a>
                                      <a href="#">Men’s Sets</a>
                                      <a href="#">Jacket</a>
                                      <a href="#">Shoes</a>
                                  </div>
                              </div>
                              <div class="mega_menu_wrap">
                                  <h4>Bottoms</h4>
                                  <div class="mega_categories">
                                      <a href="#">Casual Pants</a>
                                      <a href="#">Men’s Sleep & Lounge</a>
                                      <a href="#">Jeans</a>
                                      <a href="#">Shorts</a>
                                      <a href="#">Towel</a>
                                  </div>
                              </div>
                          </div>

                          <div class="single_mega_menu">
                              <div class="mega_menu_wrap">
                                  <h4>Outerwear $ Jackets</h4>
                                  <div class="mega_categories">
                                      <a href="#">Jacket</a>
                                      <a href="#">Sweaters</a>
                                      <a href="#">Casual Faux Leather</a>
                                      <a href="#">Parks</a>
                                      <a href="#">Jeans</a>
                                  </div>
                              </div>
                              <div class="mega_menu_wrap">
                                  <h4>Underwear & Loun</h4>
                                  <div class="mega_categories">
                                      <a href="#">Boxes</a>
                                      <a href="#">Berifs</a>
                                      <a href="#">Long Johns</a>
                                      <a href="#">Men’s Sleep & Lounge</a>
                                      <a href="#">Parks</a>
                                  </div>
                              </div>
                          </div>

                          <div class="single_mega_menu">
                              <div class="mega_menu_wrap">
                                  <h4>Accessories</h4>
                                  <div class="mega_categories">
                                      <a href="#">Scarves</a>
                                      <a href="#">Skullies & Beanies</a>
                                      <a href="#">Casual Faux Leather</a>
                                      <a href="#">Prescription Glasses</a>
                                      <a href="#">Belt</a>
                                  </div>
                              </div>
                              <div class="mega_menu_wrap">
                                  <h4>Novelty & Special</h4>
                                  <div class="mega_categories">
                                      <a href="#">Cosplay Costumes</a>
                                      <a href="#">Stage & Dance Wear</a>
                                      <a href="#">Exotic Apparel</a>
                                      <a href="#">Scarves</a>
                                      <a href="#">Men’s Sets</a>
                                  </div>
                              </div>
                          </div>
                          <div class="single_mega_menu brnd">
                              <div class="mega_brands">
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-1.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-2.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-3.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-4.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-5.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-6.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-7.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-8.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-9.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-10.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-11.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-12.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-13.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-14.png" alt="brand"/>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <a href="#" class="singlecats">
                      <span class="img_wrp">
                          <i class="las la-female"></i>
                      </span>
                      <span class="txt">Women</span>
                  </a>
                  <a href="#" class="singlecats">
                      <span class="img_wrp">
                          <i class="las la-plug"></i>
                      </span>
                      <span class="txt">Electronisc</span>
                  </a>
                  <a href="#" class="singlecats">
                      <span class="img_wrp">
                          <i class="las la-headphones"></i>
                      </span>
                      <span class="txt">Headphones</span>
                  </a>
                  <a href="#" class="singlecats">
                      <span class="img_wrp">
                           <i class="icon-watch"></i>
                      </span>
                      <span class="txt">Watches</span>
                  </a>
                  <div class="singlecats withsub">
                      <span class="img_wrp">
                           <i class="las la-desktop"></i>
                      </span>
                      <span class="txt">Computer</span>
                      <span class="wsicon"><i class="las la-angle-right"></i></span>
                      <div class="mega_menu">
                          <div class="single_mega_menu">
                              <div class="mega_menu_wrap">
                                  <h4>Macbook</h4>
                                  <div class="mega_categories">
                                      <a href="#">Mackbook m1</a>
                                      <a href="#">Mackbook pro</a>
                                      <a href="#">Mackbook air</a>
                                      <a href="#">Mackbook 2015</a>
                                      <a href="#">Mackbook 2020</a>
                                  </div>
                              </div>
                              <div class="mega_menu_wrap">
                                  <h4>Laptop</h4>
                                  <div class="mega_categories">
                                      <a href="#">Razer</a>
                                      <a href="#">Hp Laptop</a>
                                      <a href="#">Dell Notebook</a>
                                      <a href="#">Asus</a>
                                      <a href="#">Lenovo</a>
                                  </div>
                              </div>
                          </div>

                          <div class="single_mega_menu">
                              <div class="mega_menu_wrap">
                                  <h4>Dasktop</h4>
                                  <div class="mega_categories">
                                      <a href="#">Brand Dasktop</a>
                                      <a href="#">All in one pc</a>
                                      <a href="#">Mini PC</a>
                                      <a href="#">Customize PC</a>
                                      <a href="#">Dasktop Accessories</a>
                                  </div>
                              </div>
                              <div class="mega_menu_wrap">
                                  <h4>Monitor</h4>
                                  <div class="mega_categories">
                                      <a href="#">Samsung</a>
                                      <a href="#">Philips</a>
                                      <a href="#">LG</a>
                                      <a href="#">HP</a>
                                      <a href="#">Xiaomi</a>
                                  </div>
                              </div>
                          </div>

                          <div class="single_mega_menu">
                              <div class="mega_menu_wrap">
                                  <h4>Accessories</h4>
                                  <div class="mega_categories">
                                      <a href="#">Dasktop Ram</a>
                                      <a href="#">Motherboard</a>
                                      <a href="#">SSD Card</a>
                                      <a href="#">Hard disk</a>
                                      <a href="#">Processor</a>
                                  </div>
                              </div>
                              <div class="mega_menu_wrap">
                                  <h4>Gaming</h4>
                                  <div class="mega_categories">
                                      <a href="#">Gaming console</a>
                                      <a href="#">Gaming Chair</a>
                                      <a href="#">Gaming Desk</a>
                                      <a href="#">Gaming Controller</a>
                                      <a href="#">Keyboard</a>
                                  </div>
                              </div>
                          </div>
                          <div class="single_mega_menu brnd">
                              <div class="mega_brands">
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-1.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-2.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-3.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-4.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-5.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-6.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-7.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-8.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-9.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-10.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-11.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-12.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-13.png" alt="brand"/>
                                  </a>
                                  <a href="#" class="mega_brnd_img">
                                      <img loading="lazy"  src="assets/images/brand-14.png" alt="brand"/>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <a href="#" class="singlecats">
                      <span class="img_wrp">
                          <i class="las la-mobile"></i>
                      </span>
                      <span class="txt">Mobile</span>
                  </a>
              </div>
          </div>
      </div>
      <ul class="nav_bar flex-grow-1">
          <li class="withsubs">
              <Link to="/"><a>Home <span></span></a></Link>
              
          </li>
          <li class="withsubs">
              <a href="shop-list.html">Shop <span><i class="las la-angle-down"></i></span></a>
              <ul class="subnav">

                  <li> <Link to="/listofproduct"><a>List view</a></Link></li>
                  <li><Link to="/cart"><a >Shopping cart</a></Link></li>
                  <li><Link to="/productview"><a>Product view</a></Link></li>
              </ul>
          </li>
         
          <li><a href="contact-us.html">contact</a></li>
          <li class="tophead_items ms-auto">
              <a href="tel:+18475555555" class="me-0 pe-0"> <span><i class="las la-phone"></i></span>
                  call: +123 456 7890</a>
          </li>
      </ul>
      
  </div>
</div>
</nav>


<div class="mobile_bottombar d-block d-lg-none">
<div class="header_icon">
  <a href="javascript:void(0)" class="icon_wrp text-center open_menu">
      <span class="icon">
          <i class="las la-bars"></i>
      </span>
      <span class="icon_text">Menu</span>
  </a>
  <a href="javascript:void(0)" class="icon_wrp text-center open_category">
      <span class="icon">
         <i class="icon-list-ul"></i>
      </span>
      <span class="icon_text">Categories</span>
  </a>
  <a href="javascript:void(0)" class="icon_wrp text-center" id="src_icon">
      <span class="icon">
         <i class="icon-search-left"></i>
      </span>
      <span class="icon_text">Search</span>
  </a>
  <a href="javascript:void(0)" class="icon_wrp crt text-center" id="openCart">
      <span class="icon">
          <i class="icon-cart"></i>
      </span>
      <span class="icon_text">Cart</span>
      <span class="pops">8</span>
  </a>
</div>
</div>


<div class="mobile_menwrap d-lg-none" id="mobile_menwrap">
<div class="mobile_menu_2">
  <h5 class="mobile_title">
      Menu
      <span class="sidebarclose" id="menuclose">
          <i class="las la-times"></i>
      </span>
  </h5>
  <ul>
      <li class="withsub">
          <a href="javascript:void(0)">
              Home
          </a>
          <div class="submn">
              <a href="index-1.html">Home 1</a>
              <a href="index-2.html">Home 2</a>
              <a href="index-3.html">Home 3</a>
          </div>
      </li>

      <li class="withsub">
          <a href="javascript:void(0)">
              Shop
          </a>
          <div class="submn">
              <a href="shop-list.html">List View</a>
              <a href="shop-grid.html">Grid View</a>
              <a href="shop-grid-2.html">Grid View 2</a>
              <a href="wish-list.html">Wishlist</a>
              <a href="shopping-cart.html">Shopping cart</a>
              <a href="product-view.html">Product view</a>
          </div>
      </li>
      <li class="withsub">
          <a href="javascript:void(0)">
              My Account
          </a>
          <div class="submn">
              <a href="account.html">My account</a>
              <a href="login.html">Login</a>
              <a href="register.html">Register</a>
              <a href="forgot-password.html">Forgot password</a>
          </div>
      </li>
      <li class="withsub">
          <a href="javascript:void(0)">
              Other pages
          </a>
          <div class="submn">
              <a href="about-us.html">about us</a>
              <a href="contact-us.html">Contact us</a>
              <a href="track-order.html">Track order</a>
              <a href="faq.html">FAQ</a>
              <a href="404.html">404</a>
              <a href="checkout.html">Checkout</a>
              <a href="payment.html">Payment</a>
              <a href="order-completed.html">Order complete</a>
          </div>
      </li>
  </ul>
</div>
</div>


<div class="mobile_menwrap d-lg-none" id="mobileCart">
<div class="mobile_cart_wrap d-flex flex-column">
  <h5 class="mobile_title">
      Cart
      <span class="sidebarclose" id="mobileCartClose">
          <i class="las la-times"></i>
      </span>
  </h5>
  <div class="px-3 py-3 flex-grow-1 d-flex flex-column">
      <div class="cart_droptitle">
          <h4 class="text_lg">Total 2 Items</h4>
      </div>
      <div class="cartsdrop_wrap">
          <a href="product-view.html" class="single_cartdrop mb-3">
              <span class="remove_cart"><i class="las la-times"></i></span>
              <div class="cartdrop_img">
                  <img loading="lazy"  src="assets/images/shoes-5.png" alt="product"/>
              </div>
              <div class="cartdrop_cont">
                  <h5 class="text_lg mb-0 default_link">
                      Men casual shoes
                  </h5>
                  <p class="mb-0 text_xs text_p">x1 <span class="ms-2">$450</span></p>
              </div>
          </a>
          <a href="product-view.html" class="single_cartdrop">
              <span class="remove_cart"><i class="las la-times"></i></span>
              <div class="cartdrop_img">
                  <img loading="lazy"  src="assets/images/headphone-2.png" alt="product"/>
              </div>
              <div class="cartdrop_cont">
                  <h5 class="text_lg mb-0 default_link">
                      Men casual shoes
                  </h5>
                  <p class="mb-0 text_xs text_p">x1 <span class="ms-2">$450</span></p>
              </div>
          </a>
      </div>
      <div class="mt-auto">
          <div class="total_cartdrop">
              <h4 class="text_lg text-uppercase mb-0">Sub Total:</h4>
              <h4 class="text_lg mb-0 ms-2">$980.00</h4>
          </div>
          <div class="cartdrop_footer mt-3 d-flex">
              <a href="shopping-cart.html" class="default_btn w-50 text_xs px-1">View Cart</a>
               <a href="checkout.html" class="default_btn second ms-3 w-50 text_xs px-1">Checkout</a>
          </div>
      </div>
  </div>
</div>
</div>


<div class="mobile_search_bar">
<div class="mobile_search_text">
  <p>What you are looking for?</p>
  <span class="close_mbsearch" id="close_mbsearch">
      <i class="las la-times"></i>
  </span>
</div>
<form>
  <input type="text" placeholder="search products..."/>
  <button>
      <i class="icon-search-left"></i>
  </button>
</form>

<div class="search_result_product">
  <a href="product-view.html" class="single_sresult_product">
      <div class="sresult_img">
          <img loading="lazy"  src="assets/images/laptop-2.png" alt="product"/>
      </div>
      <div class="sresult_content">
          <h4>HP Pavilion 15</h4>
          <div class="price">
              <span class="org_price">$45.00</span>
              <span class="prev_price">$55.45</span>
          </div>
      </div>
  </a>
  <a href="product-view.html" class="single_sresult_product">
      <div class="sresult_img">
          <img loading="lazy"  src="assets/images/phone-1.png" alt="product"/>
      </div>
      <div class="sresult_content">
          <h4>Xiaomi Note 7 Pro</h4>
          <div class="price">
              <span class="org_price">$45.00</span>
              <span class="prev_price">$55.45</span>
          </div>
      </div>
  </a>
</div>
</div>


<div class="mobile_menwrap d-lg-none" id="mobile_catwrap">
<div class="sub_categories">
  <h5 class="mobile_title">
      All categories
      <span class="sidebarclose" id="catclose">
          <i class="las la-times"></i>
      </span>
  </h5>

  <a href="#" class="singlecats">
      <span class="img_wrp">
         <i class="las la-shoe-prints"></i>  
      </span>
      <span class="txt">Shoes</span>
  </a>

  <div class="singlecats withsub">
      <span class="img_wrp">
         <i class="las la-male"></i>
      </span>
      <span class="txt">Men</span>
      <span class="wsicon"><i class="las la-angle-right"></i></span>
      <div class="mega_menu">
          <div class="single_mega_menu">
              <div class="mega_menu_wrap">
                  <h4>Hot sale</h4>
                  <div class="mega_categories">
                      <a href="#">Hoodies $ Sweatshirts</a>
                      <a href="#">T-Shirt</a>
                      <a href="#">Men’s Sets</a>
                      <a href="#">Jacket</a>
                      <a href="#">Shoes</a>
                  </div>
              </div>
              <div class="mega_menu_wrap">
                  <h4>Bottoms</h4>
                  <div class="mega_categories">
                      <a href="#">Casual Pants</a>
                      <a href="#">Men’s Sleep & Lounge</a>
                      <a href="#">Jeans</a>
                      <a href="#">Shorts</a>
                      <a href="#">Towel</a>
                  </div>
              </div>
          </div>

          <div class="single_mega_menu">
              <div class="mega_menu_wrap">
                  <h4>Outerwear $ Jackets</h4>
                  <div class="mega_categories">
                      <a href="#">Jacket</a>
                      <a href="#">Sweaters</a>
                      <a href="#">Casual Faux Leather</a>
                      <a href="#">Parks</a>
                      <a href="#">Jeans</a>
                  </div>
              </div>
              <div class="mega_menu_wrap">
                  <h4>Underwear & Loun</h4>
                  <div class="mega_categories">
                      <a href="#">Boxes</a>
                      <a href="#">Berifs</a>
                      <a href="#">Long Johns</a>
                      <a href="#">Men’s Sleep & Lounge</a>
                      <a href="#">Parks</a>
                  </div>
              </div>
          </div>

          <div class="single_mega_menu">
              <div class="mega_menu_wrap">
                  <h4>Accessories</h4>
                  <div class="mega_categories">
                      <a href="#">Scarves</a>
                      <a href="#">Skullies & Beanies</a>
                      <a href="#">Casual Faux Leather</a>
                      <a href="#">Prescription Glasses</a>
                      <a href="#">Belt</a>
                  </div>
              </div>
              <div class="mega_menu_wrap">
                  <h4>Novelty & Special</h4>
                  <div class="mega_categories">
                      <a href="#">Cosplay Costumes</a>
                      <a href="#">Stage & Dance Wear</a>
                      <a href="#">Exotic Apparel</a>
                      <a href="#">Scarves</a>
                      <a href="#">Men’s Sets</a>
                  </div>
              </div>
          </div>
          <div class="single_mega_menu brnd">
              <div class="mega_brands">
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-1.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-2.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-3.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-4.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-5.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-6.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-7.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-8.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-9.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-10.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-11.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-12.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-13.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-14.png" alt="brand"/>
                  </a>
              </div>
          </div>
      </div>
  </div>
  <a href="#" class="singlecats">
      <span class="img_wrp">
          <i class="las la-female"></i>
      </span>
      <span class="txt">Women</span>
  </a>
  <a href="#" class="singlecats">
      <span class="img_wrp">
          <i class="las la-plug"></i>
      </span>
      <span class="txt">Electronisc</span>
  </a>
  <a href="#" class="singlecats">
      <span class="img_wrp">
          <i class="las la-headphones"></i>
      </span>
      <span class="txt">Headphones</span>
  </a>
  <a href="#" class="singlecats">
      <span class="img_wrp">
           <i class="icon-watch"></i>
      </span>
      <span class="txt">Watches</span>
  </a>
  <div class="singlecats withsub">
      <span class="img_wrp">
           <i class="las la-desktop"></i>
      </span>
      <span class="txt">Computer</span>
      <span class="wsicon"><i class="las la-angle-right"></i></span>
      <div class="mega_menu">
          <div class="single_mega_menu">
              <div class="mega_menu_wrap">
                  <h4>Macbook</h4>
                  <div class="mega_categories">
                      <a href="#">Mackbook m1</a>
                      <a href="#">Mackbook pro</a>
                      <a href="#">Mackbook air</a>
                      <a href="#">Mackbook 2015</a>
                      <a href="#">Mackbook 2020</a>
                  </div>
              </div>
              <div class="mega_menu_wrap">
                  <h4>Laptop</h4>
                  <div class="mega_categories">
                      <a href="#">Razer</a>
                      <a href="#">Hp Laptop</a>
                      <a href="#">Dell Notebook</a>
                      <a href="#">Asus</a>
                      <a href="#">Lenovo</a>
                  </div>
              </div>
          </div>

          <div class="single_mega_menu">
              <div class="mega_menu_wrap">
                  <h4>Dasktop</h4>
                  <div class="mega_categories">
                      <a href="#">Brand Dasktop</a>
                      <a href="#">All in one pc</a>
                      <a href="#">Mini PC</a>
                      <a href="#">Customize PC</a>
                      <a href="#">Dasktop Accessories</a>
                  </div>
              </div>
              <div class="mega_menu_wrap">
                  <h4>Monitor</h4>
                  <div class="mega_categories">
                      <a href="#">Samsung</a>
                      <a href="#">Philips</a>
                      <a href="#">LG</a>
                      <a href="#">HP</a>
                      <a href="#">Xiaomi</a>
                  </div>
              </div>
          </div>

          <div class="single_mega_menu">
              <div class="mega_menu_wrap">
                  <h4>Accessories</h4>
                  <div class="mega_categories">
                      <a href="#">Dasktop Ram</a>
                      <a href="#">Motherboard</a>
                      <a href="#">SSD Card</a>
                      <a href="#">Hard disk</a>
                      <a href="#">Processor</a>
                  </div>
              </div>
              <div class="mega_menu_wrap">
                  <h4>Gaming</h4>
                  <div class="mega_categories">
                      <a href="#">Gaming console</a>
                      <a href="#">Gaming Chair</a>
                      <a href="#">Gaming Desk</a>
                      <a href="#">Gaming Controller</a>
                      <a href="#">Keyboard</a>
                  </div>
              </div>
          </div>
          <div class="single_mega_menu brnd">
              <div class="mega_brands">
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-1.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-2.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-3.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-4.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-5.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-6.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-7.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-8.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-9.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-10.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-11.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-12.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-13.png" alt="brand"/>
                  </a>
                  <a href="#" class="mega_brnd_img">
                      <img loading="lazy"  src="assets/images/brand-14.png" alt="brand"/>
                  </a>
              </div>
          </div>
      </div>
  </div>
  <a href="#" class="singlecats">
      <span class="img_wrp">
          <i class="las la-mobile"></i>
      </span>
      <span class="txt">Mobile</span>
  </a>
</div>
</div> 
  </React.Fragment>
    )
}
}

export default Header
