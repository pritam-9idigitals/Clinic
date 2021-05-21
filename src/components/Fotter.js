import React from 'react';
import './assets/fotter.css';
import companyLogo from './header/logo.png';
// import ReactDom from 'react-dom';

function Fotter(){
    return(
        <div className="container-fluid fotter">
                <div className="row">
                    <div className="col-lg-4">
                     <img className="navbar-brand" src={companyLogo}/>
                        </div>
                        <div className="col-lg-2">
                        <h6>NAVIGATE</h6>
                        <ul>About Dclinic</ul>
                        <ul>Medical center</ul>
                        <ul>List yourself</ul>
                        <ul>Vaccianation</ul>
                        <ul>Psycological help</ul>
                        <ul>Safe care</ul>
                        <ul>Carreer</ul>
                        <ul>Work with us as clinicians</ul>
                        </div>
                        <div className="col-lg-2">
                        <h6>SOCIAL</h6>
                        <ul>Linkedin</ul>
                        <ul>Facebook</ul>
                        <ul>Twitter</ul>
                        <ul>Instagram</ul>
                        </div>
                        <div className="col-lg-2">
                        <h6>CONTACT</h6>
                        <ul>Help center</ul>
                        <ul>Support</ul>
                        <ul>Contact us</ul>
                        </div>
                        <div className="col-lg-2">
                        <h6>RELEVANT</h6>
                        <ul>Questions and answers about corona</ul>
                        <ul>Vaccine against covoid-19</ul>
                        </div>

                </div>
        </div>
    
    )
}

export default Fotter;