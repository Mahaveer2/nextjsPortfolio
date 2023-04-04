import React, { useEffect, useState } from "react";

const Blob = () => {
  const [position, setPosition] = useState({ x: 700, y: 300 });
  const [click,setClick] = useState(false);
  const className = `blob`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate new position of the follower
      const newX = e.pageX; // subtract half of the follower's width to center it on the cursor
      const newY = e.pageY; // subtract half of the follower's height to center it on the cursor

      // Update the position state
      setPosition({ x: newX, y: newY });
    };


    // Add the event listener on mount
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click",() => {
      setClick(true);
      setTimeout(() => setClick(false),500)
    })

    // Remove the event listener on unmount
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="h-full absolute overflow-hidden w-full">
      <div
      style={{
        transform: `${click ? "scale(1.3)" : "scale(1)"} translate(${position.x - (click ? 350:200)}px, ${position.y - (click ? 350:200)}px)`,
      }}
      className={className}
    ></div>
    </div>
  );
};

export default Blob;
