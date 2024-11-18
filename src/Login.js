import { useEffect, useState } from "react";

function Login() {
    const [username , setUsername] = useState("") ;
    const [password , setPassword] = useState("") ;
    const [isLoggedIn , setIsLoggedIn] = useState(false) ;
    const [submitted , isSubmitted] = useState(false) ;

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
            isSubmitted(true) ;
        }else {
            setIsLoggedIn(false) ;
            isSubmitted(false) ;
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                <label style={{ display: 'block' }}>Username:
                    <input type="text" name="username" required onChange={handleUsername} />
                </label>
                <label style={{ display: 'block' }}>Password:
                    <input type="password" name="password" required onChange={handlePassword} />
                </label>
                <button type="submit">Submit</button>
                </form>
            ) : (
                isLoggedIn ? (
                <p>Welcome, user!</p>
                ) : (
                <form onSubmit={handleSubmit}>
                    <p>Invalid username or password</p>
                    <label style={{ display: 'block' }}>Username:
                    <input type="text" name="username" required onChange={handleUsername} />
                    </label>
                    <label style={{ display: 'block' }}>Password:
                    <input type="password" name="password" required onChange={handlePassword} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                )
            )
            }
        </div>
    )
}

export default Login ;