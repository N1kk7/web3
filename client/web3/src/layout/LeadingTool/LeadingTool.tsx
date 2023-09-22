import React from 'react'
import MainBtn from '../../components/MainBtn/MainBtn'
import img1 from '../../assets/images/img1.png'

export default function LeadingTool() {
  return (
    <>
        <div className="leadingTool">
            <div className="container">
                <div className="title">
                    <h1>
                        The leading tool for conduction 
                        competitive analysis in Web 3
                    </h1>
                </div>
                <div className="leadingToolWrapper">
                    <div className="leadingToolContent">
                        <div className="leftItem">
                            <div className="text">
                                <p>
                                    Benchmark your products against industry
                                    leaders with our curated global library 
                                    of user journeys across crypto, NFT, 
                                    and Web3 projects. Browse recordings 
                                    of end to end user journeys, gain insights,
                                    and stay ahead of competitors 
                                    and industry standards.
                                </p>
                            </div>
                            <MainBtn/>
                        </div>
                        <div className="rightItem">
                            <img src={img1} alt="main-img" />

                        </div>

                    </div>
                    
                </div>
            
                
            </div>
            
        </div>
        
    
    </>
  )
}
