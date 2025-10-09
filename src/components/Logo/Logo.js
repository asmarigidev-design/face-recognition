import React from 'react';
import './Logo.css';
import { FaBrain } from 'react-icons/fa'; // آیکون مغز از کتابخانه react-icons
// Brain icon from react-icons library

// کامپوننت لوگو شامل آیکون، افکت‌ها و متن معرفی
// Logo component with icon, effects, and title text
const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-brain">
        <div className="brain-icon-wrapper">
          <FaBrain className="brain-icon" />
        </div>
        <div className="logo-glow"></div> 
        <div className="logo-particles">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="particle" style={{ '--i': i }}></div> // ذرات متحرک برای زیبایی بصری
            // Animated particles for visual effect
          ))}
        </div>
      </div>
      <div className="logo-text">
        <span className="logo-title">MagicBrain</span> 
        <span className="logo-subtitle">AI Face Detection</span>
      </div>
    </div>
  );
}

export default Logo; 
