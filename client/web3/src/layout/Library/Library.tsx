import React from 'react'
import LibraryImg from '../../assets/images/Library.png'

export default function Library() {
  return (
      <>
              <div className="discowerWeb library">
                  <div className="container">
                      <div className="title">
                          <h1>
                                Library in 500+ flows
                          </h1>
                      </div>
                      <div className="discowerWrapper">
                          <div className="infoItem">
                              <div className="text">
                                  <p>
                                        We're bringing you the best of the web3 world. 
                                        From big names like Binance and Kraken to favorites 
                                        like Trust Wallet and Metamask, we're always on the 
                                        lookout for top Web 3 products. Whether you're new 
                                        or experienced in this space, we've got you covered.
                                  </p>
                              </div>
                          </div>
                          <div className="imageItem">
                              <img src={LibraryImg} alt="discowerImg" />

                          </div>
                      </div>
                  </div>
              </div>


      </>
  )
}
