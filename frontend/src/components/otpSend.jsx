import React from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
function OtpSend() {
    const {id}=useParams()
    console.log("id"+JSON.stringify(id));
   const sendOTP=()=>{
axios.get(`http://localhost:1235/otp/${id}`).then((data)=>{
console.log("backend data"+ JSON.stringify(data));
})
    }
  return (
    <div>
      <Button onClick={sendOTP}>Send OTP</Button>
    </div>
  )
}

export default OtpSend
