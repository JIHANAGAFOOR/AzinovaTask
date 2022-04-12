import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Home from './components/Home/Home.jsx'
import OtpSend from './components/otpSend.jsx'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Login/>}>  </Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path="otp/:id" element={<OtpSend/>}></Route>
      <Route path="home" element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
