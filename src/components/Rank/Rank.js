import React from 'react';
import './Rank.css'; 

// کامپوننت نمایش رتبه فعلی کاربر
// Component to display user's current rank
const Rank = () => {
  return (
    // متن معرفی رتبه کاربر
        // Text showing user's rank message
         // مقدار رتبه فعلی کاربر
        // User's current rank value
    <div className='rank-container'>
      <div className='rank-text'>
        {'rigi , your current rank is ...'} 
      </div>
      <div className='rank-number'>
        {'#47'}
      </div>
    </div>
  );
};

export default Rank; 
