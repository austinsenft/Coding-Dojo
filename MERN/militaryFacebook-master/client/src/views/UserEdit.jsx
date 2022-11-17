import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import UserForm from '../components/UserForm';
import { navigate } from '@reach/router';

const UserEdit = props => {
    const { logged, setLogged } = props;
    const initialErrors = {
        userFirstName: "",
        userLastName: "",
        userName: "",
        userEmail: "",
        userPassword: "",
        userConfirmPW: "",
        userLocation: "",
        userBranch: "",
        userLOS: "",
        userRateMOS: "",
        userRank: "",

    }
    const [edit, setEdit] = useState({
        userFirstName: "",
        userLastName: "",
        userName: "",
        userEmail: "",
        userLocation: "",
        userBranch: "",
        userLOS: "",
        userRateMOS: "",
        userRank: "",
    });
    const [errors, setErrors] = useState(initialErrors);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/user/${logged._id}`, { withCredentials: true })
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err));
    }, [props])

    const handleInput = e => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors)
        Axios.put(`http://localhost:8000/api/update/user/${edit._id}`, edit, { withCredentials: true })
            .then(res => {
                console.log("this is edit", edit)
                console.log("this is logged", logged)
                console.log("res.data", res.data)
                console.log("props", props)
                console.log("props.id", props.id)
                console.log("props._id", props._id)
                console.log("edit.id", edit.id)
                console.log("edit._id", edit._id)
                setLogged(edit)
                navigate(`/userpage/${edit._id}`)
            })
            .catch(err => setErrors(err.response.data.errors));
    }
    return (
        <div>
            <h2 className="bg-white">Edit {logged.userName}</h2>
            <UserForm
                inputs={edit}
                errors={errors}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                submitValue="Edit User"
            />
        </div>
    )
}

export default UserEdit;