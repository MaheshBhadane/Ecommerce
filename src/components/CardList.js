import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ products, addToCart, removeData }) => {
  return (
    <Fragment>
      {
        <div>
          <div className="card-list">
            {products.map((item) => {
              return (
                <Card
                  key={item.id}
                  data={item}
                  addToCart={addToCart}
                  removeData={removeData}
                />
              );
            })}
          </div>
        </div>
      }
    </Fragment>
  );
};

export default CardList;
