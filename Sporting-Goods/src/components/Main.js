import { Component } from "react";
import axios from "axios";
import Display from "./Display";
import Cart from "./Cart";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      cart: [],
      total: 0,
    };
  }

  componentDidMount() {
    this.getItems();
    this.getCart();
  }

  getItems = () => {
    axios
      .get("/api/items")
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  getCart = () => {
    axios
      .get("/api/cart")
      .then((res) => {
        this.setState(
          {
            cart: res.data,
          },
          this.updateTotal
        );
      })
      .catch((err) => console.log(err));
  };

  addItems = (item) => {
    axios
      .post("/api/items", item)
      .then((res) => {
        this.setState(
          {
            cart: res.data,
          },
          this.updateTotal
        );
      })
      .catch((err) => console.log(err));
  };

  deleteItems = (cartItem) => {
    axios
      .delete(`/api/items/${cartItem.id}`)
      .then((res) => {
        this.setState(
          {
            cart: res.data,
          },
          this.updateTotal
        );
      })
      .catch((err) => console.log(err));
  };

  updateItems = (cartItem, quanityToChange) => {
    axios
      .put(`/api/items/${cartItem.cartId}`, { quanityToChange })
      .then((res) => {
        this.setState(
          {
            cart: res.data,
          },
          this.updateTotal
        );
      })
      .catch((err) => console.log(err));
  };

  updateTotal = () => {
    const newTotal = this.state.cart.reduce((acc, element, index) => {
      return (acc += (element.price) * (element.quanity));
    }, 0);
    this.setState({
      total: newTotal,
    });
  };

  render() {
    return (
      <div className="main">
        <Display addItems={this.addItems} itemsArr={this.state.items} />
        <Cart
          cart={this.state.cart}
          deleteItems={this.deleteItems}
          updateItems={this.updateItems}
          total={this.state.total}
        />
      </div>
    );
  }
}

export default Main;
