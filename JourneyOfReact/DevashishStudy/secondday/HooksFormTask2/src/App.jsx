import './App.css'
import Button from './Button'
import {useState} from 'react';
import InputFields from './InputFields'

function App() {
  const [data, setData] = useState({
    uname: '',
    age:'',
    password:''
});

  return (
    <>
      <h2>Sign-up</h2>
      <div>
        {/* <InputFields /> */}

            <input type="text" name="username"  value={data.uname} placeholder="Username"/>
            <input type="text" value={data.age}  placeholder="age"/>
            <input type="text" value={data.password}  placeholder="Password"/>
      </div>
      <div>
        <Button  />
      </div>
    </>
  )
}

export default App
