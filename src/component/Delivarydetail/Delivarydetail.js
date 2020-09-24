import React from 'react';
import { Link } from 'react-router-dom';
import './Dealivarydetail.css'

const Delivarydetail = () => {
    return (
        <div style={{height:"900px"}}>
        <div className='loginArea'>
            <form className="loginform" >
                <div className='inputBox'> 
                    <input  type="text" name='email' placeholder="name" required />
                </div>
                    <br/>
                <div className='inputBox'> 
                    <input  type="text" name='email' placeholder="email" required />
                </div>
                    <br/>
                <div className='inputBox'> 
                    <input  type="text" name='email' placeholder="first address" required />
                </div>
                    <br/>
                <div className='inputBox'> 
                    <input  type="text" name='email' placeholder="last address" required />
                </div>
                    <br />
                <div className='inputBox'> 
                    <input  type="text" name='email' placeholder="Country" required />
                </div>
                    <br />
                <div className='inputBox'> 
                    <input  type="text" name='email' placeholder="Ziep Code" required />
                </div>
                    <br />
                    <Link to="/delivary">
                <input className="submitBtn" type="submit" value="Go Go go" />
                
                </Link>
            </form>
            
        </div>
    </div>
    );
};

export default Delivarydetail;