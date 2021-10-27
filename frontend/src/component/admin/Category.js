import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

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
           {/* <Sidebar/>  */}
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
<section id="basic-datatable">
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
                  <th>Name</th>
                  <th>Description</th>
                  <th>Thumbnail</th>
                </tr>
              </thead>
              <tbody>
               
              {categoryList}
              </tbody>
              <tfoot>
              <tr>
                  <th>Sr No.</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Thumbnail</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>

        
      </div>
    </div>
   
        </React.Fragment>
    )
}

export default Category
