import { useEffect, useState } from "react";

function Login() {
    const [username , setUsername] = useState(null) ;
    const [password , setPassword] = useState(null) ;
    const [isLoggedIn , setIsLoggedIn] = useState(false) ;
    const [isSubmitted , setSubmitted] = useState(false) ;

    var correctUsername = "user" ;
    var correctPassword = "password" ;

    const handleUsername = (event) => {
        setUsername(event.target.value) ;
    }

    const handlePassword = (event) => {
        setPassword(event.target.value) ;
    }

    const handleSubmit = (event) => {
        event.preventDefault() ;
        if(username === correctUsername && password === correctPassword) {
            setIsLoggedIn(true) ;
            setSubmitted(true) ;
        }else {
            setIsLoggedIn(true) ;
            setSubmitted(false) ;
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            {!isLoggedIn ? (
                <form onSubmit={handleSubmit}>
                <label htmlFor="username" style={{ display: 'block' }}>Username:</label>
                <input type="text" id="username" name="username" value={username} required onChange={handleUsername} />
                <label htmlFor="password" style={{ display: 'block' }}>Password:</label>
                <input type="password" id="password" name="password" value={password} required onChange={handlePassword} />
                <button type="submit">Submit</button>
                </form>
            ) : (
                isSubmitted ? (
                <p>Welcome, user!</p>
                ) : (
                <form onSubmit={handleSubmit}>
                    <p>Invalid username or password</p>
                    <label htmlFor="username" style={{ display: 'block' }}>Username:</label>
                    <input type="text" id="username" name="username" value={username} required onChange={handleUsername} />
                    <label htmlFor="password" style={{ display: 'block' }}>Password:</label>
                    <input type="password" id="password" name="password" value={password} required onChange={handlePassword} />
                    <button type="submit">Submit</button>
                </form>
                )
            )
            }
        </div>
    )
}

export default Login ;