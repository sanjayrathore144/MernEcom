import React from 'react'
// import Footer from './Footer'
// import Header from './Header'

function ListProductView() {
    return (
        <React.Fragment>

{/* <Header/> */}



    <div class="container">
        <div class="breadcrumbs">
<a href="index-1.html"><i class="las la-home"></i></a>
            <a href="#" class="active">Shop</a>
        </div>
    </div>

   
    <div class="shop_wrap section_padding_b">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-4 position-relative">
                    <div class="filter_box py-3 px-3 shadow_sm">
                        <div class="close_filter d-block d-lg-none"><i class="las la-times"></i></div>
                        <div class="shop_filter d-block d-sm-none">
                            <h4 class="filter_title">Sort by</h4>
                            <div class="sorting_filter mb-2">
                                <select class="nice_select">
                                    <option value="">Default sorting</option>
                                    <option value="">Price low-high</option>
                                    <option value="">Price high-low</option>
                                </select>
                            </div>
                        </div>

                        <div class="shop_filter">
                            <h4 class="filter_title">Categories</h4>
                            <div class="filter_list">
                                <div class="custom_check d-flex align-items-center">
                                    <input type="checkbox" class="check_inp" hidden id="cat-women" checked/>
                                    <label for="cat-women">Women</label>
                                    <p class="mb-0 ms-auto">(16)</p>
                                </div>
                                <div class="custom_check d-flex align-items-center">
                                    <input type="checkbox" class="check_inp" hidden id="cat-men"/>
                                    <label for="cat-men">Men</label>
                                    <p class="mb-0 ms-auto">(9)</p>
                                </div>
                                <div class="custom_check d-flex align-items-center">
                                    <input type="checkbox" class="check_inp" hidden id="cat-shoes"/>
                                    <label for="cat-shoes">Shoes</label>
                                    <p class="mb-0 ms-auto">(19)</p>
                                </div>
                                <div class="custom_check d-flex align-items-center">
                                    <input type="checkbox" class="check_inp" hidden id="cat-computer"/>
                                    <label for="cat-computer">Computer</label>
                                    <p class="mb-0 ms-auto">(35)</p>
                                </div>
                            </div>
                        </div>
                        <div class="shop_filter">
                            <h4 class="filter_title">Brands</h4>
                            <div class="filter_list">
                                <div class="custom_check d-flex align-items-center">
                                    <input type="checkbox" class="check_inp" hidden id="bnd-adidas" checked/>
                                    <label for="bnd-adidas">Adidas</label>
                                </div>
                                <div class="custom_check d-flex align-items-center">
                                    <input type="checkbox" class="check_inp" hidden id="bnd-nike"/>
                                    <label for="bnd-nike">Nike</label>
                                </div>
                                <div class="custom_check d-flex align-items-center">
                                    <input type="checkbox" class="check_inp" hidden id="bnd-easy"/>
                                    <label for="bnd-easy">Easy</label>
                                </div>
                                <div class="custom_check d-flex align-items-center">
                                    <input type="checkbox" class="check_inp" hidden id="bnd-arong"/>
                                    <label for="bnd-arong">Arong</label>
                                </div>
                            </div>
                        </div>
                        <div class="shop_filter">
                            <h4 class="filter_title">Price</h4>
                            <div class="price-range-slider">
                                <div id="slider-range" class="range-bar"></div>
                                <p class="range-value">
                                    <input type="text" id="amount" readonly/>
                                </p>
                            </div>
                        </div>
                        <div class="shop_filter">
                            <h4 class="filter_title">Size</h4>
                            <div class="size_selector d-flex">
                                <div class="single_size_opt">
                                    <input type="radio" hidden name="size" class="size_inp" id="size-xs"/>
                                    <label for="size-xs">XS</label>
                                </div>
                                <div class="single_size_opt ms-2">
                                    <input type="radio" hidden name="size" class="size_inp" id="size-s"/>
                                    <label for="size-s">S</label>
                                </div>
                                <div class="single_size_opt ms-2">
                                    <input type="radio" hidden name="size" class="size_inp" id="size-m" checked/>
                                    <label for="size-m">M</label>
                                </div>
                                <div class="single_size_opt ms-2">
                                    <input type="radio" hidden name="size" class="size_inp" id="size-l"/>
                                    <label for="size-l">L</label>
                                </div>
                                <div class="single_size_opt ms-2">
                                    <input type="radio" hidden name="size" class="size_inp" id="size-xl"/>
                                    <label for="size-xl">XL</label>
                                </div>
                            </div>
                        </div>
                        <div class="shop_filter border-bottom-0 pb-0 mb-0">
                            <h4 class="filter_title">Color</h4>
                            <div class="size_selector color_selector d-flex align-items-center">
                                <div class="single_size_opt">
                                    <input type="radio" hidden name="color" class="size_inp" id="color-purple"/>
                                    <label for="color-purple" class="bg-color" data-bs-toggle="tooltip"
                                        title="Rose Red"></label>
                                </div>
                                <div class="single_size_opt ms-2">
                                    <input type="radio" hidden name="color" class="size_inp" id="color-red"/>
                                    <label for="color-red" class="bg-white" data-bs-toggle="tooltip"
                                        title="White"></label>
                                </div>
                                <div class="single_size_opt ms-2">
                                    <input type="radio" hidden name="color" class="size_inp" id="color-green"
                                        checked/>
                                    <label for="color-green" class="bg-dark" data-bs-toggle="tooltip"
                                        title="Black"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-8">
                    <div class="d-flex align-items-center">
                        <div class="d-block d-lg-none">
                            <button class="default_btn py-2 me-3 rounded" id="mobile_filter_btn">Filter</button>
                        </div>
                        <div class="sorting_filter d-none d-sm-block">
                            <select class="nice_select">
                                <option value="">Default sorting</option>
                                <option value="">Price low-high</option>
                                <option value="">Price high-low</option>
                            </select>
                        </div>
                        <div class="view_filter d-flex align-items-center ms-auto">
                            <a href="shop-grid.html">
                                <div class="view_icon active"><i class="icon-grid"></i></div>
                            </a>
                            <a href="shop-list.html">
                                <div class="view_icon"><i class="las la-list-ul"></i></div>
                            </a>
                        </div>
                    </div>
                    <div class="shop_products">
                        <div class="row gy-4">
                            <div class="col-md-4 col-sm-6">
                                <div class="single_toparrival">
                                    <div class="topariv_img">
                                        <img loading="lazy"  src="assets/images/product8.jpg" alt="product"/>
                                        <div class="persof bg-danger">HOT</div>
                                        <div class="adto_wish">
                                            <i class="icon-heart"></i>
                                        </div>
                                        <div class="prod_soh">
                                            <div class="adto_wish">
                                                <i class="icon-heart"></i>
                                            </div>
                                            <div class="qk_view open_quickview">
                                                <span><i class="las la-eye"></i></span>
                                                Quick View
                                            </div>
                                        </div>
                                    </div>
                                    <div class="topariv_cont">
                                        <a href="product-view.html">
                                            <h4>BIANCO Chair</h4>
                                        </a>
                                        <p>Fabric Accent Chair</p>
                                        <div class="price mb-1">
                                            <span class="org_price">$45.00</span>
                                        </div>
                                        <div class="rating">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="rating_star">
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                </div>
                                                <p class="rating_count mb-0">(150)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="full_atc_btn">
                                        <button>
                                            <span class="me-1"><i class="icon-cart"></i></span>
                                            add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="single_toparrival">
                                    <div class="topariv_img">
                                        <img loading="lazy"  src="assets/images/product10.jpg" alt="product"/>
                                        <div class="adto_wish">
                                            <i class="icon-heart"></i>
                                        </div>
                                        <div class="prod_soh">
                                            <div class="adto_wish">
                                                <i class="icon-heart"></i>
                                            </div>
                                            <div class="qk_view open_quickview">
                                                <span><i class="las la-eye"></i></span>
                                                Quick View
                                            </div>
                                        </div>
                                    </div>
                                    <div class="topariv_cont">
                                        <a href="product-view.html">
                                            <h4>PELAGIA Lounge</h4>
                                        </a>
                                        <p>Outdoor Modular Lounge
                                        </p>
                                        <div class="price mb-1">
                                            <span class="org_price">$45.00</span>
                                        </div>
                                        <div class="rating">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="rating_star">
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                </div>
                                                <p class="rating_count mb-0">(150)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="full_atc_btn">
                                        <button>
                                            <span class="me-1"><i class="icon-cart"></i></span>
                                            add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="single_toparrival">
                                    <div class="topariv_img">
                                        <img loading="lazy"  src="assets/images/product12.jpg" alt="product"/>
                                        <div class="persof bg-warning">50%</div>
                                        <div class="adto_wish">
                                            <i class="icon-heart"></i>
                                        </div>
                                        <div class="prod_soh">
                                            <div class="adto_wish">
                                                <i class="icon-heart"></i>
                                            </div>
                                            <div class="qk_view open_quickview">
                                                <span><i class="las la-eye"></i></span>
                                                Quick View
                                            </div>
                                        </div>
                                    </div>
                                    <div class="topariv_cont">
                                        <a href="product-view.html">
                                            <h4>Black ARCHIE</h4>
                                        </a>
                                        <p>Black Bedside
                                        </p>
                                        <div class="price mb-1">
                                            <span class="org_price">$400.00</span>
                                        </div>
                                        <div class="rating">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="rating_star">
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                </div>
                                                <p class="rating_count mb-0">(150)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="full_atc_btn">
                                        <button>
                                            <span class="me-1"><i class="icon-cart"></i></span>
                                            add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="single_toparrival">
                                    <div class="topariv_img">
                                        <img loading="lazy"  src="assets/images/product1.jpg" alt="product"/>
                                        <div class="adto_wish">
                                            <i class="icon-heart"></i>
                                        </div>
                                        <div class="prod_soh">
                                            <div class="adto_wish">
                                                <i class="icon-heart"></i>
                                            </div>
                                            <div class="qk_view open_quickview">
                                                <span><i class="las la-eye"></i></span>
                                                Quick View
                                            </div>
                                        </div>
                                    </div>
                                    <div class="topariv_cont">
                                        <a href="product-view.html">
                                            <h4>BIANCO Chair</h4>
                                        </a>
                                        <p>Fabric Accent Chair</p>
                                        <div class="price mb-1">
                                            <span class="org_price">$45.00</span>
                                        </div>
                                        <div class="rating">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="rating_star">
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                </div>
                                                <p class="rating_count mb-0">(150)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="full_atc_btn">
                                        <button>
                                            <span class="me-1"><i class="icon-cart"></i></span>
                                            add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="single_toparrival">
                                    <div class="topariv_img">
                                        <img loading="lazy"  src="assets/images/product3.jpg" alt="product"/>
                                        <div class="adto_wish">
                                            <i class="icon-heart"></i>
                                        </div>
                                        <div class="prod_soh">
                                            <div class="adto_wish">
                                                <i class="icon-heart"></i>
                                            </div>
                                            <div class="qk_view open_quickview">
                                                <span><i class="las la-eye"></i></span>
                                                Quick View
                                            </div>
                                        </div>
                                    </div>
                                    <div class="topariv_cont">
                                        <a href="product-view.html">
                                            <h4>PELAGIA Lounge</h4>
                                        </a>
                                        <p>Outdoor Modular Lounge
                                        </p>
                                        <div class="price mb-1">
                                            <span class="org_price">$45.00</span>
                                        </div>
                                        <div class="rating">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="rating_star">
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                </div>
                                                <p class="rating_count mb-0">(150)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="full_atc_btn">
                                        <button>
                                            <span class="me-1"><i class="icon-cart"></i></span>
                                            add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="single_toparrival">
                                    <div class="topariv_img">
                                        <img loading="lazy"  src="assets/images/product6.jpg" alt="product"/>
                                        <div class="persof bg-warning">50%</div>
                                        <div class="adto_wish">
                                            <i class="icon-heart"></i>
                                        </div>
                                        <div class="prod_soh">
                                            <div class="adto_wish">
                                                <i class="icon-heart"></i>
                                            </div>
                                            <div class="qk_view open_quickview">
                                                <span><i class="las la-eye"></i></span>
                                                Quick View
                                            </div>
                                        </div>
                                    </div>
                                    <div class="topariv_cont">
                                        <a href="product-view.html">
                                            <h4>Black ARCHIE</h4>
                                        </a>
                                        <p>Black Bedside
                                        </p>
                                        <div class="price mb-1">
                                            <span class="org_price">$400.00</span>
                                        </div>
                                        <div class="rating">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="rating_star">
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                    <span><i class="las la-star"></i></span>
                                                </div>
                                                <p class="rating_count mb-0">(150)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="full_atc_btn">
                                        <button>
                                            <span class="me-1"><i class="icon-cart"></i></span>
                                            add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pagination_wrp d-flex align-items-center justify-content-center mt-4">
                            <div class="single_paginat active">1</div>
                            <div class="single_paginat">2</div>
                            <div class="single_paginat">3</div>
                            <div class="single_paginat">4</div>
                            <div class="single_paginat"><i class="las la-long-arrow-alt-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* <Footer/> */}

            
        </React.Fragment>
    )
}

export default ListProductView;
