import React, { useEffect, useState } from 'react';

const ButtonAssistant = () => {
  const [instructions] = useState({
    button1: "This button leads to your Uber App, so you can book your ride",
    button2: "This button leads to your Binance app. Go check your trades.",
    button3: "This button leads to your Whatsapp. Go check your messages.",
    button4: "Want to open your Gmail messages? This button leads you to your Gmail app.",
    button5: "You might have an emergency deadline. Go check your HNGx Slack.",
    button6: "Enough of sitting down. Go take a stroll. Break time.",
  });

  const [descriptionText, setDescriptionText] = useState('Select a button to see instructions.');
  const [modelContainerPosition, setModelContainerPosition] = useState({
    top: 0,
    left: 0,
    bottom: 'unset',
    right: 'unset',
  });

  const moveModelContainer = (xPos, yPos, height) => {
    setModelContainerPosition({
      position: 'absolute',
      top: `${yPos + height}px`,
      left: `${xPos}px`,
      bottom: 'unset',
      right: 'unset',
    });
  };

  const handleButtonClick = (buttonId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDescriptionText(instructions[`button${buttonId}`]);

    const xPos = e.target.getBoundingClientRect().x;
    const yPos = e.target.getBoundingClientRect().y;
    const height = e.target.getBoundingClientRect().height;

    moveModelContainer(xPos, yPos, height);
  };
  
  return (
    <div className=' h-screen w-full bg-cyan-400'>
      <section className='container mx-auto'>
      <h1 className='text-center text-3xl py-6 font-bold'>The Assistant</h1>
      <div className="btn-all grid container items-center justify-center px-auto mx-auto grid-cols-3 gap-20">
        <button onClick={(e) => handleButtonClick(1, e)} data-id="1"   className='rounded-lg my-7 shadow-md w-48 font-medium text-xl py-1 cursor-pointer hover:bg-cyan-700'>
          Order Uber
        </button>
        <button onClick={(e) => handleButtonClick(2, e)} data-id="2"  className='rounded-lg my-7 shadow-md w-48 font-medium text-xl py-1 cursor-pointer hover:bg-cyan-700'>
          Check Binance
        </button>
        <button onClick={(e) => handleButtonClick(3, e)} data-id="3"  className='rounded-lg my-7 shadow-md w-48 font-medium text-xl py-1 cursor-pointer hover:bg-cyan-700'>
          Open Whatsapp
        </button>
        <button onClick={(e) => handleButtonClick(4, e)} data-id="4"  className='rounded-lg my-7 shadow-md w-48 font-medium text-xl py-1 cursor-pointer hover:bg-cyan-700'>
          Open Gmail
        </button>
        <button onClick={(e) => handleButtonClick(5, e)} data-id="5"  className='rounded-lg my-7 shadow-md w-48 font-medium text-xl py-1 cursor-pointer hover:bg-cyan-700'>
          Check Slack
        </button>
        <button onClick={(e) => handleButtonClick(6, e)} data-id="6"  className='rounded-lg my-7 shadow-md w-48 font-medium text-xl py-1 cursor-pointer hover:bg-cyan-700'>
          Take a Stroll
        </button>
      </div>
      <div className="model flex justify-end align-end" style={modelContainerPosition}>
        <div id="container"></div>
        <p className="descriptions  w-64 rounded-lg text-lg font-medium p-2 shadow-lg h-24">{descriptionText}</p>
      </div>
      </section>
    </div>
  );
};

export default ButtonAssistant;
