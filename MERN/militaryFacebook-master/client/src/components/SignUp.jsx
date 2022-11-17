import React, { useState } from "react";
import axios from "axios";

const SignUp = (props) => {
    const [userName, setUsername] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userConfirmPW, setConfirmPassword] = useState("");
    const [userFirstName, setFirstName] = useState("");
    const [userLastName, setLastName] = useState("");
    const [userBranch, setBranch] = useState("");
    const [userLocation, setLocation] = useState("");
    const [userRank, setRank] = useState("");
    const [userRateMOS, setRateMos] = useState("");
    const [userLOS, setLOS] = useState("");
    const [errors, setErrors] = useState(null);

    const register = (event) => {
        event.preventDefault();

        const newUser = { username, email, password, confirmPassword };

        axios
            .post("http://localhost:8000/api/register", newUser, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
                setUsername("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setFirstName("");
                setLastName("");
                setBranch("");
                setLocation("");
                setRank("");
                setRateMos("");
                setLOS("");
            })
            .catch((err) => {
                console.log(err);

                setErrors(err.response.data.errors);
            });
    };

    return (
        <fieldset>
            <legend>Sign Up</legend>

            <form onSubmit={register}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="userName"
                        onChange={(e) => setUsername(e.target.value)}
                        value={userName}
                    />
                    {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
                    {errors?.userName && (
                        <span className="error-message">
                            {errors.userName?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="userFirstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={userFirstName}
                    />
                    {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
                    {errors?.userFirstName && (
                        <span className="error-message">
                            {errors.userFirstName?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="userLastName"
                        onChange={(e) => setLastName(e.target.value)}
                        value={userLastName}
                    />
                    {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
                    {errors?.userLastName && (
                        <span className="error-message">
                            {errors.userLastName?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label>Branch:</label>
                    <input
                        type="text"
                        name="userBranch"
                        onChange={(e) => setBranch(e.target.value)}
                        value={userBranch}
                    />
                    {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
                    {errors?.userBranch && (
                        <span className="error-message">
                            {errors.userBranch?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        name="userLocation"
                        onChange={(e) => setLocation(e.target.value)}
                        value={userLocation}
                    />
                    {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
                    {errors?.userLocation && (
                        <span className="error-message">
                            {errors.userLocation?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label>Rank:</label>
                    <input
                        type="text"
                        name="userRank"
                        onChange={(e) => setLocation(e.target.value)}
                        value={userRank}
                    />
                    {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
                    {errors?.userRank && (
                        <span className="error-message">
                            {errors.userRank?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label>Rate / MOS:</label>
                    <input
                        type="text"
                        name="userRateMOS"
                        onChange={(e) => setLocation(e.target.value)}
                        value={userRateMOS}
                    />
                    {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
                    {errors?.userRateMOS && (
                        <span className="error-message">
                            {errors.userRateMOS?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label>Length of service:</label>
                    <input
                        type="text"
                        name="userLOS"
                        onChange={(e) => setLocation(e.target.value)}
                        value={userLOS}
                    />
                    {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
                    {errors?.userLOS && (
                        <span className="error-message">
                            {errors.userLOS?.properties?.message}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="userEmail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={userEmail}
                    />
                    {errors?.userEmail && (
                        <span className="error-message">
                            {errors.userEmail?.properties?.message}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="userPassword"
                        onChange={(e) => setPassword(e.target.value)}
                        value={userPassword}
                    />
                    {errors?.userPassword && (
                        <span className="error-message">
                            {errors.userPassword?.properties?.message}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="userConfirmPW"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={userConfirmPW}
                    />
                    {errors?.userConfirmPW ? (
                        <span className="error-message">
                            {errors.userConfirmPW?.properties?.message}
                        </span>
                    ) : (
                            ""
                        )}
                </div>

                <input type="submit" value="Sign Up" className="btn" />
            </form>
        </fieldset>
    );
};

export default SignUp;