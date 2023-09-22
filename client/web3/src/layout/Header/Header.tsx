import React from 'react'
import mainLogo from '../../assets/images/logo.png'
import MainBtn from '../../components/MainBtn/MainBtn'

export default function header() {
  return (
    <div className='header'>
      <div className="container">
        <div className="headerWrapper">
          <div className="logo">
            <img src={mainLogo} alt="" />
          </div>
          <MainBtn/>

        </div>
       

      </div>
      
    </div>
  )
}
