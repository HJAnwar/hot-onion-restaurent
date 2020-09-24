import React from 'react';
import { Link } from 'react-router-dom';
import dinner1 from '../../images/Dinner/dinner1.png';
import dinner2 from '../../images/Dinner/dinner2.png';
import dinner3 from '../../images/Dinner/dinner3.png';
import dinner4 from '../../images/Dinner/dinner4.png';
import dinner5 from '../../images/Dinner/dinner5.png';
import dinner6 from '../../images/Dinner/dinner6.png';


const Dinner = () => {
    return (
        <Link to="/delivarydetail">
        <div className='lunchStyle'>
                <div className='lunchStyle1' >
                    <div class="lunchImgTextBox">
                        <img src={dinner1} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlas djfaklsdf hkash</h2>   
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={dinner2} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdjfa klsdfhka</h2>
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={dinner3} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdj faklsdfhk ashdfas</h2> 
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                    </div>
                    
                </div>
                <br/>
                <br/>
                <div className='lunchStyle2'>
                    <div class="lunchImgTextBox">
                        <img src={dinner4} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlas djfaklsdf hkash</h2>   
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={dinner5} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdjfa klsdfhka</h2>
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={dinner6} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdj faklsdfhk ashdfas</h2> 
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                    </div>
                </div>
            </div>
            </Link>
    );
};

export default Dinner;