const puppeteer = require('puppeteer');
const gsap = require('gsap');

// Function to create and animate the element
const createAndAnimateElement = async () => {
  // Create a new browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();
  await page.setViewport({ width: 400, height: 400 });

  // Load a blank HTML page
  await page.setContent('<html><body></body></html>');

  // Add the GSAP library to the page
  await page.addScriptTag({
    url: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js',
  });

  // Create the animation
  await page.evaluate(() => {
    const animationContainer = document.createElement('div');
    animationContainer.id = 'animation-container';
    animationContainer.style.width = '400px';
    animationContainer.style.height = '400px';

    const animationElement = document.createElement('div');
    animationElement.id = 'animation-element';
    animationElement.style.width = '100px';
    animationElement.style.height = '100px';
    animationElement.style.backgroundColor = 'green';

    animationContainer.appendChild(animationElement);
    document.body.appendChild(animationContainer);

    // Create a GSAP animation
    gsap.to(animationElement, {
      duration: 2,
      x: 200,
      rotation: 360,
      opacity: 0,
      onComplete: () => {
        console.log('Animation Complete');
      },
    });
  });

  // Wait for the animation to complete
  await page.waitForTimeout(2000);

  // Capture the animation as a PNG with a transparent background
  await page.screenshot({ path: 'animatione.png', omitBackground: true });

  // Close the browser
  await browser.close();
};

// Call the function to create and animate the element
createAndAnimateElement();
