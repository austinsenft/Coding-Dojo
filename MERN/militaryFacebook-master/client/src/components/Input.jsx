import React from 'react';

const Input = props => {
    const { type, name, label, value, placeholder, handleChange, error} = props;

    
    return (
        <>
            {
                type !== "submit" ?
                <div className="form-group">
                    <label>{label}</label><br></br>
                    <input
                        className="form-control"
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => handleChange(e)}
                    /><br></br>
                    <span className="text-danger">{ error ? error.message : "" }</span><br></br> 
                </div>: 
                    
                        <input 
                                type="submit" 
                                value={value} 
                                className="btn btn-primary"
                                
                        />
            }
        </>
    )
}

export default Input;




// import React, { useState } from "react";
// import axios from "axios";
// import { navigate } from "@reach/router";

// const Login = ({ setLoggedIn }) => {
//     const [user, setUser] = useState("");
//     const [password, setPassword] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");

//     const login = (event) => {
//         event.preventDefault();
//         axios
//             .post(
//                 "http://localhost:8000/api/login",
//                 { user, password },
//                 {
//                     withCredentials: true,
//                 }
//             )
//             .then((res) => {
//                 console.log("IT WORKED!!!")
//                 console.log(res);
//                 // setLoggedIn();
//                 navigate(`/userpage/${user.id}`);
//             })
//             .catch((err) => {
//                 console.log("UH OH")
//                 console.log(err);
//                 console.log(err.response);
//             });
//     };

//     return (
//         <fieldset>
//             <legend>Sign In</legend>
//             <form onSubmit={login}>
//                 <p className="form-group">
//                     <label>User Name:</label>
//                     <input
//                         type="text"
//                         name="userName"
//                         onChange={(e) => setUser(e.target.value)}
//                         value={user}
//                     />
//                 </p>
//                 <p className="form-group">
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="userPassword"
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                     />
//                 </p>
//                 <input type="submit" value="Sign In" className="btn btn-info" />
//                 <p className="error-message">{errorMessage ? errorMessage : ""}</p>
//             </form>
//         </fieldset>
//     );
// };

// export default Login;