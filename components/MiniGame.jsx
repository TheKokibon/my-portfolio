import { useState, useEffect } from "react";

export default function MiniGame({ onProgress }) {
  const [outerRadius, setOuterRadius] = useState(300);  // Outer shrinking circle
  const [middleRadius, setMiddleRadius] = useState(150); // Bigger middle circle
  const [innerRadius, setInnerRadius] = useState(40);    // Smaller inner circle
  const [gameActive, setGameActive] = useState(true);    // Controls if the game is active
  const [message, setMessage] = useState("Beat the game to win the prize 🎁");            // Success/failure message
  const [circlePosition, setCirclePosition] = useState({ top: "50%", left: "50%" }); // Position of the circle container

  // Shrinking effect for outer circle
  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      setOuterRadius((prevRadius) => (prevRadius > 10 ? prevRadius - 5 : prevRadius));
    }, 50);

    return () => clearInterval(interval);
  }, [gameActive]);

  const getRandomPosition = () => {
    const maxTop = window.innerHeight - 400; // Ensure the circle group stays within the screen height
    const maxLeft = window.innerWidth - 400; // Ensure the circle group stays within the screen width
    const randomTop = Math.random() * maxTop;
    const randomLeft = Math.random() * maxLeft;
    return { top: `${randomTop}px`, left: `${randomLeft}px` };
  };

  const handleClick = () => {
    // Check if the outer circle is within the "gray area" between middle and inner circles
    if (outerRadius <= middleRadius && outerRadius >= innerRadius) {
      setMessage("Success! 🎉");  // Success message
      onProgress();  // Notify parent of success
      setInnerRadius((prev) => prev + 10);  // Faster growth for the inner circle
      setOuterRadius(300);  // Reset the outer shrinking circle
    } else {
      setMessage("Missed! 😞 Try again!");  // Failure message
      setGameActive(false);  // Disable game temporarily
      setTimeout(() => {
        setOuterRadius(300);  // Reset the outer circle for retry
        setGameActive(true);   // Reactivate the game
      }, 1000);  // 1 second delay before retry
    }

    // Move the circle group to a new random position after each click
    setCirclePosition(getRandomPosition());
  };

  return (
    <div className="relative w-full h-full bg-black text-white flex items-center justify-center">
      {/* Title: Kokibon (placed at the top using absolute positioning) */}
      <div className="absolute top-6 w-full text-center">
        <h1 className="text-4xl font-bold">Kokibon</h1>
      </div>

      {/* Circle Container (centered and clickable) */}
      <div
        className="absolute"
        style={{
          top: circlePosition.top,
          left: circlePosition.left,
          transform: "translate(-50%, -50%)", // Keep the circles centered in their container
          width: `${outerRadius * 2}px`, // Set width and height for the clickable area
          height: `${outerRadius * 2}px`, // Set width and height for the clickable area
          cursor: "pointer", // Pointer cursor for clicking
          zIndex: 10, // Ensure the circles container is clickable
        }}
        onClick={handleClick}
      >
        {/* Outer shrinking circle */}
        <div
          style={{
            width: `${outerRadius * 2}px`,
            height: `${outerRadius * 2}px`,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Light transparent background
            border: "4px solid rgba(255, 255, 255, 0.5)", // Thicker border for better visibility
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1, // Ensure the outer circle is behind others
          }}
        />

        {/* Middle larger fixed circle */}
        <div
          style={{
            width: `${middleRadius * 2}px`,
            height: `${middleRadius * 2}px`,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle background to enhance visibility
            border: "4px solid #ffffff", // White border for contrast
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Keep middle circle centered
            zIndex: 2, // Middle layer
          }}
        />

        {/* Inner smaller expanding target circle with prettier color */}
        <div
          style={{
            width: `${innerRadius * 2.5}px`,
            height: `${innerRadius * 2.5}px`,
            borderRadius: "50%",
            backgroundColor: "#00bcd4", // Solid background color for inner circle
            border: "4px solid #ffffff", // White border for clarity
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Keep inner circle centered
            zIndex: 3, // Ensure the inner circle is on top
          }}
        />
      </div>

      {/* Success or Failure Message (positioned at the bottom using absolute positioning) */}
      <div className="absolute bottom-6 w-full text-center">
        <p className="text-2xl">{message}</p>
      </div>
    </div>
  );
}
