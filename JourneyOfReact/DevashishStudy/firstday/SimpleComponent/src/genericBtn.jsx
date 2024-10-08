import { style1 } from "./btnCss";

const Btn = ({ name, css }) => {
    
  const style = {
    backgroundColor: `${css}`,
    border: style1.border,
  };

  return (
    <>
      <button id="breakButton" style={style}>
        {name}
      </button>
    </>
  );
};

export default Btn;
