import React, { useState } from "react";
import UserConsumer from "../context";
import products from "../product";

console.log(products.product);
export default function ProductList() {
  return (
    <UserConsumer>
      {({ gender }) => {
        return (
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {products.product
              ?.filter((i) =>
                gender === "m"
                  ? i.gender === "male"
                  : gender === "w"
                  ? i.gender === "female"
                  : gender === "k"
                  ? i.gender === "kids"
                  : " "
              )
              ?.map((element) => (
                <div className="col" key={element.id}>
                  <div className="card">
                    <img
                      src={element.image[0]}
                      className="card-img-top"
                      alt={element.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{element.title}</h5>
                      <p className="card-text">
                        {element.description.slice(0, 100)}
                      </p>
                      <p>{element.price.prc}</p>
                      {/* <button className="btn btn-warning" id={element.barcode} onClick={this.props.openCart}>Sepete Ekle</button> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        );
      }}
    </UserConsumer>
  );
}
