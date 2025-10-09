import React from 'react';
import Navigation from './components/Navigation/Navigation.js'; // کامپوننت ناوبری
import Logo from './components/Logo/Logo.js'; // لوگوی برنامه
import Chan from './components/Chan/Chan.js'; // ورودی تصویر و دکمه تشخیص
import Rank from './components/Rank/Rank.js'; // نمایش رتبه کاربر
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'; // نمایش تصویر و جعبه چهره
import Signin from './components/Signin/Signin.js'; // فرم ورود
import Register from './components/Register/Register.js'; // فرم ثبت‌نام

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '', // مقدار ورودی تصویر
      imageUrl: '', // آدرس تصویر برای نمایش
      box: {}, // مختصات جعبه تشخیص چهره
      route: 'signin', // مسیر فعلی (signin, register, home)
      isSignIn: false, // وضعیت ورود کاربر
      isLoading: false // وضعیت بارگذاری تصویر
    };
  }

  onButtonSubmitTest = () => {
    this.setState({
      imageUrl: this.state.input,
      isLoading: true // فعال‌سازی حالت بارگذاری
    });

    setTimeout(() => {
      const image = document.getElementById('inputimage'); // گرفتن تصویر از DOM
      if (image) {
        image.onload = () => {
          // محاسبه مختصات جعبه تشخیص چهره
          const width = Number(image.width);
          const height = Number(image.height);
          const boxWidth = Math.min(width * 0.4, 200);
          const boxHeight = Math.min(height * 0.5, 250);
          const leftCol = (width - boxWidth) / 2;
          const topRow = (height - boxHeight) / 3;

          const testBox = {
            leftCol,
            topRow,
            rightCol: width - (leftCol + boxWidth),
            bottomRow: height - (topRow + boxHeight)
          };

          this.displayFaceBox(testBox); // نمایش جعبه چهره
          this.setState({ isLoading: false }); // پایان بارگذاری
        };

        if (image.complete) {
          image.onload(); // اجرای دستی onload اگر تصویر قبلاً بارگذاری شده
        }
      } else {
        // حالت پیش‌فرض اگر تصویر یافت نشد
        const testBox = {
          leftCol: 100,
          topRow: 100,
          rightCol: 300,
          bottomRow: 300
        };
        this.displayFaceBox(testBox);
        this.setState({ isLoading: false });
      }
    }, 1500); // تأخیر برای شبیه‌سازی بارگذاری
  };

  onButtonSubmit = () => {
    this.onButtonSubmitTest(); // فراخوانی تابع تست تشخیص چهره
  };

  displayFaceBox = (box) => {
    this.setState({ box }); // ذخیره مختصات جعبه چهره در state
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value }); // ذخیره ورودی تصویر
  };

  onRouteChange = (route) => {
    this.setState({
      route,
      isSignIn: route === 'home' // تنظیم وضعیت ورود بر اساس مسیر
    });
  };

  render() {
    const { isSignIn, imageUrl, route, box, isLoading } = this.state;
    return (
      <div className="App">
        <Navigation isSignIn={isSignIn} onRouteChange={this.onRouteChange} /> {/* ناوبری بالا */}

        {route === 'home' ? (
          <div>
            <div className="one">
              <Logo /> {/* لوگو */}
              <Rank /> {/* رتبه کاربر */}
            </div>
            <div className="two">
              <Chan
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
                isLoading={isLoading} // وضعیت بارگذاری
              />
              {imageUrl && <FaceRecognition box={box} imageUrl={imageUrl} />} {/* نمایش تصویر و جعبه چهره */}
            </div>
          </div>
        ) : route === 'signin' ? (
          <Signin onRouteChange={this.onRouteChange} /> // فرم ورود
        ) : (
          <Register onRouteChange={this.onRouteChange} /> // فرم ثبت‌نام
        )}

        <div className='background-container'> {/* افکت‌های گرافیکی پس‌زمینه */}
          <div className='cosmic-particles'>
            {Array.from({ length: 50 }, (_, index) => (
              <div key={index} className='particle' style={{ '--i': index }}></div>
            ))}
          </div>
          <div className='floating-shapes'>
            <div className='shape shape-1'></div>
            <div className='shape shape-2'></div>
            <div className='shape shape-3'></div>
            <div className='shape shape-4'></div>
          </div>
          <div className='light-beams'>
            <div className='beam beam-1'></div>
            <div className='beam beam-2'></div>
            <div className='beam beam-3'></div>
          </div>
          <div className='pulse-rings'>
            <div className='ring ring-1'></div>
            <div className='ring ring-2'></div>
            <div className='ring ring-3'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App; // خروجی گرفتن از کامپوننت اصلی برای اجرا
