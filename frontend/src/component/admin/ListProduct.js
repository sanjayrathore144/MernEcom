import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/product').then(
        (res)=>{
          console.log(res.data.data);
          setProducts(res.data.data)
        }
      )
      }, [])
  
      var productList = products.map((pt) => { 
        return  <tr key = {pt._id} > 
    {/* <td>{pt.srno}</td> */}
    <td>{pt.title}</td>
    <td>{pt.price}</td>
    <td>{pt.image}</td>
    <td>{pt.qty}</td>
    <td>{pt.description}</td>
    <td>{pt.rating}</td>
    <td>{pt.discount}</td>
    <td>{pt.seller}</td>
    <td>{pt.brand_name}</td>
    <td>{pt.delivery_charge}</td>
    <td>{pt.attribute}</td>
    <td>{pt.voucher}</td>
    
    </tr>
    
    })
    
    console.log(productList);
  
  
  
      return (
          <React.Fragment>
              
      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <div class="content-header row">
            <div class="content-header-left col-12 mb-2 mt-1">
              <div class="breadcrumbs-top">
                <h5 class="content-header-title float-left pr-1 mb-0">Category</h5>
                <div class="breadcrumb-wrapper d-none d-sm-block">
                  <ol class="breadcrumb p-0 mb-0 pl-1">
                    <li class="breadcrumb-item"><a href="index.html"><i class="bx bx-home-alt"></i></a>
                    </li>
                    <li class="breadcrumb-item"><a href="#">List of Categories</a>
                    </li>
                    <li class="breadcrumb-item active">Category
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
  
  
  
          <div class="content-body">  
  <section id="horizontal-vertical">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Categories</h4>
          </div>
          <div class="card-body card-dashboard">
           
            <div class="table-responsive">
              <table class="table zero-configuration">
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Discount</th>
                    <th>Seller</th>
                    <th>Brand Name</th>
                    <th>Delivery Charge</th>
                    <th>Attributes</th>
                    <th>Voucher</th>
                  </tr>
                </thead>
                <tbody>
                 
                {productList}
                </tbody>
                <tfoot>
                <tr>
                    <th>Sr No.</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Discount</th>
                    <th>Seller</th>
                    <th>Brand Name</th>
                    <th>Delivery Charge</th>
                    <th>Attributes</th>
                    <th>Voucher</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  
{/* 
<section id="horizontal-vertical">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Product List</h4>
        </div>
        <div class="card-body card-dashboard">
         
          <div class="table-responsive">
            <table class="table nowrap scroll-horizontal-vertical">
              <thead>
              <tr>
                    <th>Sr No.</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Discount</th>
                    <th>Seller</th>
                    <th>Brand Name</th>
                    <th>Delivery Charge</th>
                    <th>Attributes</th>
                    <th>Voucher</th>
                  </tr>
              </thead>
              <tbody>
                
                {productList}
                <tr>
                  <td>Donna</td>
                  <td>Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td>27</td>
                  <td>2011/01/25</td>
                  <td>$112,000</td>
                  <td>4226</td>
                  <td>d.snider@datatables.net</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

  
  </div>
  
          
        </div>
      </div>
     
          </React.Fragment>
      )
  }

export default ListProduct
