import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handlesubmit = (event) => {
        event.preventDefault()

        console.log(email, password)

        navigate('/project')
    }

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={handlesubmit}>

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <br /><br />

                <button type="submit">Login</button>

            </form>
            
            <Link to= "/settings">Go to settings</Link>
            <Link to= "/clients">Go to clients</Link>
            <Link to= "/calender">Go to calender</Link>
            <Link to= "/task">Go to Tasks</Link>
            <Link to= "/team">Go to Team</Link>
           
        </div>
    )
}

export default Login