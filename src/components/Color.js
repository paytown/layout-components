import React from 'react';

export default function Color() {
  const name = 'sunshine';
  const rgb = {
    red: 255,
    green: 299,
    blue: 0
  };

  const style = {
    backgroundColor: `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, 1)`,
    borderRadius: '10px',
    width: '50px',
    height: '50px'
  };

  return (
    <>
      <h2>
        {name}
      </h2>
      <div style={style}></div>
      <h3>RGB</h3>
      <ul>
        <li>Red: {rgb.red}</li>
        <li>Green: {rgb.green}</li>
        <li>Blue: {rgb.blue}</li>
      </ul>
    </>
  );
}
