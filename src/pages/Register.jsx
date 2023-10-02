import { useState } from "react"
import { registerUser } from "../components/API";
import { useNavigate } from 'react-router-dom'

export default function Register({setToken}) {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    async function submitForm(e) {
        e.preventDefault()
        if (password.length < 8) {
            setErrorMessage("Password must be 8 Characters or More");
        } else {
            const token = await registerUser(username, password);
            setToken(token);
            localStorage.setItem('token',token);

        }
        navigate('/login')

    }
    return (
        <div>
             <h1>Stranger's Things Registraton</h1>
            <form method="post" onSubmit={submitForm} >
               
                <fieldset>
                    <label htmlFor="username"> 
                        <input 
                            id="username" 
                            name="textfield" 
                            type="text" 
                            placeholder="Username" 
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            required/>
                    </label>

                    <label htmlFor="password">
                        <input 
                            id="password" 
                            name="textfield" 
                            type="password" 
                            placeholder="Password"
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                            required/>
                        </label>
                        <p>{errorMessage}</p>
                        <button type="submit" >Register</button>
                </fieldset>
                <fieldset>
                    <label htmlFor="New-User"> 
                        Already have an account? <a href="/login"> Log In</a>
                    </label>
                </fieldset>
            </form>
        </div>
    )
}