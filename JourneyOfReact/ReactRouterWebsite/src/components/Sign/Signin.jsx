import React, { useState } from 'react';

const Signin = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [loggedInUser, setLoggedInUser] = useState(null);
  
    const handleChange = (e) =>
      setForm({ ...form, [e.target.name]: e.target.value });
  
    const handleSignup = async () => {
        try {
          const res = await fetch("http://localhost:8080/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });
          if (res.status === 409) {
            alert("Email already exists");
          } else if (res.ok) {
            alert("Signup successful!");
            setIsLogin(true);
            setForm({ name: "", email: "", password: "" });
          }
        } catch (err) {
          console.error(err);
          alert("Error during signup");
        }
      };
      
      const handleLogin = async () => {
        try {
          const res = await fetch("http://localhost:8080/api/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });
          if (res.ok) {
            const data = await res.json();
            setLoggedInUser(data.name);
          } else {
            alert("Invalid credentials");
          }
        } catch (err) {
          console.error(err);
          alert("Error during signin");
        }
      };

  
    const handleLogout = () => {
      setLoggedInUser(null);
      setForm({ name: '', email: '', password: '' });
    };
  
    if (loggedInUser) {
      return (
        <div className="container">
          <h2>Welcome, {loggedInUser}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    }
  
    return (
      <div className="container">
        <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
        {!isLogin && (
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button onClick={isLogin ? handleLogin : handleSignup}>
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
        <p>
          {isLogin ? 'New user?' : 'Already registered?'}{' '}
          <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Sign In'}
          </span>
        </p>
        {/* <div className="social-login">
        <p>Or sign up with:</p>
        <button className="github-btn">
          <FaGithub /> 
          Sign up with GitHub
        </button>
      </div> */}
      </div>
    );
}

export default Signin