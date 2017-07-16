// The simplest React app
import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
   
   const reactNode = document.getElementById('react-node')

   const jsxElement = <h1>Hello, React!</h1>
 
   ReactDOM.render(jsxElement, reactNode)

})

/* 
NOTES: 
   1. import Statements
      a. import is the ES6 form of require
      b. The React library will let us write JSX
      c. The ReactDOM library will render the React elements on the DOM

   2. document.addEventListener('DOMContentLoaded', () => {})
      a. Before we can bootstrap an app, we need the DOM to load
      b. AngularJS does exactly this before using your ng-app directive to bootstrap

   3. document.getElementById('react-node')
      a. In order to bootstrap the app, we need a DOM node
      b. AngularJS gets this node through ng-app, but you can also declare one manually and bootstrap it
   
   4. const jsxElement = <h1>Hello, React!</h1>
      a. This may look like an HTML string, but it is a JSX Element
      b. Notice the lack of quotation marks
      c. In the background, React runs a method called React.createElement(), which creates a JavaScript object from your JSX
      d. This JSX allows us to write JavaScript and HTML together
      e. JSX also has a lot of protection built into it to prevent malicious user input (like XSS attacks)

   5. ReactDOM.render(jsxElement, reactNode)
      a. Finally, we render the JSX element on the DOM

   */
/* 
TODO: Change the JSX element
   1. Write a different HTML element or change the text content

   2. Write a function to return a JSX element

   3. Use the function to add expressions or conditions
*/