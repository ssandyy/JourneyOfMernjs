const InputField = ({ inputtype, inputplaceholder, fieldname }) => {
  return (
    <div>
      <input type={inputtype} placeholder={inputplaceholder} name={fieldname} />
    </div>
  );
};

export default InputField;
