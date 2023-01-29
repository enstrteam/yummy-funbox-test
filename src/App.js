import React from "react";
import Main from "./components/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "1",
          name: "Нямушка",
          ingredient: "c фуа-гра",
          weight: "0,5",
          promo: ["10 порций", "мышь в подарок"],
          topText: "Сказочное заморское яство",
          topHoverText: "Котэ не одобряет?",
          bottomText: "Печень утки разварная с артишоками.",
          isSelected: false,
          isAvailable: true,
          isHovering: true,
        },
        {
          id: "2",
          name: "Нямушка",
          ingredient: "c рыбой",
          weight: "2",
          promo: ["40 порций", "2 мыши в подарок"],
          topText: "Сказочное заморское яство",
          topHoverText: "Котэ не одобряет?",
          bottomText: "Головы щучьи с чесноком да свежайшая сёмгушка.",
          isSelected: false,
          isAvailable: true,
          isHovering: true,
        },
        {
          id: "3",
          name: "Нямушка",
          ingredient: "c курой",
          weight: "5",
          promo: ["100 порций", "5 мышей в подарок"],
          topText: "Сказочное заморское яство",
          topHoverText: "Котэ не одобряет?",
          bottomText: "Филе из цыплят с трюфелями в бульоне.",
          isSelected: false,
          isAvailable: false,
          isHovering: true,
        },
      ],
    };

    this.setSelected = this.setSelected.bind(this);
    this.toggleHoverState = this.toggleHoverState.bind(this);
  }

  render() {
    return (
      <Main
        products={this.state.products}
        setSelected={this.setSelected}
        toggleHoverState={this.toggleHoverState}
      ></Main>
    );
  }

  toggleHoverState(item) {
    const itemstate = this.state.products[item.id - 1];
    itemstate.isHovering = !itemstate.isHovering;
    this.setState({ itemstate });
  }

  setSelected(item) {
    const itemstate = this.state.products[item.id - 1];
    if (itemstate.isAvailable) itemstate.isSelected = !itemstate.isSelected;
    this.setState({ itemstate });
    if (!itemstate.isHovering) this.toggleHoverState(item);
  }
}

export default App;
