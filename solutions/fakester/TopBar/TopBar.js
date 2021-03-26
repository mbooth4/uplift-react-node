import React from 'react';

const TopBar = () =>{
  const style = {
    backgroundColor: 'green',
    padding: '10px',
    color: 'white'
  }

  return (
    <div style={style} className="TopBar">
      <h1>FakeSter!</h1>
    </div>
  ); 
}

export default TopBar;