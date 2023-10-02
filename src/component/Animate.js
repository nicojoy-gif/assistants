import React, { useEffect } from 'react';
import gsap from 'gsap';

const TransparentAnimation = () => {
  useEffect(() => {
    const animationElement = document.getElementById('animation-element');

    // Create a colorful GSAP animation
    gsap.to(animationElement, {
      duration: 2,
      x: 200,
      rotation: 360,
      opacity: 1, // Set opacity to 1 to make the element fully visible
      backgroundColor: 'rgba(255, 0, 0, 0.7)', // Change the background color to red with transparency
      borderRadius: '10%', // Adjust the border radius for a different shape
      boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)', // Add a colorful shadow
      onComplete: () => {
        // Callback when the animation is complete
        console.log('Animation Complete');
      },
    });
  }, []);

  return (
    <div style={containerStyle}>
      <div
        id="animation-element"
        style={animationElementStyle}
      ></div>
    </div>
  );
};

// Define CSS styles for the container and animation element
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: '#f0f0f0', // Background color for the container
};

const animationElementStyle = {
  width: '100px',
  height: '100px',
  backgroundColor: 'rgba(255, 0, 0, 0.7)', // Initial background color (red with transparency)
  borderRadius: '10%', // Initial border radius
  boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)', // Initial colorful shadow
};

export default TransparentAnimation;
