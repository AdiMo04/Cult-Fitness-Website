import React from 'react'
import './programCard.css'

const ProgramCard = (props) => {
    const { course } =props;
  return (
    <div className='program-card absolute-center'>
      <div className='pc-inner-wrapper absolute-center'>
        <div className='pc-content'>
            <img alt={course.user_name} 
            src={course.banner} 
            className='pc-banner absolute-center'/>
            <div className='pc-user-info'>
              <div className='pc-ui-left'>
                <img alt={course.user_name} 
                className='pc-user-logo' 
                src={course.user_photo}/>
                <div>
                  <div className='pc-ui-username'>{course.user_name}</div>
                  <div className='pc-ui-userhandle'>{course.userhandle}</div>
                </div>
              </div>
              <img 
                alt='ETH LOGO'
                className='pc-logo'
                src='./images/img8.svg'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramCard
