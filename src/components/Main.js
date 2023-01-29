import React from "react";
import Cats from "./Cats";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Cats
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
