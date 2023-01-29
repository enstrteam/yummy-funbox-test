import React from "react";
import Card from "./Card";
import Bottom from "./Bottom";

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.ListItem = this.ListItem.bind(this);
    this.ListItems = this.ListItems.bind(this);
  }

  render() {
    return (
      <section className="cats">
        <h1 className="page-title">Ты сегодня покормил кота?</h1>
        <div className="content-container">{this.ListItems()}</div>
      </section>
    );
  }

  ListItems() {
    const listItems = this.props.products.map((item) => this.ListItem(item));
    return <ul className="cards">{listItems}</ul>;
  }

  ListItem(item) {
    return (
      <li
        className={
          item.isAvailable
            ? item.isSelected
              ? "selected"
              : "card-default"
            : "disabled"
        }
      >
        <Card
          setSelected={this.props.setSelected}
          key={item.id}
          item={item}
          toggleHoverState={this.props.toggleHoverState}
        />
        <Bottom setSelected={this.props.setSelected} item={item} />
      </li>
    );
  }
}

export default Cats;
