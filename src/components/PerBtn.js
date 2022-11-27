import { useState } from "react";
import btnStyle from "./PerBtn.module.css";

function PerBtn(props) {
  const handleClick = (e) => {
    props.setPercent((props.total * e.target.value) / 100);
  };

  return (
    <button
      value={props.value}
      className={btnStyle.btn}
      onClick={(e) => {
        handleClick(e);
        props.handleActiveClick(props.value);
      }}
      style={{
        backgroundColor: props.isActive === props.value ? "#9FE8DF" : "",
        Color: props.isActive === props.value ? "#00474B" : "",
      }}
    >
      {props.value}%
    </button>
  );
}

export default PerBtn;
