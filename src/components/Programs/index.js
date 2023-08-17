import React from 'react'
import "./programs.css"
import Slider from "react-slick/lib/slider";
import { PROGRAMS } from '../../data/program';
import ProgramCard from './ProgramCard';
import Button from '../../common/Button';

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  speed: 500,
  arrows: true,
}

const Programs = () => {
  return (
    <div className='programs'>
      <div className='prog-title absolute-center'>
        <span className='heading-gradient'>Programs</span>
      </div>
      <div className='tp-bg-blob'></div>

      <Slider {...settings}> 
        {PROGRAMS.map((_course)=>(
         <ProgramCard course={_course}/>
        ))}
      </Slider>

      <div className='prog-btn absolute-center'>
        <Button btnText="SEE MORE" type="Secondary" customClass="seemore-btn"/>
      </div>
    </div>
  )
}

export default Programs
