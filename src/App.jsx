import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Carosal from './components/Carosal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      offset: 100, // offset (in px) from the original trigger point
      easing: 'ease-in-sine',
      delay:100
    });
  }, []);
  return (
    <div>
      <Hero />
      <Footer />
    </div>
  )
}
