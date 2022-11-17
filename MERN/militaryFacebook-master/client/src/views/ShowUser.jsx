// import { navigate } from '@reach/router';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import pic from '../assets/img/Adrien1.JPG';

const Show = props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/user/${props.id}`, { withCredentials: true })
            .then(res => setUser(res.data.results))
            .catch(err => console.log(err));
    }, [props])

    return (
        <div className="container vh-100 p-2" id="content">

            {
                user ? <>
                    <div className="vh-100">
                        <div className="col">
                            <p className="bg-light"> {user.userBranch}</p>
                            <p className="d-flex justify-content-around bg-light">
                                <div>{user.userName}</div> || <div>LOS:{user.userLOS}</div> || <div>MOS:{user.userRateMOS}</div></p>
                            <img src={pic} alt="pic" height="300px" width="350px" />
                            <p className="bg-light d-flex justify-content-around m-2 " style={{ color: "black" }}>
                                <Link to="/">Message</Link> ||
                                <Link to="/">Post</Link> ||
                                <Link to="/">Upload</Link>
                            </p>
                            <a href="https://www.herocarepackages.com/curated?msclkid=980a748967fb1e23094d2be4958299fb" className="btn btn-success">Send Care Package</a>
                        </div>
                        <div className="col mx-auto h-75 bg-light m-2">
                            posts from other users. direct and indirect
            </div>
                        <div className="col mx-auto h-25 bg-light m-1">
                            misc content
            </div>
                    </div>
                </> : null
            }
        </div>
    );
}

export default Show;