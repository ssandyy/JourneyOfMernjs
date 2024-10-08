import "./App.css";
import Btn from "./Btn";
import InputField from "./Inputfield";

const successBtn = {
  backgroundColor: "green",
  border: "4px solid grey",
};
const resetBtn = {
  backgroundColor: "red",
  border: "4px solid grey",
};

const data = [
  { type: "text", placeholder: "Enter you name", fileName: "DEVASHIHS" },
  {
    type: "email",
    placeholder: "Enter you email",
    fileName: "devashihs@gmail.com",
  },
  { type: "number", placeholder: "Enter you age", fileName: 29 },
  { type: "password", placeholder: "Enter you password", fileName: "123456" },
];

const App = () => {
  return (
    <>
      <div id="signup" className="col-6">
        <h3>Signup</h3>
        {/* <InputField inputtype ={"text"} inputplaceholder={"Enter you name"} fieldname={"name"} />
      <InputField inputtype ={"text"} inputplaceholder={"Enter you name"} fieldname={"name"} />
      <InputField inputtype ={"text"} inputplaceholder={"Enter you name"} fieldname={"name"} />
      <InputField inputtype ={"text"} inputplaceholder={"Enter you name"} fieldname={"name"} /> */}
        {data.map((item, index) => {
          return (
            <InputField
              // key={item.type}
              key={index}
              inputtype={item.type}
              inputplaceholder={item.placeholder}
              fieldname={item.name}
            />
          );
        })}
        <div>
          <Btn
            name={"Submit"}
            btnId={"successbtn"}
            btnStyle={successBtn}
            btnType={"submit"}
          />
          <Btn
            name={"Reset"}
            btnId={"resetbtn"}
            btnStyle={resetBtn}
            btnType={"reset"}
          />
        </div>
      </div>
      <div id="login" className="col-6">
        <h3>Login</h3>
        <InputField
          inputtype={"text"}
          inputplaceholder={"Enter you name"}
          fieldname={"username"}
        />
        <InputField
          inputtype={"password"}
          inputplaceholder={"Enter you password"}
          fieldname={"password"}
        />
        <div>
          <Btn
            name={"login"}
            btnId={"loginbtn"}
            btnStyle={successBtn}
            btnType={"submit"}
          />
          <Btn
            name={"Reset"}
            btnId={"resetbtn"}
            btnStyle={resetBtn}
            btnType={"reset"}
          />
        </div>
      </div>
    </>
  );
};

export default App;
