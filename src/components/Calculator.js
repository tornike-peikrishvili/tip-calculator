import Amount from "./Amount";
import Bill from "./Bill";
import calcStyle from "./Calculator.module.css";
import Reset from "./Reset";
import Percents from "./Percents";
import People from "./People";
import { useState } from "react";

function Calculator() {
  const [sum, setSum] = useState(0);
  const [peopleAmount, setPeopleAmount] = useState(1);
  const [percent, setPercent] = useState(0);
  let total = sum;
  const [valueIsClear, setValueIsClear] = useState(0);
  const [isZero, setIsZero] = useState();

  return (
    <div className={calcStyle.container}>
      <div className={calcStyle.left}>
        <Bill sum={sum} setSum={setSum} />
        <Percents
          setPercent={setPercent}
          percent={percent}
          total={total}
          setValueIsClear={setValueIsClear}
          valueIsClear={valueIsClear}
        />
        <People
          isZero={isZero}
          setIsZero={setIsZero}
          setPeopleAmount={setPeopleAmount}
          peopleAmount={peopleAmount}
        />
      </div>
      <div className={calcStyle.right}>
        <div className={calcStyle.rightContainer}>
          <div className={calcStyle.amountContainer}>
            <Amount amountTxt={"Tip Amount"} total={percent / peopleAmount} x />
            <Amount
              amountTxt={"Total"}
              total={percent / peopleAmount + sum / peopleAmount}
            />
          </div>
          <Reset
            setSum={setSum}
            percent={setPercent}
            peopleAmount={setPeopleAmount}
            setValueIsClear={setValueIsClear}
            setIsZero={setIsZero}
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
