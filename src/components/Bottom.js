import React from "react";

const BottomText = (props) => {
  const defaulBottomText = "Чего сидишь? Порадуй котэ, ";
  const disabledBottomText = `Печалька, ${props.item.ingredient}  закончился.`;

  if (!props.item.isAvailable)
    return <p className="bottom-text disabled">{disabledBottomText}</p>;
  else if (!props.item.isSelected)
    return (
      <p className="bottom-text">
        {defaulBottomText}
        <a href="##" onClick={(state) => props.setSelected(props.item)}>
          купи.
        </a>
      </p>
    );
  else return <p className="bottom-text">{props.item.bottomText}</p>;
};

export default BottomText;
