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

  handleclick = item => {
    const newBasket = [...this.state.basket];
    const index = newBasket.indexOf(item);
    if (index < 0) {
      newBasket.push(item);
    }
    this.setState({ basket: newBasket });
  };

  render() {
    if (this.state.isLoading === true) {
      return <p>... En cours de chargement ...</p>;
    }

    return (
      <div>
        <div className="top-band">
          <div className="container">
            <img className="logo-top" src={logo} alt="deliveroo logo" />
          </div>
        </div>

        <div className="container">
          <Header restosMenu={this.state.restosMenu} />
        </div>

        <div className="menu-cards">
          <div className="container-main">
            <div className="container3">
              <Content
                restosMenu={this.state.restosMenu}
                onAdd={this.handleclick} //recupere la props de content
              />
              <div className="basket">
                <Basket basket={this.state.basket} />
              </div>
            </div>
          </div>
        </div>
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
