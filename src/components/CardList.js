import React, { useContext,Fragment } from "react";
import Card from "./Card";
import { ProductContext } from "../context/ProductContext";

const CardList = () => {
  const {products} = useContext(ProductContext)

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
