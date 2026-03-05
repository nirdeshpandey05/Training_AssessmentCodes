import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Demo6Feb from "./Demo6Feb";
import ProtectedRoute from "./ProtectedRoute";

function Launcher() {
    return ( 
        <>
            <hr></hr>            
            <Link to="/">Home</Link>
            {"|"}
            <Link to="/About">About Us</Link>
            {"|"}
            <Link to="/Contact">Contact Us</Link>
            {"|"}
            <Link to="/Secure">Secure</Link>
            {"|"}
            <Link to="/Login">Login</Link>
            {"|"}
            <button onClick={()=>{
                sessionStorage.removeItem("isLoggedInUser");
                alert("Logged Out Successfully");
            }}>Logout</button>
            <hr></hr>
            <Routes>
                    <Route path="/" element={
                        <ProtectedRoute>
                            <Home/>
                        </ProtectedRoute>
                    } />
                    <Route path="/home" element={
                        <ProtectedRoute>
                            <Home/>
                        </ProtectedRoute>
                    } />
                    {/* <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Home/>} /> */}
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />

                    <Route path="/secure" 
                           element={<ProtectedRoute>
                                        <Demo6Feb/>
                                  </ProtectedRoute>} />

                    <Route path="/login" element={<Login/>} />
                    <Route path="*" element={<><h1>Resource Not Found</h1></>} />
            </Routes>
            <hr></hr>
                <center>
                    This is footer!
                </center>
            </>
    );
}

export default Launcher;