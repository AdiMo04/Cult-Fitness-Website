import React from 'react';
import "./topFold.css";
import Button from '../../common/Button';

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>

        <div className='tf-heading'>
        <span className='heading-gradient'>Shape </span>Your <span className='heading-gradient'>Body </span>From Now
        </div>

        <div className='tf-description'>
        Achieve your training goal with the right plan and professional instructor
        </div>

        <div className='tf-left-btns'>
          <Button btnType="PRIMARY" btnText="Get Started"/>
          <Button btnType="SECONDARY" btnText="Free Trial" customClass='tf-left-secondary-btn'/>
        </div>

        <div className='tf-left-infoStats'>
          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>200+</div>
            <div className='tf-infoItem-label'>Instructors</div>
          </div>

          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>80+</div>
            <div className='tf-infoItem-label'>Centers</div>
          </div>

          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>50K+</div>
            <div className='tf-infoItem-label'>Subscribers</div>
          </div>
        </div>

      </div>

      <div className='tf-right'>
      <div className='tf-r-bg-blob'></div>
          <div className='tf-r-item absolute-center'>
              <img 
              className='tf-r-img' 
              alt='diamond-banner'
              src='./images/img6.svg'>
              </img>
          </div>
      </div>
    </div>
  )
};

export default TopFold;


