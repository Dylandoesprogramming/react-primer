import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
   
   const reactNode = document.getElementById('react-node')

   setInterval(function(){
      const time = new Date().toLocaleString()
      const jsxElement = <h1>The current time is {time}</h1>
      ReactDOM.render(jsxElement, reactNode)
   }, 1000)
})