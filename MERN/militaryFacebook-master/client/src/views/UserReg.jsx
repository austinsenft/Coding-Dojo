import React, { useState } from 'react';
import Axios from 'axios';
import UserForm from '../components/UserForm';
import { navigate } from '@reach/router';

const New = props => {
    const { setLogged } = props;
    const initialUser = {
        userFirstName: "",
        userLastName: "",
        userName: "",
        userEmail: "",
        userPassword: "",
        userConfirmPW: "",
        userLocation: "",
        userBranch: "",
    }
    const initialErrors = {
        userFirstName: "",
        userLastName: "",
        userName: "",
        userEmail: "",
        userPassword: "",
        userConfirmPW: "",
        userLocation: "",
        userBranch: "",
    }
    const [user, setUser] = useState(initialUser)
    const [errors, setErrors] = useState(initialErrors);
    const handleInput = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors)
        Axios.post("http://localhost:8000/api/create/user", user, { withCredentials: true })
            .then(res => {
                if (res.data.user) {
                    setLogged(user);
                    setUser(initialUser);
                    navigate(`/userpage/${user._id}`)
                }
                else {
                    console.log(res.data)
                    setErrors(res.data)
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="container vh-100" id="content">
            <h2 className="bg-primary">Strap Up</h2>
            <UserForm
                inputs={user}
                errors={errors}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                submitValue="Ship out"
            />
        </div>
    )
}

export default New;