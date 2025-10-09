import React from 'react';

// کامپوننت ناوبری برای نمایش گزینه‌های ورود، ثبت‌نام یا خروج
// Navigation component to show Sign In, Register, or Sign Out options
const Navigation = ({ onRouteChange, isSignIn }) => {  
  return (  
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>  
      {isSignIn ? (  // اگر کاربر وارد شده باشد، گزینه خروج نمایش داده می‌شود
        // If user is signed in, show Sign Out option
        <p  
          onClick={() => onRouteChange('signout')} // هندل تغییر مسیر به خروج
          // Handle route change to sign out
          className='fe dim black underline pe3 pointer'  
        >  
          Sign Out  
        </p>  
      ) : (  // اگر کاربر وارد نشده باشد، گزینه‌های ثبت‌نام و ورود نمایش داده می‌شود
        // If user is not signed in, show Register and Sign In options
        <>  
          <p  
            onClick={() => onRouteChange('Register')} // هندل تغییر مسیر به ثبت‌نام
            // Handle route change to Register
            className='fe dim black underline pe3 pointer'  
          >  
            Register  
          </p>  
          <p  
            onClick={() => onRouteChange('signin')} // هندل تغییر مسیر به ورود
            // Handle route change to Sign In
            className='fe dim black underline pe3 pointer'  
          >  
            Sign In  
          </p>  
        </>  
      )}  
    </nav>  
  );  
};  

export default Navigation; 
