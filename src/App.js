import React from 'react';

function App() {
  return (
    <React.Fragment>
    <label htmlFor="bar">bar</label>
      <input id="bar" type="text" onChange={() => {console.log('aaa')}}/>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  );
}
const Cat = () => {
  return(
  <React.Fragment>
    <p>Meow!</p>
  </React.Fragment>
  )
}
export default App;
