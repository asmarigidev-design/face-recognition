import React from 'react';
import './Chan.css';

// کامپوننت اصلی که ورودی تصویر را می‌گیرد و دکمه تشخیص چهره را نمایش می‌دهد
const Chan = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
       </p>
    <div className='form-wrapper'>
      <input
  className='input-field'
  type='text'
  onChange={onInputChange} // هندل تغییر ورودی تصویر
  // Handle image URL input change
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      onButtonSubmit(); // فعال‌سازی تشخیص با کلید Enter
      // Trigger detection on Enter key press
    }
  }}
  placeholder='Enter image URL' // راهنمای ورودی برای آدرس تصویر
  // Placeholder for image URL input
/>  <button
          className='detect-button'
          onClick={onButtonSubmit} // فعال‌سازی تشخیص با کلیک دکمه
          // Trigger detection on button click
        >
          Detect
        </button>        </div>
      </div>
          );
}

export default Chan; 
