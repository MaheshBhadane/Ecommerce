import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../FilterList/products.json";
import "./MainForm.css";

const MainForm = () => {
  const reactInputRef = useRef("React Test");
  const input = useParams();

  const [enteredImage, setEnteredImage] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [isValid, setIsValid] = useState(true);

  const [value, setValue] = useState();

  useEffect(() => {
    setValue(
      //String(new URLSearchParams(new URL(window.location.href).search).get("q"))
      input.email
    );
  }, [input.email]);
  //  [input.email]

  const imageChangehandler = (event) => {
    var fread = new FileReader();
    fread.readAsDataURL(event.target.files[0]);
    fread.onloadend = function (event) {
      setEnteredImage(event.target.result);
    };
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

    products.push({
      url: enteredImage,
      title: enteredTitle,
      desc: enteredDesc,
      price: enteredPrice,
    });

    // console.log(reactInputRef);
    if (input.email === undefined) {
      reactInputRef.current.value = "React Test";
    } else {
      reactInputRef.current.value = input.email;
    }
    alert("New Item Added..!!");

    if (
      enteredImage.trim().length === 0 ||
      enteredTitle.trim().length === 0 ||
      enteredDesc.trim().length === 0 ||
      enteredPrice.trim().length === 0
    ) {
      setIsValid(false);
      return alert("All fields are mendatory");
    }

    // console.log(reactInputRef.current.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-form__controls">
          <div className="new-form__control">
            <label style={{ color: !isValid ? "red" : "black" }}> Image </label>
            <input
              style={{
                borderColor: !isValid ? "red" : "black",
                background: !isValid ? "salmon" : "transparent",
              }}
              type="file"
              accept="image/*"
              onChange={imageChangehandler}
            />
          </div>

          <div className="new-form__control">
            <label style={{ color: !isValid ? "red" : "black" }}>Title</label>
            <input
              style={{
                borderColor: !isValid ? "red" : "black",
                background: !isValid ? "salmon" : "transparent",
              }}
              type="text"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-form__control">
            <label style={{ color: !isValid ? "red" : "black" }}>
              Description
            </label>
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
          <input type="text" value={value} ref={reactInputRef} disabled />
        </div>
      </form>
      <div>
        <br></br>
        <img src={enteredImage} alt="" width="100" height="100" />
        <p>{enteredTitle}</p>
        <p>{enteredPrice}</p>
      </div>
    </>
  );
};

export default MainForm;
