import React from "react";
import Item from "./Item";

class Cats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="cats">
        <h1 className="page-title">Ты сегодня покормил кота?</h1>
        <div className="content-container">
          <ul className="cards">
            {this.props.products.map((item) => (
              <Item
                key={item.id}
                item={item}
                setSelected={this.props.setSelected}
                toggleHoverState={this.props.toggleHoverState}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Cats;
