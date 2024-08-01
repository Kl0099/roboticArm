import React, { useRef, useEffect } from "react";

const NewButton = ({ onClick, title }) => {
  const intervalRef = useRef(null);

  const handleMouseDown = () => {
    // Run the function immediately when the button is pressed
    onClick();
    // Set up an interval to run the function continuously while the button is pressed
    intervalRef.current = setInterval(onClick, 100); // Adjust the interval as needed
  };

  const handleMouseUp = () => {
    // Clear the interval when the button is released
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Clear the ref value
  };

  useEffect(() => {
    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Ensure the interval stops if the mouse leaves the button
        onTouchStart={handleMouseDown} // For touch devices
        onTouchEnd={handleMouseUp} // For touch devices
      >
        {title}
      </button>
    </div>
  );
};

export default NewButton;
