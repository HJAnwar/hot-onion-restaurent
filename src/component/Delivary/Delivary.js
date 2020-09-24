import React, { useContext } from 'react';
import './Delivary.css';
import abul from '../../images/Image/Group 1151.png';
import you from '../../images/Image/Group 1152.png';
import { UserContext } from '../../App';

const Delivary = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    return (
        <div className="delivary">
            <div className="mapArea">

            </div>
            <div className="localArea">
                <img src={abul} alt=""/>
                <br/>
                <br/>
                <div className="seeLocation">

                </div>
                <br/><br/>
                <div className="profile">
                   <div className="profileimg">
                        <img src={you} alt=""/>
                   </div>
                    <div className="profiletext">
                        <p>email: {loggedInUser.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivary;