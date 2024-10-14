import './App.css'
import Button from './Button'
import {useState} from 'react';
import InputForm from './InputForm';
import InputFields from './InputFields';


function App() {

  return (
    <>
      <h2>Sign-up</h2>
      <div>
        <InputForm />
      </div>
      <div>
        <InputFields />
      </div>
      </>
  )
}
//   const [data, setData] = useState({
//     uname: '',
//     age:'',
//     password:''
// });

// const displayData = () => {
//   console.log(data); // Display or handle the data when the button is clicked
// };

  // return (
  //   <>
    
  //     <h2>Sign-up</h2>
  //     <div>
  //       <InputForm />
  //     </div>

  //     <input type="text" name="username" onChange={(e) => setData(e.target.value)} value={data.uname} placeholder="Username"/>
  //           <input type="text" name="age" value={data.age} onChange={(e) => setData(e.target.value)} placeholder="age"/>
  //           <input type="text" name="password" value={data.password} onChange={(e) => setData(e.target.value)}  placeholder="Password"/>
  //     <div>
  //       <Button displayData={displayData}  />
  //     </div>
  //   </>
  // )
// }

export default App
