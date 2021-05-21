import React from 'react';
import img1 from '../testimonial/img1.jpg'
import '../assets/testimonial.css';
// import ReactDom from 'react-dom';

function Testimonial(){
    return(
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 wehelpu">
            <h4>We help you,</h4>
            <h4 className="hfour">With you</h4>
            <i class="fas fa-check"></i><p>Free time with the health center everyday</p><br/>
            <i class="fas fa-check"></i><p>Open 24 hours a day in the app</p><br/>
            <i class="fas fa-check"></i><p>Doctors, psychologists and nurses</p><br/>
            <button className="btn">Book a meeting</button>
            </div>


            <div className="col-lg-6">
            <img src={img1} className="imgone"/>
            </div>





        </div>
            <h4 className="relevant">Relevant right now</h4>
            <div className="row">
            <div className="col-lg-6">
            {/* image section */}
            </div>


            <div className="col-lg-6">
            <h5>Choose Dclinic as your health center in Stokholm</h5>
            <p>With us, you always get safe and flexible care. In the app when possible,</p><br/>
            <p>and at the health center when needed.</p><br/>
            <button className="btn">Read more aboud Dclinic</button>
            </div>
        </div>
        <div>

        </div> 
        </div>   
        
    
    )
}

export default Testimonial;