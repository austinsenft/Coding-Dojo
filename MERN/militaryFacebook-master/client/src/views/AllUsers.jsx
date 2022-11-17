import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router'

const Main = props => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user',{withCredentials:true})
            .then(res => setUser(res.data.results))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container vh-100" id="content">
            {
                user.map((u, i) => {
                    return <div className="card col-8 mx-auto box-shadow:-2px 5px 22px 3px (0,0,0,0.63)
                    style= background:transparent url('client/src/assets/img/maxresdefault.png') no-repeat center center/cover"
                        key={i}>
                        <p>{i + 1}</p>
                        <p>{u.userName}</p>
                        <p>{u.userFirstName}</p>
                        <p>{u.userLastName}</p>
                        <p><Link className="btn btn-success" to={`/user/${u._id}`}>Show User {i + 1}</Link></p>
                    </div>
                })
            }
        </div>
    );
}

export default Main;