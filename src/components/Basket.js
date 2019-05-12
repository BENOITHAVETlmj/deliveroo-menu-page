import React from "react";

const Basket = props => {
  const { basket } = props;
  return (
    <div className="button-main">
      <button className="button-basket">valider mon panier</button>
      {basket.map((meal, index) => {
        return (
          <div key={index}>
            <span>{meal.quantity}</span>
            <span>{meal.title}</span>
            <span>{meal.quantity}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Basket;
