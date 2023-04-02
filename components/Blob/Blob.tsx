import React, { useEffect, useState } from "react";
import styles from "./blob.module.css";

const Blob = () => {
  const [position, setPosition] = useState({ x: 700, y: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate new position of the follower
      const newX = e.pageX; // subtract half of the follower's width to center it on the cursor
      const newY = e.pageY; // subtract half of the follower's height to center it on the cursor

      if(newY > window.innerHeight + 1700) return false;

      // Update the position state
      setPosition({ x: newX, y: newY });
    };

    // Add the event listener on mount
    window.addEventListener("mousemove", handleMouseMove);

    // Remove the event listener on unmount
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
      }}
      className={styles.blob}
    ></div>
  );
};

export default Blob;
