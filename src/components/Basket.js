import React from "react";

const Basket = props => {
  const { basket, handleDecrement, handleIncrement, handleTotal } = props;

  let fee = 2.9;
  return (
    <div className="button-main">
      {basket.length > 0 ? (
        <div className="button-main">
          <div>
            {" "}
            <button className="button-basket">valider mon panier</button>
          </div>

          <div className="full-basket">
            {basket.map((meal, index) => (
              <div className="order" key={index}>
                <div className="product-basket">
                  <i
                    className="fas fa-plus-circle"
                    onClick={() => handleIncrement(meal)}
                  />
                  <span>{meal.value}</span>
                  <i
                    className="fas fa-minus-circle"
                    onClick={() =>
                      meal.value > 0 ? handleDecrement(meal) : "none"
                    }
                  />
                  <div className="title-price">
                    <span>{meal.title}</span>
                    <span>{(meal.price * meal.value).toFixed(2)} € </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="subs">
            <div className="subtotal">
              <div>Sous-total</div>
              <div>{handleTotal().toFixed(2)} €</div>
            </div>
            <div className="delivery">
              <span>Frais de livraison</span>
              <span> {fee.toFixed(2)} €</span>
            </div>
            <div className="total">
              <span>Total :</span>
              <span>{(handleTotal() + fee).toFixed(2)}€ </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="button-main">
          <button className="button-basket">Valider mon panier</button>
          <div
            style={{
              textAlign: "center",
              margin: "10px 0px",
              padding: "30px",
              backgroundColor: "#f2f2f2"
            }}
          >
            Votre panier est vide
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
