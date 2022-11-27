import peopleStyle from "./People.module.css";
import personIcon from "../images/icon-person.svg";
import { useState } from "react";

function People(props) {
  const handlePeopleChange = (e) => {
    props.setPeopleAmount(e.target.value);
    handleIsZero(e);
  };
  const handleInputValue = (clearValue) => {
    clearValue.target.value = null;
  };

  // const [isZero, setIsZero] = useState();
  const handleIsZero = (e) => {
    props.setIsZero(e.target.value);
  };

  return (
    <div className={peopleStyle.container}>
      <div className={peopleStyle.txtContainer}>
        <p className={peopleStyle.txt}>Number of People</p>
        <p
          className={peopleStyle.errorTxt}
          style={{
            color: props.isZero == 0 ? "red" : "",
          }}
        >
          Can't be zero
        </p>
      </div>
      <img className={peopleStyle.icon} src={personIcon} />
      <input
        value={props.peopleAmount}
        type="number"
        placeholder="1"
        className={peopleStyle.peopleInput}
        onChange={handlePeopleChange}
        onClick={handleInputValue}
        style={{
          outlineColor: props.isZero == 0 ? "red" : "",
        }}
      ></input>
    </div>
  );
}

export default People;
