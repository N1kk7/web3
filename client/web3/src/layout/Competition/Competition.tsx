import React from 'react'
import MainBtn from '../../components/MainBtn/MainBtn'
import Cursor from '../../assets/images/Cursor.png'

export default function Competition() {
  return (
    <div className="competition">
        <div className="container">
            <div className="competitionWrapper">
                <div className="infoItem">
                    <div className="title">
                        <h1>Ready to leave your competition in the dark?</h1>
                    </div>
                    <div className="description">
                        <span>
                            Book a demo with our team and let’s chat through your needs.
                        </span>
                    </div>
                    <div className="competitionBtn">
                        <MainBtn/>

                    </div>
                </div>
                <div className="imgItem">
                    <img src={Cursor} alt="Cursor" />
                </div>

            </div>
            
        </div>
    </div>
  )
}
