import React from 'react';
import { FaArrowLeft, FaArrowRight, IconName } from "react-icons/fa";
import B_img1 from '../../../assets/images/banner/1.jpg'
import B_img2 from '../../../assets/images/banner/2.jpg'
import B_img3 from '../../../assets/images/banner/3.jpg'
import B_img4 from '../../../assets/images/banner/4.jpg'
import B_img5 from '../../../assets/images/banner/5.jpg'
import B_img6 from '../../../assets/images/banner/6.jpg'
import './banar.css'
import CarusolItems from './CarusolItems';

const Banar = () => {
    const carusol = [
        {id:1, imges:B_img1,p:6, n:2},
        {id:2, imges:B_img2,p:1, n:3},
        {id:3, imges:B_img3,p:2, n:4},
        {id:4, imges:B_img4,p:3, n:5},
        {id:5, imges:B_img5,p:4, n:6},
        {id:6, imges:B_img6,p:5, n:1}
    ]
    return (
        <div className="carousel w-full my-10">
            {
                carusol.map(slide =><CarusolItems
                key={slide.id}
                slide={slide}
                ></CarusolItems>)
            }
            
        </div>
    );
};

export default Banar;