import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

const Meal = props => {
  const { menuContent } = props; // destructuring de props.menuContent

  const meal =
    menuContent &&
    menuContent.map(meal => {
      return (
        // deuxieme tour de boucle pour obtenir mes plats
        <div
          className="all"
          key={meal.id}
          onClick={() => {
            props.onAddItem(
              (meal = {
                quantity: 1,
                title: meal.title,
                price: Number(meal.price)
              })
              // on envoie un Nouvel objet meal avec ces trois propriétées
            );
          }}
        >
          {/* key dans la div parente pour avoir accès a tous nos objets tous nos objets */}
          <div className="plate">
            <div className="title">{meal.title}</div>

            {meal.description ? (
              <LinesEllipsis
                className="description"
                text={meal.description}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="words"
              >
                {meal.description}
              </LinesEllipsis>
            ) : (
              " "
            )}
            <div>
              <span className="price">{meal.price + "\u20AC"}</span>
              {meal.popular === true ? (
                <span className="popular">
                  <i className="fas fa-star " />
                  <span>Populaire</span>
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            {meal.picture ? (
              <img className="picture-plate" src={meal.picture} alt="plat" />
            ) : (
              ""
            )}
          </div>
        </div>
      );
    });
  return <div className="categories">{meal}</div>; // La classe est assignée ici avant d'être export dans Content
};

export default Meal;
