import React from 'react'
import ExpertImg from '../../assets/images/Expert.png'
import listVector from '../../assets/images/listVector.png'


export default function Expert() {
  return (
    <>
        <div className="discowerWeb expert">
            <div className="container">
                <div className="title">
                    <h1>
                        Expert Analysis and Scoring
                    </h1>
                </div>
                <div className="discowerWrapper">
                    <div className="infoItem">
                        <div className="text">
                            <p>
                                Our team of Web 3 UX experts conducts thorough analyses 
                                of each journey, evaluating them based on usability heuristics 
                                and best practices. Gain insights and understand what 
                                constitutes a superior user experience.
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
                                            Detailed breakdowns of each user journey
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listImg">
                                        <img src={listVector} alt="vector" />
                                    </div>
                                    <div className="listText">
                                        <span>
                                            Learn exactly what makes great UX in your space
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listImg">
                                        <img src={listVector} alt="vector" />
                                    </div>
                                    <div className="listText">
                                        <span>
                                            Be inspired by the best, and avoid common pitfalls
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="imageItem">
                        <img src={ExpertImg} alt="discowerImg" />

                    </div>
                </div>
            </div>
        </div>


    </>
  )
}
