import React from "react";
import Meal from "./Meal";

const Content = props => {
  const categories = Object.keys(props.restosMenu.menu);

  const nonEmptyMenuKeys = categories.filter(category => {
    // nonEmptyMenuKeys renverra les "props.restosMenu.menu"  firltrées des category vides
    const menuContent = props.restosMenu.menu[category];
    if (menuContent.length === 0) {
      return false;
    }
    return true;
  });

  const elems = nonEmptyMenuKeys.map((category, index) => {
    // premier tour de boucle pour obtenir les category brunch petit déjeuner etc...
    const menuContent = props.restosMenu.menu[category];

    //deuxieme tour de boucle pour creer les elements title, description, price et picture
    return (
      // On met la valeur index en key dans la div parente pour obtenrir une key unique de nos éléments
      <div key={index}>
        <div>
          {/* return de chaque élément */}
          <h2>{category}</h2>
          <Meal menuContent={menuContent} onAddItem={props.onAdd} />
          {/* recupere la props de Meal */}
        </div>
      </div>
    );
  });

  return <div>{elems}</div>; // on doit retourner un element nommé ici elems suite au map, ce sera la props qui sera renvoyée dans app
};

export default Content;
