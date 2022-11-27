import resStyle from "./Reset.module.css";

function Reset(props) {
  const resetBtn = () => {
    props.setSum(0);
    props.peopleAmount(1);
    props.percent(0);
    props.setValueIsClear(0);
    props.setIsZero(1);
  };

  return (
    <button onClick={resetBtn} className={resStyle.resBtn}>
      RESET
    </button>
  );
}

export default Reset;
