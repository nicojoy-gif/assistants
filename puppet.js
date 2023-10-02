const puppeteer = require('puppeteer');

const exportVideo = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 400, height: 400 });
  
  // Load HTML content with GSAP library
  await page.setContent(`
    <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
    </head>
    <body>
      <div id="animation-container" style="width: 400px; height: 400px;">
        <div id="animation-element" style="width: 100px; height: 100px; background-color: green;"></div>
      </div>
      <script>
        // Create a GSAP animation
        const animationElement = document.getElementById('animation-element');
        gsap.to(animationElement, {
          duration: 2,
          x: 200,
          rotation: 360,
          opacity: 0,
          onComplete: () => {
            // Callback when the animation is complete
            console.log('Animation Complete');
          },
        });
      </script>
    </body>
    </html>
  `);

  console.log('HTML content loaded.');

  await page.waitForTimeout(2000); // Wait for the animation to complete
  console.log('Animation completed.');

  await page.screenshot({ path: 'animationss.png', omitBackground: true }); // Capture as a PNG with transparency
  console.log('Screenshot captured.');

  await browser.close();
  console.log('Browser closed.');
};

exportVideo();
