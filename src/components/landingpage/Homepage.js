import React from 'react';
import Header from "../header/Header";
import Testimonial from '../testimonial/Testimonial';
import Vaccianationcard from '../Vaccianationcard';
import Fotter from '../Fotter'

function Homepage(){
    return(
        <div>
             <Header/>
            <Testimonial/>
            <Vaccianationcard/>
            <Fotter/>
            </div>
      
    );
}
export default Homepage;