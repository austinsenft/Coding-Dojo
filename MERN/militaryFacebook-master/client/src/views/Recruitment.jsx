import React, {useState} from 'react';
import coastGuard from '../assets/img/coastGuard1.jpg'
import marines from '../assets/img/USMC.jpg'
import airForce from '../assets/img/airForce.jpg'
import army from '../assets/img/army.jpg'
import navy from '../assets/img/navy.jpg'


const UserPage = props => {
    const {logged} = props;
    return (
        <div className="container vh-100" id="content">
            <h1 className="bg-white">Welcome {logged.userFirstName}</h1>
            <br/>
            <a href="https://www.gocoastguard.com/Careers?msclkid=ce7125a69a1116e047a37acb6ff5c29f&utm_source=bing&utm_medium=cpc&utm_campaign=B%20-%20USCG%20-%20Non-Brand%20-%20Military&utm_term=military%20recruitment&utm_content=Military%20-%20Recruitment"><img id="box" src={coastGuard} alt="../assets/img/coastGuard.png" height="250px" width="250px"/></a>
            <br/>
            <a className="btn btn-dark btn-outline-light m-3" href="https://www.gocoastguard.com/Careers?msclkid=ce7125a69a1116e047a37acb6ff5c29f&utm_source=bing&utm_medium=cpc&utm_campaign=B%20-%20USCG%20-%20Non-Brand%20-%20Military&utm_term=military%20recruitment&utm_content=Military%20-%20Recruitment">Coast Guard</a>
            <br/>
            <a href="https://rmi.marines.com/request-information/G_Military_Enlist_Join_Ex?msclkid=60e50a74e5c4109cc26a551910203789&gclid=CO2C__O6hOwCFSEDiAkdcJIBgw&gclsrc=ds"><img id="box" src={marines} alt="../assets/img/USMC.jpg" height="250px" width="250px"/></a>
            <br/>
            <a className="btn btn-dark btn-outline-light m-3" href="">Marine Corps</a>
            <br/>
            <a href="https://afreserve.com/how-to-join?sf=ppbing&msclkid=faf5b4ae07f618295e6cebc3f2122080"><img id="box" src={airForce} alt="../assets/img/airForce.jpg" height="250px" width="250px"/></a>
            <br/>
            <a className="btn btn-dark btn-outline-light m-3" href="https://afreserve.com/how-to-join?sf=ppbing&msclkid=faf5b4ae07f618295e6cebc3f2122080">Air Force</a>
            <br/>
            <a href="https://recruiting.army.mil/"><img id="box" src={army} alt="../assets/img/army.jpg" height="250px" width="250px"/></a>
            <br/>
            <a className="btn btn-dark btn-outline-light m-3" href="https://recruiting.army.mil/">Army</a>
            <br/>
            <a href="https://www.navy.com/"><img id="box" src={navy} alt="../assets/img/navy.jpg" height="250px" width="250px"/></a>
            <br/>
            <a className="btn btn-dark btn-outline-light m-3" href="https://www.navy.com/">Navy</a>

        </div>
    );
}

export default UserPage;