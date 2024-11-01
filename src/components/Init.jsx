import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLoading } from '../context/LoadingContext';

export default function Init() {
  const { isLoading } = useLoading();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false
    });

    const dots = document.querySelectorAll('.transforming-dot');
    const phrases = [
      ['L', 'o', 'a', 'd', 'i', 'n', 'g'],
      ['A', 'b', 'b', 'y', 'B', 'o', 't'],
      ['S', 'm', 'i', 'l', 'e', ':', ')'],
      ['W', 'e', 'l', 'c', 'o', 'm', 'e'],
      ['R', 'e', 'a', 'd', 'y', '?', '?'],
      ['A', 'w', 'e', 's', 'o', 'm', 'e'],
      ['A', 'b', 'i', 'g', 'a', 'i', 'l']
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
          }, 700);
        }, index * 500);
      });
    }

    function resetDots() {
      dots.forEach(dot => {
        dot.textContent = '.';
        dot.setAttribute('data-aos', 'zoom-out');
      });
      setTimeout(transformDots, 1000);
    }

    transformDots();
    const interval = setInterval(() => {
      resetDots();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <main className='bg-navbar vh100 m-0 d-flex flex-center flex-center-items' style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      background: 'linear-gradient(180deg, #b45428 0%, #a85733 25%, #9e5a37 60%, #b65930 100%)', 
      fontFamily: "'Poppins', sans-serif", 
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
          transition: 'opacity 1.2s ease, transform 1.2s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 1.2s ease, transform 1.2s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 1.2s ease, transform 1.2s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 1.2s ease, transform 1.2s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 1.2s ease, transform 1.2s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 1.2s ease, transform 1.2s ease' 
        }}>.</span>
        <span className="transforming-dot" data-aos="fade-in" style={{ 
          opacity: 1, 
          transition: 'opacity 1.2s ease, transform 1.2s ease' 
        }}>.</span>
      </div>
    </main>
  );
}
