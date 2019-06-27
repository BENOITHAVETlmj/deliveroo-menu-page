import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

const Meal = props => {
  const { menuContent, onAddItem } = props; // destructuring de props.menuContent
  // console.log(menuContent);

  const meal =
    menuContent &&
    menuContent.map(meal => {
      return (
        // Si il y a un menuContent, on map le menu pour trouver le meal "clické" par son Id
        <div
          className="all"
          key={meal.id}
          onClick={() => {
            // on passe en argument les 3 clés que l'on récupérer lors du click
            onAddItem(meal.id, meal.title, meal.price);
          }}
        >
          {/* key dans la div parente pour avoir accès a tous nos objets tous nos objets */}
          <div className="plate">
            <div className="title">{meal.title}</div>

            {meal.description ? (
              <LinesEllipsis
                className="description-elips"
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
