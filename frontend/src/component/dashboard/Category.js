import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Category() {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/categories').then(
      (res)=>{
        console.log(res.data.data);
        setCategory(res.data.data)
      }
    )
    }, [])

    var categoryList = category.map((ct) => { 
      return  <tr key = {ct._id} > 
  <td>{ct.srno}</td>
  <td>{ct.name}</td>
  <td>{ct.description}</td>
  <td>{ct.thumbnail}</td>
  
  </tr>
  
  })
  
  console.log(categoryList);

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
                  <th>Sr No.</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Thumbnail</th>
                </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                  <th>Sr No.</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Thumbnail</th>
                </tr>
                                    </tfoot>
                                    <tbody>
                                      
                                    {categoryList}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
               

          
           
        </React.Fragment>
    )
}

export default Category
