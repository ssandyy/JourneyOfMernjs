import { useState } from 'react'

const InputFields = () => {
    const [signup, setSignup] = useState({});

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(signup);
    }

    return(
         <>
             <input type="text" name="uname"  value={signup.name} onChange={(e) => setSignup(e.target.value)}  />
             <input type="text" name="password"  value={signup.name} onChange={(e) => setSignup(e.target.value)}  />
            <button onClick={handleSubmit}>Login</button>
        </>
    )
}
export default InputFields;