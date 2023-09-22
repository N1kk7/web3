import React from 'react'
import LatestImg from '../../assets/images/Latest.png'

export default function Latest() {
  return (
    <>
        <div className="discowerWeb latest" >
            <div className="container">
                <div className="title">
                    <h1>
                        Insights into the latest Web 3 trends
                    </h1>
                </div>
                <div className="discowerWrapper">
                    <div className="imageItem">
                        <img src={LatestImg} alt="discowerImg" />

                    </div>
                    <div className="infoItem">
                        <div className="text">
                            <p>
                                Get your products ready to tackle challenges now and in the future. 
                                You can do this by using exclusive insights into the latest UX 
                                news and industry trends. This will help your products stay 
                                effective and up-to-date. Don't miss out on staying ahead 
                                and making your products even better!
                            </p>
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>


    </>
  )
}
