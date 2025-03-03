import { useEffect, useState } from "react";
import "../style/signup.css";

// Use of Hooks (useEffect(), useState(), useMemo(), useId(), useCallback())
// external css 
// 

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(16);
  const [age2, setAge2] = useState('');

  function increseAge(e){
    e.preventDefault();
    setAge(age + 1);
  }
  function decreaseAge(e){
    e.preventDefault();
    setAge(age - 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup clicked..!");
  }
useEffect(() => {
  console.log("age ", age);
}, [age])

  return (
          <>
                <div>Signup</div>
                <form>
                <h3 style={{color: age >= 18 ? 'green' : 'red'}}>you current age is {age} </h3>
                  {age >= 18 ? (
                    <div>
                        <input 
                          className="input-box" 
                          type="email" 
                          placeholder="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                          className="input-box" 
                          type="password" 
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                   ) : (
                        <div>
                          <h2>you are not 18, please increase your age..! </h2>
                        </div>
                     ) }
                  <button onClick={increseAge}>add age (+)</button> <button onClick={decreaseAge}>decrese age (-)</button>
                </form>

                <form>
                  <h2>Form 2 - take age from use..!</h2>
                     <input 
                     type="number"
                     placeholder="enter your age..!"
                     value={age2}
                     onChange={(e) => setAge2(e.target.value)}
                       />
                    {age2 >= 18 
                    ? 
                    (
                        <div>
                            <input 
                              className="input-box" 
                              type="email" 
                              placeholder="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                              className="input-box" 
                              type="password" 
                              placeholder="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)} 
                            />
                            <button onClick={handleSubmit}>Submit</button>
                            </div>
                        ) : (
                        <div>
                          <h2>you are not 18, please increase your age..! </h2>
                        </div>
                        )
                      }
                </form>
          </>
    
  )
}

export default Signup