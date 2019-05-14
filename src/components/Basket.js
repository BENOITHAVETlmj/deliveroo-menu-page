import React from "react";

const Basket = props => {
  const { basket } = props;
  return (
    <div className="button-main">
      <button className="button-basket">valider mon panier</button>
      {basket.map((meal, index) => {
        return (
          <div className="order" key={index}>
            <i className="fas fa-plus-circle" />
            <span>{meal.quantity}</span>
            <i className="fas fa-minus-circle" />
            <span className="title-product-basket">{meal.title}</span>
            <span>{meal.price + "\u20AC"} </span>
          </div>
        );
      })}
    </div>
  );
};
export default Basket;
