import billStyle from "./Bill.module.css";
import dollarIcon from "../images/icon-dollar.svg";

function Bill(props) {
  const handleSumChange = (e) => {
    props.setSum(e.target.value);
  };

  const handleInputValue = (clearValue) => {
    clearValue.target.value = null;
  };

  return (
    <div className={billStyle.container}>
      <p className={billStyle.txt}>Bill</p>
      <img className={billStyle.icon} src={dollarIcon} />
      <input
        value={props.sum}
        type="number"
        placeholder="0"
        className={billStyle.billInput}
        onChange={handleSumChange}
        onClick={handleInputValue}
      ></input>
    </div>
  );
}

export default Bill;
