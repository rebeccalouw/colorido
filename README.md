# Colorido 🎨 Colour Scheme Generator

#### ✨ Deployed/demo version <a href="https://main--colorido.netlify.app/" target="_blank" rel="noreferrer">https://main--colorido.netlify.app/</a> 

## Demo overview
This fully responsive project generates colour palletes based on the seed colour that the user selects, using data from 'The Color API'. 

Possible actions:
- Selecting the seed colour
- Selecting the colour scheme mode: monochrome, monochrome-dark, monochrome-light, analogic, complement, analogic-complement, triad or quad
- The app displays the colour scheme and provides the user with the option to copy the hex codes to the clipboard (by clicking on the hex code)

## Developer overview
This was the first project that I built on my own using data from an API.
- The majority of the app was built with JavaScript
- As soon as the user selects the seed colour and colour scheme mode, the information is added to the url that fetches the data from the API
- The data is saved to an array which can be mapped over to display the colour itself, hex code and colour name
- A function was added so that clicking on the hex code will copy it to the clipboard
- The mobile version retains its functionality, but had its design adapted for legibility by only displaying the hex code with the respective colour


<br/>

<img alt="demo screenshot" src="images/colorido-screenshot1.png" height="300px"/>

<div> <img alt="demo screenshot" src="images/colorido-screenshot3.png" height="350px"/> . <img alt="demo screenshot" src="images/colorido-screenshot2.png" height="350px"/>  </div>

## API
- <a href="https://www.thecolorapi.com/docs" target="_blank" rel="noreferrer">The Color API</a> 

## Author: 
👩‍💻 Rebecca Louw ![@rebeccalouw](https://github.com/rebeccalouw)

## Built with:
<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a> 
<a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a>  
