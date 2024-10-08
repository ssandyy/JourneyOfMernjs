import AddTask from "./AddTask";
import "./App.css";
import BreakBtn from "./BreakBtn";
import Breaklist from "./Breaklist";
import EndBreak from "./EndBreak";
import ResetBtn from "./ResetBtn";
import StartBtn from "./Startbtn";
import Timer from "./Timer";
import Tasklist from "./Tasklist";
import Btn from "./genericBtn";

const startCss = "red";
const resetCss = "green";
const breakCss = "blue";

const App = () => {
  return (
    <>
      <div className="mainTimer">
        <h1>SuccessTimer</h1>
        <Timer />
      </div>
      <div className="buttonSection">
        <Btn name={"Start"} css={startCss} />
        <Btn name={"Reset"} css={resetCss} />
        <Btn name={"Break"} css={breakCss} />
        {/* <StartBtn />
        <ResetBtn />
        <BreakBtn /> */}
      </div>
      <div className="taskSection">
        <AddTask />
        <Tasklist />
      </div>
      <div className="breakSection">
        <Breaklist />
      </div>
    </>
  );
};

export default App;
