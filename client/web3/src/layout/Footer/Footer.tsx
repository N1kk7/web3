import React from 'react'
import Logo from '../../assets/images/logo.png'
import twitter from '../../assets/images/twitter.png'
import youtube from '../../assets/images/youtube.png'
import telegramm from '../../assets/images/telegramm.png'

export default function footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footerWrapper">
            <div className="mainFooter">
              <div className="footerImg">
                <img src={Logo} alt="logo" />
              </div>
              <div className="text">
                <p>
                  User flows library of crypto, NFT, and Web3 projects. 
                  Insights, experts reviews to enhance Web3 UX
                </p>
              </div>
          </div>
          <div className="descriptionFooter">
            <div className="fItem">
              <div className="fTitle">
                <h3>
                  PLATFORM
                </h3>
              </div>
              <div className="text">
                <span>
                  Terms and Conditions
                </span>
                <span>
                  Privacy Policy
                </span>      
                <span>
                  hello@web3flows.com
                </span>
              </div>
            </div>
            <div className="fItem">
              <div className="fTitle">
                <h3>
                  FOLLOW
                </h3>
              </div>
              <div className="imageItem">
                <a href="/#"><img src={twitter} alt="twitter" /></a>
                <a href="/#"><img className='centerImage' src={youtube} alt="youtube" /></a>
                <a href="/#"><img src={telegramm} alt="telegramm" /></a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
