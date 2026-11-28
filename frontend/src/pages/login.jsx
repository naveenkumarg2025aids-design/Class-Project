import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {

    //const [email, setEmail] = useState("")
    //const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const location = useLocation()
    const[logindata,setlogindata] = useState({
        username:"",
        password:""
    })
    const registerdata = location.state

    function handleChange(e){
        e.preventDefault();
        setlogindata({
            ...logindata,
            [e.target.name]:e.target.value
        })
    }

    const handlesubmit = (event) => {
        event.preventDefault()
        console.log("Register data",registerdata)
        if(logindata.username===registerdata.name && logindata.password===registerdata.password){
            console.log("Success")
            navigate("/dashboard",
            {
                state : logindata
            })
        }
        else{

            console.log("Invalid credencials")

        }
        
    }

    return (
        <div>
            <h1>Login Page</h1><br></br>

            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Enter username" name="username" onChange={handleChange}/>
                <br /><br />
                <input type="password" placeholder="Enter password" name="password" onChange={handleChange} />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login