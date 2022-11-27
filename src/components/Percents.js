import perStyle from "./Percents.module.css";
import PerBtn from "./PerBtn";
import { useState } from "react";

function Percents(props) {
  let percentValues = [5, 10, 15, 25, 50];
  const handleClick = (e) => {
    props.setPercent((props.total * e.target.value) / 100);
    handleClearValue(e);
  };
  const [isActive, setIsActive] = useState(false);
  const handleActiveClick = (number) => {
    if (isActive === number) {
      setIsActive(null);
    } else {
      setIsActive(number);
    }
  };
  const handleInputValue = (clearValue) => {
    clearValue.target.value = null;
  };

  const handleClearValue = (e) => {
    props.setValueIsClear(e.target.value);
  };

  return (
    <div className={perStyle.container}>
      <p className={perStyle.txt}>Select Tip %</p>
      <div className={perStyle.btnContainer}>
        {percentValues.map((item) => (
          <PerBtn
            value={item}
            isActive={isActive}
            handleActiveClick={handleActiveClick}
            total={props.total}
            setPercent={props.setPercent}
            handleInputValue={handleInputValue}
          />
        ))}
        <input
          onChange={(e) => {
            handleClick(e);
          }}
          onClick={(number) => {
            handleInputValue(number);
            setIsActive(null);
          }}
          value={props.valueIsClear}
          type="number"
          placeholder="Custom"
          className={perStyle.perInput}
        ></input>
      </div>
    </div>
  );
}

export default Percents;
