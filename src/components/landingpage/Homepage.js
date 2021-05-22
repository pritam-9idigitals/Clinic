import React from 'react';
import Header from "../header/Header";
import Testimonial from '../testimonial/Testimonial';
import Vaccianationcard from '../Vaccianationcard';
import Fotter from '../Fotter';
import Dclinicuse from '../Dclinicuse';

function Homepage(){
    return(
        <div>
             <Header/>
            <Testimonial/>
            <Vaccianationcard/>
            <Dclinicuse/>
            <Fotter/>
            
            </div>
      
    );
}
export default Homepage;