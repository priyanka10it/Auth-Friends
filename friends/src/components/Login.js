import React, {useState} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Login = (props) => {
    const [credentials, setCredentials] = useState({});

    const login = e => {
        e.preventDefault();
        console.log(credentials)
        axiosWithAuth()
        .post('/api/login', credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload);
                props.history.push('/FriendsList');
            })
    }

    const handleChange = e => {
        setCredentials( {
        ...credentials,
                [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <form onSubmit={login} >
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Username"
                /><br/>

                <input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Password"
                /><br/>
                <button>login</button>
            </form>
        </div>

    )
}

export default Login;