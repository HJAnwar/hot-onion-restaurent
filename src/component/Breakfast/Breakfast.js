import React from 'react';
import { Link } from 'react-router-dom';
import breakfast1 from '../../images/Breakfast/breakfast1.png';
import breakfast2 from '../../images/Breakfast/breakfast2.png';
import breakfast3 from '../../images/Breakfast/breakfast3.png';
import breakfast4 from '../../images/Breakfast/breakfast4.png';
import breakfast5 from '../../images/Breakfast/breakfast5.png';
import breakfast6 from '../../images/Breakfast/breakfast6.png';

const Breakfast = () => {
    return (
        <Link to="/delivarydetail">
        <div className='lunchStyle'>
                <div className='lunchStyle1' >
                    <div class="lunchImgTextBox">
                        <img src={breakfast1} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlas djfaklsdf hkash</h2>   
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={breakfast2} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdjfa klsdfhka</h2>
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={breakfast3} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdj faklsdfhk ashdfas</h2> 
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                    </div>
                    
                </div>
                <br/>
                <br/>
                <div className='lunchStyle2'>
                    <div class="lunchImgTextBox">
                        <img src={breakfast4} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlas djfaklsdf hkash</h2>   
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={breakfast5} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdjfa klsdfhka</h2>
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                
                    </div>
                    <div class="lunchImgTextBox">
                        <img src={breakfast6} class="card-img-top" alt="..."></img>
                        <h2>sdjfkla fhlasdj faklsdfhk ashdfas</h2> 
                        <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                    </div>
                </div>
            </div>
            </Link>
    );
};

export default Breakfast;