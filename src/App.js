import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Content from "./components/Content";
import logo from "./images/logo-deliveroo.svg";
import Basket from "./components/Basket";

class App extends React.Component {
  state = {
    restosMenu: null,
    isLoading: true,
    basket: []
  };

  handleClick = (id, title, price) => {
    //Recuperation de mon evenement onClick on item (meal dans Meal), on cherche dans une copie du tableau par son index
    const basket = [...this.state.basket];

    const index = basket.findIndex(item => item.id === id);
    if (index === -1) {
      // si le meal (item) n'existe pas dans le tableau basket on lui envoi l'objet avec ces caractéristiques
      const newMeal = {
        id: id,
        value: 1,
        title: title,
        price: price
      };
      basket.unshift(newMeal);
      // on ajoute alors a la fin du tableau le nouvel objet ( nouveau meal)
    } else {
      basket[index].value++;
      // Sinon on incrémente le counter de value de 1;
    }
    this.setState({ basket: basket });
    console.log("remonté", basket);

    // on setState la valeur de basket par le nouveau tableau comprenant les valeurs inclusent dans le tableau d'origine sans le modifier directement
  };
  handleIncrement = counter => {
    const basket = [...this.state.basket];
    const index = basket.indexOf(counter);
    basket[index] = { ...counter };
    basket[index].value++;
    this.setState({ basket: basket });
  };

  handleDecrement = counter => {
    const basket = [...this.state.basket];
    const index = basket.indexOf(counter);
    basket[index] = { ...counter };
    basket[index].value--;
    if (basket[index].value === 0) {
      const removeItem = this.state.basket.filter(x => x.id !== counter.id);
      //Filtrer les id pour garder que les elements d'id different
      this.setState({ basket: removeItem });
    } else {
      this.setState({ basket: basket });
    }
  };
  handleTotal = () => {
    let total = 0;
    for (let i = 0; i < this.state.basket.length; i++) {
      total += this.state.basket[i].value * this.state.basket[i].price;
    }
    return total;
  };

  render() {
    if (this.state.isLoading === true) {
      return <p>... En cours de chargement ...</p>;
    }

    return (
      <div className="container">
        <section className="top-band">
          <div className="container">
            <img className="logo-top" src={logo} alt="deliveroo logo" />
          </div>
        </section>

        <section className="header">
          <Header restosMenu={this.state.restosMenu} />
        </section>

        <section className="menu-cards">
          <div className="container-main">
            <div className="container3">
              <Content
                {...this.props}
                {...this.state}
                onAdd={this.handleClick}
                handleIncrement={this.handleIncrement}
              />
              <div className="basket">
                <Basket
                  {...this.state}
                  {...this.props}
                  handleDecrement={this.handleDecrement}
                  handleIncrement={this.handleIncrement}
                  handleTotal={this.handleTotal}
                  onAdd={this.handleClick}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  async componentDidMount() {
    await axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({ restosMenu: response.data, isLoading: false }); // on setState restosMenu avec le retour de la réponse de la data
    });
  }
}

export default App;
