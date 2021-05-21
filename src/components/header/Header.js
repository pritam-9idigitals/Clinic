/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import companyLogo from '../header/logo.png';
import '../assets/header.css';
// import ReactDom from 'react-dom';

function Header(){
    return(
        <div className="topsection">
            <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <img className="navbar-brand" src={companyLogo}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">That is how it works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Facts and advice</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Medical centers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Vaccination</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Coronavirus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Common questions</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div className="covoid19">
      <h5>Do you want to test yourself for covoid-19?</h5>
      </div>
        </div>

    
    )
}

export default Header;