import React, { useState, useEffect, useRef,ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

function Fade({children}:Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = ref?.current?.getBoundingClientRect().top || 0;
      const windowHeight = window.innerHeight;

      if (top < windowHeight *0.7) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}

export default Fade;
