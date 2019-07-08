import React from 'react'
import './App.css'

import M from 'materialize-css'
M.AutoInit();

const MyComponent = () => {
  return <a className="waves-effect waves-light btn">button</a>
}

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
