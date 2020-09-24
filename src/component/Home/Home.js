import React from 'react';
import './Home.css';
import logo from '../../images/logo.png';
import banner from '../../images/bannerbackground.png';
import chef2 from '../../images/Image/chef2.png';
import chef3 from '../../images/Image/chef3.png';
import lunch1 from '../../images/lunch/lunch1.png';
import lunch2 from '../../images/lunch/lunch2.png';
import lunch3 from '../../images/lunch/lunch3.png';
import lunch4 from '../../images/lunch/lunch4.png';
import lunch5 from '../../images/lunch/lunch5.png';
import lunch6 from '../../images/lunch/lunch6.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='homeStyle'>
            <div className='headerStyle'>
                <nav>
                    <img src={logo} alt=""/>
                    <div className='aStyle'>
                        <a href="/signup">Sign-up</a>
                        <a href="/login">Log-in</a>
                    </div>
                </nav>
            </div>
            <div className='bannerStyle'>
               <img src={banner} alt=""/>
            </div>
            <br/>
            <div className='secondHeader'>
                <nav>
                    <a href="/breakfast">Breakfst</a>
                    <a href="/lunch">Lunch</a>
                    <a href="/dinner">Dinner</a>
                </nav>
            </div>
            <br/>
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
            <div className='btn'>
                <input type="button" value="Checkout Your Food"/>
            </div>
            <br/>
            <div className='chooseUs'>
                <div class="imgTextBox">
                    <img src={chef3} class="card-img-top" alt="..."></img>
                    <h2>sdjfkla fhlas djfaklsdf hkash</h2>   
                    <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
               
                </div>
                <div class="imgTextBox">
                    <img src={chef2} class="card-img-top" alt="..."></img>
                    <h2>sdjfkla fhlasdjfa klsdfhka</h2>
                    <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
               
                </div>
                <div class="imgTextBox">
                    <img src={chef3} class="card-img-top" alt="..."></img>
                    <h2>sdjfkla fhlasdj faklsdfhk ashdfas</h2> 
                    <p>ASDJ KLahsd LKASDHALKS DFHASLDHF ALKSHDG DASLKGLFKDJGFSL KDKGFSDKLGHKLDSH</p>
                </div>
                
            </div>
            <div className='footer'>
                <div className='footerStyle'>
                    <img src={logo} alt=""/>
                </div>
                <div className='footerStyle'>

                </div>
                <div className='footerStyle'>
                    <ul>
                        <li>MyDearMotherMyDearMother</li>
                        <li>MyDearMotherMyDearMother</li>
                        <li>MyDearMotherMyDearMother</li>
                        <li>MyDearMotherMyDearMother</li>
                       
                    </ul>
                </div>
                <div className='footerStyle'>
                    <ul>
                        <li>MyDearMotherMyDearMother</li>
                        <li>MyDearMotherMyDearMother</li>
                        <li>MyDearMotherMyDearMother</li>
                        
                    </ul>
                </div>
                <div className='footerStyle'>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Home;