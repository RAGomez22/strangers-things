import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { loginUser } from "../components/API";

export default function Login({setToken}) {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()
    async function submitForm(e) {
        e.preventDefault()
        if (password.length < 8) {
            setErrorMessage("Password must be 8 Characters or More");
        } else {
            const token = await loginUser(username, password);
            setToken(token); 
            localStorage.setItem('token',token);
        }
        navigate('/')
    }
    return (
    <div>
        <h1>Stranger's Things Login</h1>
    <form onSubmit={submitForm}> 
        
        <fieldset>
            <label htmlFor="username">
                <input
                    id="username" 
                    name="textfield" 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => {
                        setErrorMessage('');
                        setUsername(e.target.value)
                    }}
                     // changes the state value and rerenders the form with the new values
                    required    
                />
            </label>
            <label htmlFor="password">
                <input
                    id="password" 
                    name="textfield" 
                    type="password" 
                    placeholder="Password"
                    value={password} 
                    onChange={(e) => {
                        setErrorMessage('');
                        setPassword(e.target.value)
                    }}
                    required
                />
            </label>
            <p>{errorMessage}</p>
            <button type="submit">Login</button>
            <fieldset>
                <label htmlFor="New-User"> 
                    Don't have an account? <a href="/register"> Sign Up</a>
                </label>
            </fieldset>
        </fieldset>
    </form>
  </div>
)
}