import React from 'react'

function OTPverify() {
  return (
    <div>
    <p>We have sent you a verification code!</p>
    <p>Please enter the code here:</p>
    <form method="post" action="/step3">
      <input type="hidden" name="id" value="{{id}}" />
      <input type="text" name="token" />
      <input type="submit" value="Check code" />
    </form>
    </div>
  )
}

export default OTPverify
