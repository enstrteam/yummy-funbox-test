import React, { Component } from "react";
import Card from "./Card";
import Bottom from "./Bottom"

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li
        className={
          this.props.item.isAvailable
            ? this.props.item.isSelected
              ? "selected"
              : "card-default"
            : "disabled"
        }
      >
        <Card
          setSelected={this.props.setSelected}
          key={this.props.item.id}
          item={this.props.item}
          toggleHoverState={this.props.toggleHoverState}
        />
        <Bottom setSelected={this.props.setSelected} item={this.props.item} />
      </li>
    );
  }
}

export default Item