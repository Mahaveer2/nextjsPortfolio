import React, { useState, useEffect } from "react";

const Typewriter = ({ text }:{text:string}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        clearInterval(intervalId);
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, [text]);

  return <>{displayText}</>;
};

export default Typewriter;