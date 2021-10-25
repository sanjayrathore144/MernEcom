import React, { useState } from 'react';
import axios from 'axios';

function SubCategory() {

    const [category, setcategory] = useState("");
    const [subcategory, setsubcategory] = useState("");
    const [description, setdescription] = useState("");
    const [attr_name, setattr_name] = useState("");
    const [unit, setunit] = useState("");

    function setValue(e){
        e.target.name==="Category" && setcategory(e.target.value);
        e.target.name==="Subcategory" && setsubcategory(e.target.value);
        e.target.name==="Description" && setdescription(e.target.value);
        e.target.name==="Attr_name" && setattr_name(e.target.value);
        e.target.name==="Unit" && setunit(e.target.value);
    }

    function sendData(){
        var s = {
            category , subcategory , description , attr_name , unit
        }
        console.log(s);
        axios.post('http://localhost:3000/subcategory/create', s).then(
                   (res)=>{
                        console.log(res.data);
                        // alert(res.data.data);
            })
    }

    



    return (
        <React.Fragment>
            
           
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-12 mb-2 mt-1">
            <div class="breadcrumbs-top">
              <h5 class="content-header-title float-left pr-1 mb-0">SubCategory</h5>
              <div class="breadcrumb-wrapper d-none d-sm-block">
                <ol class="breadcrumb p-0 mb-0 pl-1">
                  <li class="breadcrumb-item"><a href="index.html"><i class="bx bx-home-alt"></i></a>
                  </li>
                  <li class="breadcrumb-item"><a href="#">Forms</a>
                  </li>
                  <li class="breadcrumb-item active">SubCategory
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="content-body">
<section class="simple-validation">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">SubCategory</h4>
        </div>
        <div class="card-body">
          <form id="jquery-val-form" method="post">
           
            <div class="form-group">
              <label for="inputcategory">Select Category</label>
              <select class="form-control select2" id="inputcategory" name="Category" value={category} onChange={(e)=>{setValue(e);}}>
              <option value="">Select Category Option</option>
                <option value="electronics">Electronics</option>
                <option value="grocery">Grocery</option>
                <option value="fashion">Fashion</option>
                <option value="footwear">Footwear</option>
                <option value="beauty">Beauty</option>
                <option value="toys">Toys</option>
                <option value="sports">Sports</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="inputsubcategory">Enter SubCategory</label>
              <input
                type="text"
                class="form-control"
                id="inputsubcategory" name="Subcategory" value={subcategory} onChange={(e)=>{setValue(e);}}
                placeholder="Enter Subcategory"
              />
            </div>
            <div class="form-group">
              <label class="d-block" for="inputdescription">Discription</label>
              <textarea class="form-control" id="inputdescription" name="Description" value={description} onChange={(e)=>{setValue(e);}} rows="3"></textarea>
            </div>


<div id="container">
<div class="row">
    <div class="col-md-4">
        <div class="form-group label-floating">
            <label class="control-label">Attribute Name</label>
            <input type="text" class="form-control" v-model="act" id="inputattributesname" name="Attr_name" value={attr_name} onChange={(e)=>{setValue(e);}}/>
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group label-floating">
            <label class="control-label">Unit </label>
            <input type="text" class="form-control" v-model="section" id="inputunit" name="Unit" value={unit} onChange={(e)=>{setValue(e);}}/>
        </div>
    </div>
    <div class="col-md-4">
    <div class="btn btn-icon rounded-circle btn-primary" type="button" id="btn">
                    <i class="bx bx-plus"></i>
                  </div>
    <span class="ml-1 font-weight-bold text-primary">ADD NEW</span>
    </div>
    
</div>
</div>


            <div class="row">
              <div class="col-12">
                <button type="button" class="btn btn-primary" onClick={sendData}>Submit</button>
              </div>
            </div>
          </form>
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

export default SubCategory
