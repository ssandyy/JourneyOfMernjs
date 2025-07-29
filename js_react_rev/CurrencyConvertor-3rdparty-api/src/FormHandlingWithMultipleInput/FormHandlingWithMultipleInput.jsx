import { useState } from "react"

const FormHandlingWithMultipleInput = () => {
    // const [username, setUsername] = useState()
    // const [email, setEmail] = useState()
    // const [age, setAge] = useState()
    // const [password, setPassword] = useState()


    const [formData, setFormData] = useState({
        username:"",
        email:"",
        age:"",
        pass:""
    })

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    }

  return (
    <>
     <div><h3 >Signup Form </h3> </div>

        <form onSubmit={onSubmitHandler}>
            <div className="grid text-center">
            Name: <input type="text"  value={formData.username} name="username" onChange={onChangeHandler} placeholder="Username" />
            Email: <input type="email"value={formData.email}  name="email"  onChange={onChangeHandler} placeholder="email" />
            Age: <input type="number" min={1} max={150} value={formData.age} name="age"  onChange={onChangeHandler} placeholder="age" />
            Password: <input type="password"  value={formData.pass} name="pass" onChange={onChangeHandler} placeholder="password" />
            <button type="submit">Submit</button>
            </div>
                
        </form>

    </>
  )
}

export default FormHandlingWithMultipleInput