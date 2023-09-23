import React from "react";
import Navbar from "./component/Navbar";
import { Routes,Route, Navigate} from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Blog from './component/Blog'
import ErrorPage from './component/ErrorPage'
import Home from './component/Home'
import Searchparams from './component/Searchparams'
import Params from "./component/Params";
function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
        {/* <Route path="*" element={<Navigate to="/"/>}></Route> */}
        <Route path="/user/:name" element={<Params/>}></Route>
        <Route path="/searchparams" element={<Searchparams/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
