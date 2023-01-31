import React from "react";
import Items from "./Items";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Items
          setSelected={this.props.setSelected}
          products={this.props.products}
          toggleHoverState={this.props.toggleHoverState}
          isHover={this.props.isHover}
        />
      </main>
    );
  }
}

export default Main;
