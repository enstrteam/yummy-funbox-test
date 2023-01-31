import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.PromoList = this.PromoList.bind(this);
    this.TopTextSelect = this.TopTextSelect.bind(this);
  }

  render() {
    return (
      <div
        className={`card ${!this.props.item.isHovering && "hover"}`}
        onClick={(state) => {
          this.props.setSelected(this.props.item);
        }}
        onMouseEnter={() => {
          this.props.toggleHoverState(this.props.item);
        }}
        onMouseLeave={() => {
          if (!this.props.item.isHovering)
            this.props.toggleHoverState(this.props.item);
        }}
      >
        <div className="text-wrapper">
          {this.TopTextSelect()}
          <h2 className="food-name">{this.props.item.name}</h2>
          <span className="ingredients">{this.props.item.ingredient}</span>
          {this.PromoList()}
          <div className="oval">
            <span className="weight">{this.props.item.weight}</span>
          </div>
        </div>
      </div>
    );
  }

  PromoList() {
    const promolist = this.props.item.promo.map((el) => <li>{el}</li>);
    return <ul className="promo">{promolist}</ul>;
  }

  TopTextSelect() {
    if (!this.props.item.isHovering && this.props.item.isSelected)
      return <span className="top-text hover">{this.props.item.topHoverText}</span>;
    else return <span className="top-text">{this.props.item.topText}</span>;
  }
}

export default Card;
