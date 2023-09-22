import React from 'react'
import Elipse from '../../assets/images/Elipse.png'
import Triangle from '../../assets/images/Triangle.png'
import Circle from '../../assets/images/Circle.png'

export default function WhyWeb() {
  return (
    <>
        <div className="whyWeb">
            <div className="container">
                <div className="title">
                    <h1>
                        Why web3flows?
                    </h1>
                </div>
                <div className="whyWebRow">
                    <div className="rowItem">
                        <div className="itemImg">
                            <img src={Elipse} alt="Elipse" />
                        </div>
                        <div className="itemTitle">
                            <h3>
                                Improve your offerings
                            </h3>
                        </div>
                        <div className="itemText">
                            <div className="text">
                                <p>
                                    Understand how you compare to competitors 
                                    and the industry as a whole, and discover 
                                    ways to gain an advantage.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rowItem">
                        <div className="itemImg">
                            <img src={Triangle} alt="Triangle" />
                        </div>
                        <div className="itemTitle">
                            <h3>
                                Lead your market
                            </h3>
                        </div>
                        <div className="itemText">
                            <div className="text">
                                <p>
                                    Identify untapped market gaps quickly and be 
                                    the first to introduce innovative digital 
                                    products and features.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rowItem">
                        <div className="itemImg">
                            <img src={Circle} alt="Circle" />
                        </div>
                        <div className="itemTitle">
                            <h3>
                                De-risk product strategy
                            </h3>
                        </div>
                        <div className="itemText">
                            <div className="text">
                                <p>
                                    No more trial and error. Learn how market 
                                    leaders have addressed the same challenges, 
                                    build on their successes, and avoid 
                                    their mistakes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}
