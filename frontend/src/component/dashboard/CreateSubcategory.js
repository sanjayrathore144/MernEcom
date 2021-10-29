import React, { useState} from 'react';
import axios from 'axios';
import $ from 'jquery'; 
import { produce } from "immer";
import { generate } from "shortid";



function CreateSubcategory() {


    const [category, setcategory] = useState("");
    const [subcategory, setsubcategory] = useState("");
    const [description, setdescription] = useState("");
    const [attribute, setAttribute] = useState([
        { id: "", attr_name: "", unit: "" }
      ]);

    function setValue(e){
        e.target.name==="Category" && setcategory(e.target.value);
        e.target.name==="Subcategory" && setsubcategory(e.target.value);
        e.target.name==="Description" && setdescription(e.target.value);
        e.target.name==="Attribute" && setAttribute(e.target.value);
        
    }

    function sendData(){
        var s = {
            category , subcategory , description , attribute
        }
        console.log(s);
        axios.post('http://localhost:3000/subcategory/create', s).then(
                   (res)=>{
                        console.log(res.data);
                        alert(res.data.data);
            })
    }

    

        // fetch category   
        const[selectCat, setSelectCat] = useState([]);

    axios.get('http://localhost:3000/categories').then((res)=>{ 
        console.log(res);
        setSelectCat(res.data.data);
        })

var selectCatList = selectCat.map((u)=> {return (<option key={u.id}>{u.name}</option> )});



    return (
        <React.Fragment>
               <div class="container-fluid">
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
              <label class="form-label" for="inputcategory">Select Category</label>
              <select class="form-control select2" id="inputcategory" name="Category" value={category} onChange={(e)=>{setValue(e);}}>
              <option value="">Select Category Option</option>
                {selectCatList}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="inputsubcategory">SubCategory</label>
              <input
                type="text"
                class="form-control"
                id="inputsubcategory" name="Subcategory" value={subcategory} onChange={(e)=>{setValue(e);}}
                placeholder="Enter Subcategory"
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="inputdescription">Discription</label>
              <textarea class="form-control" id="inputdescription" name="Description" value={description} onChange={(e)=>{setValue(e);}} rows="3" placeholder="Enter Description"></textarea>
            </div>

           
      <button class="btn btn-success" type="button" 
        onClick={() => {
          setAttribute(currentAttribute => [
            ...currentAttribute,
            {
              id: generate(),
              attr_name: "",
              unit: ""
            }
          ]);
        }}
      >
        + Add Attribute
      </button>
      {attribute.map((p, index) => {
        return (
          <div key={p.id}>
               <div class="row">

                           <div class="col-xs-4 col-sm-4 col-md-4">
          <div class="form-group">
              <label class="form-label" for="inputattr_name"> Attribute Name</label>    
            <input type="text"
                class="form-control" id="inputattr_name" placeholder="Enter Attribute Name"
              onChange={e => {
                const attr_name = e.target.value;
                setAttribute(currentAttribute =>
                  produce(currentAttribute, v => {
                    v[index].attr_name = attr_name;
                  })
                );
              }}
              value={p.attr_name}
              placeholder="Attribute name"
            />
            </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <label class="form-label" for="inputunit">Unit</label>    
            <input type="text"
                class="form-control" id="inputunit" placeholder="Enter Unit"
           
              onChange={e => {
                const unit = e.target.value;
                setAttribute(currentAttribute =>
                  produce(currentAttribute, v => {
                    v[index].unit = unit;
                  })
                );
              }}
              value={p.unit}
              placeholder="unit name"
            /></div>
            </div>
            <div class="col-xs-1 col-sm-1 col-md-1" style={{"marginTop":"33px"}}>
                                    
         <button class="btn btn-primary list_add_button" type="button"
                                   
            
              onClick={() => {
                setAttribute(currentAttribute =>
                    currentAttribute.filter(x => x.id !== p.id)
                );
              }}
            >
              x
            </button>
            </div>
          </div>
          </div>
        );
      })}  
        
                           

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
        </React.Fragment>
    )
}

export default CreateSubcategory
