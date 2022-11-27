import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import amtStyle from "./Amount.module.css";

function Amount(props) {
  return (
    <div className={amtStyle.container}>
      <p className={amtStyle.text}>
        {props.amountTxt}
        <br />
        <a className={amtStyle.amount}>/ person</a>
      </p>
      <h3 className={amtStyle.sum}>${props.total.toFixed(2)}</h3>
    </div>
  );
}

export default Amount;
