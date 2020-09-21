import React from 'react';

function App() {
  return (
    <React.Fragment>
    <label htmlFor="bar">bar</label>
      <input id="bar" type="text" onChange={() => {console.log('aaa')}}/>
    </React.Fragment>
  );
}

export default App;
