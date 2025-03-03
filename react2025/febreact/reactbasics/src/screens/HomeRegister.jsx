// create new screen/component + form
// handled on click + conditional rendering functionality

import { Link } from "react-router-dom";

const HomeRegister = () => {

    const handleHomeRegister = (event) => {
        event.preventDefault();   // do not reload the screen on form submit
        console.log('Register button clicked');
    }

    let age = 18;

  return (
    <div>
        <h1>Home Register</h1>
        <p>Welcome to the Home Register page. Here you can register yourself.</p>

        <form>
            {/* Conditional rendering */}
            {age >=18 ? 
                <div>
                    <h2>Register Form</h2>
                    <input type="text" placeholder='username' />
                    <input type="password" placeholder='password' />
                    <button onClick={handleHomeRegister}>Submit</button>
                    <button type="reset">Reset</button>
                </div> 
                 : 
                 <h2>You are not eligible to register</h2>
            }
        </form>
        <Link to="/users" >Take me too UserList</Link><br />
        <Link to="/contact" >Take me too Contact</Link><br />
        <Link to="/about" >Take me too About</Link><br />
        <Link to="/schools" >Take me too Schools</Link><br />
        <Link to="/signup" >Take me too Signup</Link><br />
    </div>
  )
}

export default HomeRegister;