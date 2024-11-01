import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLoading } from '../context/LoadingContext';

export default function Init() {
  const { isLoading } = useLoading();

  useEffect(() => {
    AOS.init({
      duration: 400, 
      easing: 'ease-in-out',
      once: false
    });

    const dots = document.querySelectorAll('.transforming-dot');
    const phrases = [
      ['L', 'o', 'a', 'd', 'i', 'n', 'g'],
      ['A', 'b', 'b', 'y', 'B', 'o', 't'],
      ['S', 'm', 'i', 'l', 'e', ':', ')'],
      ['W', 'e', 'l', 'c', 'o', 'm', 'e'],
      ['A', 'b', 'i', 'g', 'a', 'i', 'l'],
      ['H', 'e', 'l', 'l', 'o', '!', '!'],
      ['X', '*', 'X', '=', 'X', '²', '!'],
      ['F', 'N', 'D', '0', 'Z', '3', 'R'],
      ['Y', '*', 'Y', '=', 'Y', '²', ':)'],
      ['L', 'e', 't', '\'', 's', ' ', ':)'],
      ['M', 'o', 'r', 'e', ' ', '!', '!'],
      ['<', '3', 'A', 'b', 'b', 'y', '<'],
      ['L', 'u', 'c', 'k', 'y', '!', ':)'],
      ['T', 'r', 'u', 'e', '=', ':)', ')'],
      ['P', 'r', 'o', 'g', 'r', 'a', 'm'],
    ];

    function getRandomPhrase() {
      return phrases[Math.floor(Math.random() * phrases.length)];
    }

    function transformDots() {
      const symbols = getRandomPhrase();
      dots.forEach((dot, index) => {
        setTimeout(() => {
          dot.setAttribute('data-aos', 'zoom-out');
          setTimeout(() => {
            dot.textContent = symbols[index] || '';
            dot.setAttribute('data-aos', 'zoom-in');
          }, 250); 
        }, index * 150); 
      });
      setTimeout(resetDots, dots.length * 150 + 250); // Call resetDots after all dots have been transformed
    }

    function resetDots() {
      dots.forEach(dot => {
        dot.textContent = '.';
        dot.setAttribute('data-aos', 'zoom-out');
      });
      setTimeout(transformDots, 0); // Call transformDots after all dots have been reset
    }

    transformDots();

    // Delete clearInterval to stop the animation
    return () => {};
  }, []);

  if (!isLoading) return null;

  return (
    <main className='bg-navbar vh100 m-0 d-flex flex-center flex-center-items' style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      background: 'linear-gradient(180deg, #b45428 0%, #a85733 25%, #9e5a37 60%, #b65930 100%)', 
      fontFamily: "'Roboto', sans-serif", 
      margin: 0 
    }}>
      <div id="eyecatch" style={{ 
        fontSize: '8rem', 
        color: '#ffffff', 
        display: 'flex', 
        gap: '20px' 
      }}>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 0.6s ease, transform 0.6s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 0.6s ease, transform 0.6s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 0.6s ease, transform 0.6s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 0.6s ease, transform 0.6s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 0.6s ease, transform 0.6s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 0.6s ease, transform 0.6s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 0.6s ease, transform 0.6s ease' 
        }}>.</span>
      </div>
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        fontSize: '2rem', 
        color: '#ffffff' 
      }}>
        AbbyBot-Dashboard
      </div>
    </main>
  );
}
