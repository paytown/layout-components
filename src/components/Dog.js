import React from 'react';
import dogPic from '../assets/timmothy.jpeg';

export default function Header() {
  const dog = {
    name: 'Jimmothy',
    age: '311',
    sign: 'virgo'
  };

  return (
    <main>
      <h3>Name</h3>
      <p>{dog.name}</p>

      <h3>Age</h3>
      <p>{dog.age}</p>

      <h3>Sign</h3>
      <p>{dog.sign}</p>

      <img src={dogPic} />
    </main>
  );
}
