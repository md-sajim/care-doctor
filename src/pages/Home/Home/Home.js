import React from 'react';
import About from '../About/About';
import Banar from '../Banar/Banar';
import Servese from '../Servese/Servese';

const Home = () => {
    return (
        <div>
           <Banar></Banar>
           <About></About>
           <Servese></Servese>
        </div>
    );
};

export default Home;