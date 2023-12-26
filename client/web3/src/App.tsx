import React, { useEffect } from "react";
import Header from "./layout/Header/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer/Footer";
import Privacy from "./pages/Privacy";
import Modal from "./layout/Modal/Modal";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "./pages/Terms";
import store from "./store";
import { Provider } from 'react-redux';

export const PUBLIC_URL = process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_URL;



function App() {

  // const dispatch = useDispatch()




console.log(process.env.PUBLIC_URL);
console.log(PUBLIC_URL);

useEffect(() => {

  // window.process = {
  //   ...window.process,
  // };
}, []);


  return (

      <Router>
        <Provider store={store}>

          <div className="App">
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="terms&conditions" element={<Terms/>}/>
              <Route path="privacy&policy" element={<Privacy/>}/>
              {/* <Route path='web3/client/web3/build/' element={<Home/>}/>
              <Route path='web3/client/web3/build/terms&conditions' element={<Privacy/>}/> */}
            </Routes>
            <Footer/>
            <Modal/>
          </div>
        </Provider>

      </Router>

  );
}

export default App;
