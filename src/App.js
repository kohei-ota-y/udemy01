import React from 'react';

function App() {
  const profiles = [
    {name: "Taro",age:10},
    {name: "Hanako",age:5},
    {name: "NoName"}
  ]
  return (
    <React.Fragment>
    {
      profiles.map((profiles,index) => {
        return<User name={profiles.name} age={profiles.age} key={index}/>
      })
    }
    </React.Fragment>
  );
}
const User = (props) => {
  return(
  <React.Fragment>
    <p>Hi!,I am {props.name}, and {props.age} years old</p>
  </React.Fragment>
  )
}

User.defaultProps = {
  age : 1
}
export default App;
