import React from 'react'

function Cart() {
    return (
        <React.Fragment>


    <div class="container">
        <div class="breadcrumbs">
<a href="index-1.html"><i class="las la-home"></i></a>
            <a href="#" class="active">Shopping Cart</a>
        </div>
    </div>

    <div class="cart_area section_padding_b">
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <h4 class="shop_cart_title sopcart_ttl d-none d-lg-flex">
                        <span>Product</span>
                        <span>Quantity</span>
                        <span>Total Price</span>
                    </h4>
                    <div class="shop_cart_wrap">
                        <div class="single_shop_cart d-flex align-items-center flex-wrap">
                            <div class="cart_img mb-4 mb-md-0">
                                <img loading="lazy"  src="assets/images/headphone-4.png" alt="product"/>
                            </div>
                            <div class="cart_cont">
                                <a href="product-view.html">
                                    <h5>XB450AP Extra Bass Headphones</h5>
                                </a>
                                <p class="price">$45.00</p>
                                <p class="size mb-0">Size: M</p>
                            </div>
                            <div class="cart_qnty d-flex align-items-center ms-md-auto">
                                <div class="cart_qnty_btn">
                                    <i class="las la-minus"></i>
                                </div>
                                <div class="cart_count">4</div>
                                <div class="cart_qnty_btn">
                                    <i class="las la-plus"></i>
                                </div>
                            </div>
                            <div class="cart_price ms-auto">
                                <p>$45.00</p>
                            </div>
                            <div class="cart_remove ms-auto">
                                 <i class="icon-trash"></i>
                            </div>
                        </div>
                        <div class="single_shop_cart d-flex align-items-center flex-wrap">
                            <div class="cart_img mb-4 mb-md-0">
                                <img loading="lazy"  src="assets/images/iphone.png" alt="product"/>
                            </div>
                            <div class="cart_cont">
                                <a href="product-view.html">
                                    <h5>iPhone 11 Pro Max XR</h5>
                                </a>
                                <p class="price">$499.00</p>
                                <p class="size mb-0">Size: M</p>
                            </div>
                            <div class="cart_qnty d-flex align-items-center ms-md-auto">
                                <div class="cart_qnty_btn">
                                    <i class="las la-minus"></i>
                                </div>
                                <div class="cart_count">1</div>
                                <div class="cart_qnty_btn">
                                    <i class="las la-plus"></i>
                                </div>
                            </div>
                            <div class="cart_price ms-auto">
                                <p>$499.00</p>
                            </div>
                            <div class="cart_remove ms-auto">
                                 <i class="icon-trash"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-4 mt-lg-0">
                    <div class="cart_summary">
                        <h4>Order Summary</h4>
                         <div class="cartsum_text d-flex justify-content-between">
                             <p class="text-semibold">Subtotal</p>
                             <p class="text-semibold">$45.00</p>
                         </div>
                         <div class="cartsum_text d-flex justify-content-between">
                            <p>Delivery</p>
                            <p>Free</p>
                        </div>
                        <div class="cartsum_text d-flex justify-content-between">
                            <p>Tax</p>
                            <p>Free</p>
                        </div>
                        <div class="cart_sum_total d-flex justify-content-between">
                            <p>Total</p>
                             <p>$45.00</p>
                        </div>
                        <div class="cart_sum_coupon">
                            <input type="text" placeholder="Enter coupon"/>
                            <button>apply</button>
                        </div>
                        <div class="cart_sum_pros">
                            <button>Proccees to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
        </React.Fragment>
    )
}

export default Cart;
