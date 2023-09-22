import React from 'react'
import Discower from '../../assets/images/Discower.png'
import listVector from '../../assets/images/listVector.png'

export default function DiscowerWeb() {
  return (
    <>
        <div className="discowerWeb">
            <div className="container">
                <div className="title">
                    <h1>
                        Discover Web 3 insights
                    </h1>
                </div>
                <div className="discowerWrapper">
                    <div className="imageItem">
                        <img src={Discower} alt="discowerImg" />

                    </div>
                    <div className="infoItem">
                        <div className="text">
                            <p>
                                Immerse in competitor experiences with video 
                                walkthroughs of Web 3 accounts across channels. 
                                Access carefully selected collection of user 
                                journeys recordings from leading Web 3 brands 
                                worldwide, gaining valuable insights to enhance 
                                your offerings.
                            </p>
                        </div>
                        <div className="listWrapper">
                            <ul>
                                <li>
                                    <div className="listImg">
                                        <img src={listVector} alt="vector" />
                                    </div>
                                    <div className="listText">
                                        <span>
                                            Watch everything from crypto and NFT to Web 3 music apps journeys
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listImg">
                                        <img src={listVector} alt="vector" />
                                    </div>
                                    <div className="listText">
                                        <span>
                                            Accelerate collaboration, share screenshots and GIFs
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listImg">
                                        <img src={listVector} alt="vector" />
                                    </div>
                                    <div className="listText">
                                        <span>
                                            Level up your design and product presentations
                                        </span>

                                    </div>
                                    

                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    </>
  )
}
