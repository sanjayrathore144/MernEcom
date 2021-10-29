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
    <td>{pt.category}</td>
    <td>{pt.subcategory}</td>
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
            
            <div class="container-fluid">

                   
                    <h1 class="h3 mb-2 text-gray-800">Category List</h1>
                   

                  
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Category</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                    <tr>
                                    <th>Category</th>
                                    <th>SubCategory</th>
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
                                    <tfoot>
                                    <tr>
                                    <th>Category</th>
                                    <th>SubCategory</th>
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
                                    <tbody>
                                      
                                    {productList}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

        </React.Fragment>
    )
}

export default ListProduct
