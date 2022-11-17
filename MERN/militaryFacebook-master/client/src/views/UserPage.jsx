import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router'
import pic from '../assets/img/kayla2402.jpg';

const UserPage = props => {
    const { logged } = props;
    return (
        <div className="container vh-100 p-2" id="content">

            <div className="col mx-auto">
                <p className="bg-white m-2">{logged.userName} || {logged.userBranch} || {logged.userLocation}</p>
                <img src={pic} alt="pic" height="300px" width="250px" />
                
                <div className="d-flex justify-content-around bg-white m-2">
                    <Link to="/" style={{ color: "black" }}>Post</Link>
                    <Link to="/" style={{ color: "black" }}>Upload</Link>
                </div>
            </div>
            <div id="commentArea" className="col mx-auto h-75 bg-white">
                posts from other users. direct and indirect
            </div>
            <div className="col mx-auto h-25 bg-white m-1">
                misc content
            </div>
        </div>
    );
}

export default UserPage;