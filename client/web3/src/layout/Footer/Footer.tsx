import React from 'react'
import Logo from '../../assets/images/logo.png'
import twitter from '../../assets/images/twitter.png'
import youtube from '../../assets/images/youtube.png'
import telegramm from '../../assets/images/telegramm.png'
import envelope from '../../assets/images/envelope.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { headerState, mailModalState } from '../../store/stateReducer'

// import Privacy from '../../pages/Privacy'

export default function Footer() {
const dispatch = useDispatch();





  return (
    <>
        <div className='footer'>
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
            <div className="descriptionFooter" >
              <div className="fItem">
                <div className="fTitle">
                  <h3>
                    PLATFORM
                  </h3>
                </div>
                <div className="text">
                  <Link to={'/terms&conditions'} className='linkTo' onClick={() => {dispatch(headerState('Link')); }} style={{cursor: 'pointer'}}>

                    <span>
                      Terms and Conditions
                    </span>
                  </Link>

                  <Link to={'/privacy&policy'} className='linkTo' onClick={() => {dispatch(headerState('Link')); }} style={{cursor: 'pointer'}}>
                    <span>
                      Privacy Policy
                    </span>
                  </Link>

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
                  <div className='footerImg'><img src={twitter} alt="twitter"/></div>
                  <div className='footerImg'><img className='centerImage' src={youtube} alt="youtube" /></div>
                  <div className='footerImg'><img src={telegramm} alt="telegramm" /></div>
                  <div className='footerImg' onClick={() => {dispatch(mailModalState())}}><img className='envelope' src={envelope} alt="telegramm" /></div>

                </div>
              </div>
            </div>
            </div>
          </div>

        </div>

    </>
  )
}
