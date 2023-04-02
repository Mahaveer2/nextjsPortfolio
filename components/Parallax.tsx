import React, { useState, useEffect } from 'react';

interface Parallax{
  intensity:number;
  children:React.ReactNode;
}

const ParallaxComponent = ({ intensity,children }:Parallax) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const layer1Style = {
    transform: `translate3d(0, ${scrollPosition * intensity}px, 0)`,
  };

  return (
      <div className="parallax-react" style={layer1Style}>
        {children}
      </div>
  );
};

export default ParallaxComponent;
