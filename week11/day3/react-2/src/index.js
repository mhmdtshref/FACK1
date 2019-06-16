import React from 'react';
import { render } from 'react-dom';
// here we're destructing the render method from React dom vs ReactDOM.render
const App = () => <h1>Hello World</h1>;
render(<App />, document.getElementById('root'));
