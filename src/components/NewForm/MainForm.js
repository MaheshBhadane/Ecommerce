import React, { useRef, useState } from "react";

import "./MainForm.css";

const MainForm = (props) => {
  const reactInputRef = useRef();
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [isValid, setIsValid] = useState(true);

  const [reactReff, setReactReff] = useState("React Test");

const reactTestHandler = (event) => {
  setReactReff(event.target.value);
}

  const imageChangehandler = (event) => {
    
            var fread= new FileReader()
            fread.readAsDataURL(event.target.files[0]);
      fread.onloadend = function(event){
          setEnteredImage(event.target.result);
      }
              
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
    event.target.reset();

    const itemData = {
      image: enteredImage,
      title: enteredTitle,
      desc: enteredDesc,
      price: enteredPrice,
      test: reactReff
    };
    if (enteredImage.trim().length === 0 || enteredTitle.trim().length ===0 || enteredDesc.trim().length ===0 || enteredPrice.trim().length ===0) {
      setIsValid(false);
      return alert("All fields are mendatory");
        
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
        background: !isValid ? 'salmon' : 'transparent'}} type="file" accept="image/*" onChange={imageChangehandler} />
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

          <div className="new-form__control">
            {/* <label>React Test</label> */}
            <input type="text" value={reactReff} onChange={reactTestHandler} ref={reactInputRef} disabled/>
          </div>
      </form>
      <br></br>
      <img src={enteredImage} alt="" width="100" height="100"/>
      <p>{enteredTitle}</p>
      <p>{enteredPrice}</p>
          </>
  );
};

export default MainForm;