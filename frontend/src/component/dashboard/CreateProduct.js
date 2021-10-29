import React, { useState } from 'react';
import axios from 'axios';

function CreateProduct() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [qty, setQty] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [discount, setDiscount] = useState("");
    const [seller, setSeller] = useState("");
    const [brand_name, setBrand_name] = useState("");
    const [delivery_charge, setDelivery_charge] = useState("");
    const [attribute, setAttribute] = useState("");
    const [voucher, setVoucher] = useState("");
    

    function setValue(e){
        e.target.name==="Title" && setTitle(e.target.value);
        e.target.name==="Price" && setPrice(e.target.value);
        e.target.name==="Image" && setImage(e.target.value);
        e.target.name==="Qty" && setQty(e.target.value);
        e.target.name==="Description" && setDescription(e.target.value);
        e.target.name==="Rating" && setRating(e.target.value);
        e.target.name==="Discount" && setDiscount(e.target.value);
        e.target.name==="Seller" && setSeller(e.target.value);
        e.target.name==="Brand_name" && setBrand_name(e.target.value);
        e.target.name==="Delivery_charge" && setDelivery_charge(e.target.value);
        e.target.name==="Attribute" && setAttribute(e.target.value);
        e.target.name==="Voucher" && setVoucher(e.target.value);
    }

    function sendDataProduct(){
        var p = {
            title , price , image, qty, description ,rating, discount, seller, brand_name, delivery_charge, attribute, voucher
        }
        console.log(p);
        axios.post('http://localhost:3000/product/create', p).then(
                   (res)=>{
                        console.log(res.data);
                        alert(res.data.data);
            })
    }

    return (
        <React.Fragment>
            <div class="container-fluid">
            <section class="simple-validation">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Create Product</h4>
        </div>
        <div class="card-body">
          <form id="jquery-val-form" method="post" novalidate="novalidate">
            {/* <div class="form-group">
              <label class="form-label">Title</label>
              <input type="text" class="form-control" id="inputtitle" name="Title" value={title} onChange={(e)=>{setValue(e);}} placeholder="Enter Title"/>
            </div> */}
            <div class="form-group">
              <label class="form-label">Title</label>
              <input type="text" id="inputtitle" name="Title" value={title} onChange={(e)=>{setValue(e);}} class="form-control" placeholder="Enter Title"/>
            </div>
            <div class="form-group">
              <label class="form-label">Price</label>
              <input type="text" id="inputprice" name="Price" value={price} onChange={(e)=>{setValue(e);}} class="form-control" placeholder="Enter Price"/>
            </div>
            <div class="form-group">
              <label>Image</label>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputimage" name="Image" value={image} onChange={(e)=>{setValue(e);}}/>
                <label class="custom-file-label" >Choose Image</label>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Qty</label>
              <input type="text" id="inputqty" name="Qty" value={qty} onChange={(e)=>{setValue(e);}} class="form-control" placeholder="Enter Qty"/>
            </div>
            <div class="form-group">
              <label class="form-label">Description</label>
              <input type="text" id="inputdescription" name="Description" value={description} onChange={(e)=>{setValue(e);}} class="form-control" placeholder="enter description"/>
            </div>
            <div class="form-group">
              <label class="form-label">Rating</label>
              <input type="text" id="inputrating" name="Rating" value={rating} onChange={(e)=>{setValue(e);}} class="form-control" placeholder="Enter Rating"/>
            </div>
            <div class="form-group">
              <label class="form-label">Discount</label>
              <input type="text" id="inputdiscount" name="Discount" value={discount} onChange={(e)=>{setValue(e);}} class="form-control" placeholder="Enter Discount"/>
            </div>
            <div class="form-group">
              <label class="form-label">Seller</label>
              <input type="text" id="inputseller" name="Seller" value={seller} onChange={(e)=>{setValue(e);}} class="form-control" placeholder="Enter Seller"/>
            </div>
            <div class="form-group">
              <label class="form-label">Brand Name</label>
              <input type="text" id="inputbrandname" name="Brand_name" value={brand_name} onChange={(e)=>{setValue(e);}} class="form-control" placeholder="Enter Brand_name"/>
            </div>
            <div class="form-group">
              <label class="form-label">Delivery Charge</label>
              <input type="text" id="inputdeliverycharge" name="Delivery_charge" value={delivery_charge} onChange={(e)=>{setValue(e);}} class="form-control" placeholder="Enter Delivery Charge"/>
            </div>
            <div class="form-group">
              <label class="form-label">Attribute</label>
              <input type="text" id="inputattribute" name="Attribute" value={attribute} onChange={(e)=>{setValue(e);}} class="form-control" placeholder="Enter Attribute"/>
            </div>
            <div class="form-group">
              <label class="form-label">Voucher</label>
              <input type="text" id="inputVoucher" name="Voucher" value={voucher} onChange={(e)=>{setValue(e);}} class="form-control" placeholder="Enter Voucher"/>
            </div>

           

            <div class="row">
              <div class="col-12">
                <button type="button" class="btn btn-primary" onClick={sendDataProduct}>Submit</button>
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

export default CreateProduct
