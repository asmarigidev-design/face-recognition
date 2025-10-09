import React from 'react';
import './FaceRecognition.css';

// کامپوننتی برای نمایش تصویر و جعبه تشخیص چهره
// Component to display image and face detection box
const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='face-container'>
      <div className='image-wrapper'>
        <img
          id='inputimage'
          alt='Detected face' // توضیح تصویر برای دسترسی‌پذیری
          // Image description for accessibility
          src={imageUrl} // آدرس تصویر ورودی برای نمایش
          // Source of input image to display
          className='responsive-image' // کلاس برای تنظیم واکنش‌گرایی تصویر
          // Class for responsive image styling
        />
        <div
          className='bounding-box' // جعبه‌ای برای نمایش ناحیه تشخیص چهره
          // Box to highlight detected face area
          style={{
            top: box.topRow, // موقعیت بالا از داده‌های تشخیص
            bottom: box.bottomRow, // موقعیت پایین از داده‌های تشخیص
            right: box.rightCol, // موقعیت راست از داده‌های تشخیص
            left: box.leftCol, // موقعیت چپ از داده‌های تشخیص
            // Positioning the bounding box based on detection data
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition; 
