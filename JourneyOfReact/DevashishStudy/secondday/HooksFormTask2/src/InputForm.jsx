import Button from "./Button";
import { useState } from "react";

const InputForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((items) => ({ ...items, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          value={inputs.city || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
        <Button type="submit" />
      </form>
    </>
  );
};
export default InputForm;
