import React from "react";

const BottomText = (props) => {
  const defaulBottomText = "Чего сидишь? Порадуй котэ, ";
  const disabledBottomText = `Печалька, ${props.item.ingredient}  закончился.`;

  if (!props.item.isAvailable)
    return <p class="bottom-text disabled">{disabledBottomText}</p>;
  else if (!props.item.isSelected)
    return (
      <p class="bottom-text">
        {defaulBottomText}
        <a href="##" onClick={(state) => props.setSelected(props.item)}>
          купи.
        </a>
      </p>
    );
  else return <p class="bottom-text">{props.item.bottomText}</p>;
};

export default BottomText;
