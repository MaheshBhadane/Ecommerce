import React, { useState } from "react";

import "./MainForm.css";

const MainForm = () => {
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [isValid, setIsValid] = useState(true);


  const imageChangehandler = (event) => {
    setEnteredImage(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      return;
    }
  
    /*if(event.target.name==="img"){
            var fread= new FileReader()
            fread.readAsDataURL(event.target.files[0]);
      fread.onloadend = function(event){
          setEnteredImage(event.target.result);
      }
    }
          */
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  
  };

  const descChangeHandler = (event) => {
    setEnteredDesc(event.target.value);
  
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
   
  };

  const titleClearHandler = (event) => {
    setEnteredTitle("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {
      image: enteredImage,
      title: enteredTitle,
      desc: enteredDesc,
      price: enteredPrice,
    };
    if (enteredImage.trim().length === 0) {
      setIsValid(false);
      return;
    }
      console.log(itemData);
  };




  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-form__controls">

          <div className="new-form__control">
            <label style={{ color: !isValid ? "red" : "black" }}> Image </label>
            <input style={{borderColor: !isValid ? 'red' : 'black',
        background: !isValid ? 'salmon' : 'transparent'}} type="file" onChange={imageChangehandler} />
          </div>

          <div className="new-form__control">
            <label style={{ color: !isValid ? "red" : "black" }}>Title</label>
            <input style={{borderColor: !isValid ? 'red' : 'black',
        background: !isValid ? 'salmon' : 'transparent'}} type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-form__control">
            <label style={{ color: !isValid ? "red" : "black" }}>Description</label>
            <input type="text" onChange={descChangeHandler} />
          </div>

          <div className="new-form__control">
            <label style={{ color: !isValid ? "red" : "black" }}>Price</label>
            <input type="number" onChange={priceChangeHandler} />
          </div>

          <div className="new-form__control">
            <button type="submit">Add Item</button>
          </div>
          <div className="new-form__control">
            <button onClick={titleClearHandler}>Clear</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default MainForm;
