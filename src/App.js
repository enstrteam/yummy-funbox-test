import React from "react";
import Main from "./components/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: true,
      products: [
        {
          id: "1",
          name: "Нямушка",
          ingredient: "c фуа-гра",
          weight: "0,5",
          promo: ["10 порций", "мышь в подарок"],
          bottomText: "Печень утки разварная с артишоками.",
          isSelected: false,
          isAvailable: true,
        },
        {
          id: "2",
          name: "Нямушка",
          ingredient: "c рыбой",
          weight: "2",
          promo: ["40 порций", "2 мыши в подарок"],
          bottomText: "Головы щучьи с чесноком да свежайшая сёмгушка.",
          isSelected: false,
          isAvailable: true,
        },
        {
          id: "3",
          name: "Нямушка",
          ingredient: "c курой",
          weight: "5",
          promo: ["100 порций", "5 мышей в подарок"],
          bottomText: "Филе из цыплят с трюфелями в бульоне.",
          isSelected: false,
          isAvailable: false,
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
        isHover={this.state.isHover}
      ></Main>
    );
  }

  toggleHoverState() {
    this.setState((state) => ({ isHover: !state.isHover }));
  }

  setSelected(item) {
    const itemstate = this.state.products[item.id - 1];
    if (itemstate.isAvailable) itemstate.isSelected = !itemstate.isSelected;
    this.setState({ itemstate });
    if (!this.state.isHover)
      this.toggleHoverState();
  }
}

export default App;
