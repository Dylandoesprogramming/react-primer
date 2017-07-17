/* 
YOUR TURN!
   Get our app going by adding the code below:
*/
// STEP 1: Import react and react-dom
import React from 'react'
import ReactDOM from 'react-dom'
// STEP 2: Add an event listener to the document for 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', () => {

// STEP 3: Inside the callback function of the event listener, do the following:
   // 1. Get the DOM node by id to bootstrap the app
   const reactNode = document.getElementById('react-node')
   // 2. Create a JSX element and assign it to a variable
   const element = <h1>Hello, React</h1>
   // 3. Call the render method of ReactDOM to render the JSX to the DOM node
   ReactDOM.render(element, reactNode)

   // Uncomment this line for step 5
   ReactDOM.render(<App />, reactNode)

})
// STEP 4: Add style
   // 1. import style.css
   // 2. Add a className to your jsx element
   // 3. Write styles for that class in style.css
   
   // Move this line to the top
   import './style.css'

   // STEP 5: Import a component
   // 1. import the component at components/App.js
   // 2. Now write the component in that file.

   // Move this line up, too
   import App from './components/App/App.js'