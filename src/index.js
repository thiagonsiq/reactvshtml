import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const render = () => {
  document.getElementById('root').innerHTML = ` 
    <div>
      Hello HTML
      <input />
      <pre>${(new Date).toLocaleTimeString()}</pre>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      'div', 
      null, 
      'Hello React',
      React.createElement('input', null),
      React.createElement('pre', null, (new
      Date).toLocaleTimeString())
    ),
    document.getElementById('root2'),
  );
}

setInterval(render, 1000);