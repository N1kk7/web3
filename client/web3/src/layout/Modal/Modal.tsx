import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import closeBtn from '../../assets/images/close.png'
import { useDispatch } from 'react-redux';
import { mailModalState } from '../../store/stateReducer';
import axios from "axios"; 
import { toast, ToastContainer } from "react-toastify";




export default function Modal() {
  const modalState = useSelector((state: any) => state.state.mailModal);
  const dispatch = useDispatch();
  const [email, setEmail] = useState(""); 
  const [subject, setSubject] = useState(""); 
  const [message, setMessage] = useState(""); 
//   const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(false);
















    const submitHandler = async () => { 
        console.log("ololo");
        
        // e.preventDefault(); 
        
        if (!email || !subject || !message) {
            setError(true);
            toast.error( "Please make sure to fill the email address, email subject, and message" ); 
            return setTimeout(() => {
                setError(false);
            }, 3000)
        }
        console.log(`4`);




            
        try { 
            // setLoading(true); 
            const { data } = await axios.post(`/api/email`, { email, subject, message, }); 
            // setLoading(false); 
            setError(true)
            toast.success(data.message); 
            setTimeout(() => {
                setError(false)
            }, 3000)
            dispatch(mailModalState())
        
        } catch (error:any) { 
            // setLoading(false); 
            toast.error( error.response && error.response.data.message ? error.response.data.message : error.message ); 
        } 
    }; 




                // return ( <div className="App"> <section> <ToastContainer position="top-center" limit={1} /> 
                // <form onSubmit={submitHandler}> <h1>Send Email</h1> <div className="form-wrapper"> 
                //     <div> <label htmlFor="email">Email Address</label> <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" ></input> </div> 
                //     <div> <label htmlFor="subject">Email Subject</label> <input onChange={(e) => setSubject(e.target.value)} type="text" id="subject" ></input> </div> 
                //     <div> <label htmlFor="message">Message Body</label> <textarea onChange={(e) => setMessage(e.target.value)} type="text" id="message" ></textarea> </div> <div> <button disabled={loading} type="submit"> {loading ? "Sending..." : "Send Email"} </button> </div> </div> </form> </section> </div> );










    




    



// useEffect(() => {
//     console.log(modalState);
    
// })


  return (
    <>
        { modalState && <div className="modal">
            <div className="container">
                <div className="mailWrapper">
                    <div className="modalWrapper">
                        {error && <ToastContainer position="top-center" limit={1} />}

                        <div className="title">
                            <h1>Send your info</h1>
                        </div>
                        <div className="closeBtn">
                            <img src={closeBtn} alt="close-button" onClick={() => dispatch(mailModalState())}/>
                        </div>
                        <div className="emailArea">
                            <div className="itemTitle">
                                <h3>
                                    Email
                                </h3>
                            </div>
                            <div className="itemArea">
                                {/* <textarea required={true} name="email" id="" cols={1} rows={1}></textarea>
                                i */}
                                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="themeArea">
                            <div className="itemTitle">
                                <h3>
                                    Theme
                                </h3>
                            </div>
                            <div className="itemArea">
                                {/* <textarea required={true} name="email" id="" cols={1} rows={1}></textarea>
                                 */}
                                 <input type="text" onChange={(e) => setSubject(e.target.value)}/>
                            </div>
                        </div>
                        <div className="textArea">
                        <div className="itemTitle">
                                <h3>
                                    Text
                                </h3>
                            </div>
                            <div className="itemArea textArea">
                                {/* <textarea name="email" id="" cols={1} rows={1}></textarea> */}
                                <input type="text" onChange={(e) => setMessage(e.target.value)}/>
                            </div>
                            
                        </div>
                        <div className="sendButton" onClick={() => submitHandler()}>
                            <h3>Send</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
    
    </>
    
  )
}
