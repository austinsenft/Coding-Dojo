import React, { useState } from 'react';
import Axios from 'axios';
import Input from '../components/Input';
import { Link, navigate } from '@reach/router';


const Login = props => {
    const { setLogged } = props;
    const initialState = {
        userName: "",
        userPassword: ""
    }
    const [log, setLog] = useState(initialState);
    const [errors, setErrors] = useState(initialState);


    const handleInputChange = (e) => {
        setLog({
            ...log,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/login", log, { withCredentials: true })
            .then(res => {
                setLogged(res.data.user);
                // console.log(res.data.user._id);
                // console.log("we're logged in");
                navigate(`/userpage/${res.data.user._id}`);
            })
            .catch(err => {
                console.log(err.response)
                console.log("you've hit an error!");
                setErrors(
                    {
                        userPassword: {
                            message: "Invalid Credentials"
                        },
                        userName: {
                            message: "Invalid Credentials"
                        }
                    }
                );
            })
    }


    return (

        <form id="box" onSubmit={handleSubmit} className="col-8 m-5 mx-auto bg-dark text-light p-4 rounded">

            <h2>Login</h2>
            <Input
                type="text"
                name="userName"
                label="User Name:"
                value={log.userName}
                placeholder="Ex: adion@codingdojo.com"
                handleChange={handleInputChange}
                error={errors.userName}
            />
            <Input
                type="password"
                name="userPassword"
                label="Password:"
                value={log.userPassword}
                handleChange={handleInputChange}
                error={errors.userPassword}
            />
            <Input
                type="submit"
                value="Login"
            />
            <br></br>

            <Link to="/new">Don't have an account?</Link>

        </form>
    );


}

export default Login;


// import React,{useState} from 'react';
// import Axios from 'axios';
// import UserLoginForm from '../components/UserLoginForm';
// import { navigate } from '@reach/router';
// import UserReg from './UserReg';
// import { Link, Router } from '@reach/router';


// const Login = props => {
//     // const initialUser = {
//     //     userName:"",
//     //     userPassword:"",
//     // }
//     // const initialErrors = {
//     //     userName:"",
//     //     userPassword:"",
//     // }
//     // const [user,setUser] = useState(initialUser)
//     // const [errors,setErrors] = useState(initialErrors);
//     // const handleInput = e => {
//     //     setUser({
//     //         ...user,
//     //         [e.target.name]:e.target.value
//     //     })
//     // }


//     return(
//         <div className="container vh-100" id="content">
//             <h2>Strap Up</h2>
//             <Link to="/new">Register</Link>
//             <UserLoginForm
//                 // inputs = {user}
//                 // errors={errors}
//                 // // handleInput={handleInput}
//                 // // handleSubmit={handleSubmit}
//                 // submitValue="Ship out"
//             />
//             <Router>
//                 <UserReg path="/new" />
//             </Router>
//         </div>
//     )
// }

// export default Login;