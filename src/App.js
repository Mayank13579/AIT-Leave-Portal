import React from "react";
import Login from './Login';
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route,Link,Navigate} from 'react-router-dom';
import Homepage from "./Homepage";
import './App.css';
import Stu from "./student";
const App=()=>{
    const user=true;
    return (
        <BrowserRouter>
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/stu" element={<Stu/>}/>
        </Routes>

        </>
        </BrowserRouter>
    );
}
export default App;