import React, { useEffect } from "react";
import Header from "./layout/Header/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer/Footer";
import Privacy from "./pages/Privacy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "./pages/Terms";
import store from "./store";
import { Provider } from 'react-redux';

const PUBLIC_URL = process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_URL;



function App() {




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
              <Route path={`${PUBLIC_URL}`} element={<Home/>}/>
              <Route path={`${PUBLIC_URL}terms&conditions`} element={<Terms/>}/>
              <Route path={`${PUBLIC_URL}privacy&policy`} element={<Privacy/>}/>
              {/* <Route path='web3/client/web3/build/' element={<Home/>}/>
              <Route path='web3/client/web3/build/terms&conditions' element={<Privacy/>}/> */}
            </Routes>
            <Footer/>
          </div>
        </Provider>

      </Router>

  );
}

export default App;
