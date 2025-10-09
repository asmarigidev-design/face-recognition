import React from 'react'

// کامپوننت فرم ثبت‌نام برای ورود اطلاعات کاربر
// Registration form component for user input
const Register = ({onRouteChange}) => {
    return (
<article className="br3 ba  b--black-10 mv5 w-100 w-50-m w-25-l mw8 shadow-5 center">
<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Register</legend> 
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="text" name="name"  id="name" /> 
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="email" name="email-address"  id="email-address" /> 
   
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label> 
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="password" name="password"  id="password" /> 
       
      </div>
    </fieldset>
    <div className="">
      <input onClick={ () => onRouteChange('home')} // تغییر مسیر به صفحه اصلی پس از ثبت‌نام
      // Navigate to home page after registration
       // دکمه ثبت‌نام
      // Register button
     className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Register" />
    </div>
  </div>
</main>
</article>

        )
}

export default Register; 
