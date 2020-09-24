import React from 'react';
import { Link } from 'react-router-dom';
import lunch1 from '../../images/lunch/lunch1.png';
import lunch2 from '../../images/lunch/lunch2.png';
import lunch3 from '../../images/lunch/lunch3.png';
import lunch4 from '../../images/lunch/lunch4.png';
import lunch5 from '../../images/lunch/lunch5.png';
import lunch6 from '../../images/lunch/lunch6.png';


const Lunch = () => {
    return (
        <Link to="/delivarydetail">
        <div className='lunchStyle'>
                <div className='lunchStyle1' >
                    <div class="lunchImgTextBox">
                        <img src={lunch1} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlas djfaklsdf hkash</h2>   
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={lunch2} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdjfa klsdfhka</h2>
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={lunch3} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdj faklsdfhk ashdfas</h2> 
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                    </div>
                    
                </div>
                <br/>
                <br/>
                <div className='lunchStyle2'>
                    <div class="lunchImgTextBox">
                        <img src={lunch4} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlas djfaklsdf hkash</h2>   
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={lunch5} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdjfa klsdfhka</h2>
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={lunch6} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdj faklsdfhk ashdfas</h2> 
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                    </div>
                </div>
            </div>
            </Link>
    );
};

export default Lunch;