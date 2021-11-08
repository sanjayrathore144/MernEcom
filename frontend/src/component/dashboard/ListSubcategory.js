import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListSubcategory() {

    const [listsubcategory, setlistsubcategory] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/subcategory').then(
        (res)=>{
          console.log(res.data.data);
          setlistsubcategory(res.data.data)
        }
      )
      }, [])
  
      var listsubcategoryList = listsubcategory.map((ts) => { 
        return  <tr key = {ts._id} > 
    {/* <td>{ts.srno}</td> */}
    <td>{ts.category}</td>
    <td>{ts.subcategory}</td>
    <td>{ts.description}</td>
    <td>{ts.attr_name}</td>
    <td>{ts.unit}</td>
    
    </tr>
    
    })
    
    console.log(listsubcategoryList);

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
                    <th>Subcategory</th>
                    <th>Description</th>
                    <th>Attribute Name</th>
                    <th>Unit</th>
                </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                    <th>Category</th>
                    <th>Subcategory</th>
                    <th>Description</th>
                    <th>Attributes Name</th>
                    <th>Unit</th>
                </tr>
                                    </tfoot>
                                    <tbody>
                                      
                                    {listsubcategoryList}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

        </React.Fragment>
    )
}

export default ListSubcategory
