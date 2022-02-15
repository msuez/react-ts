import React from 'react';

interface Address {
  country: string;
  house?: number;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}

export const LiteralObject = () => {

  const person : Person = {
    name: 'Matias',
    age: 25,
    address: {
      country: 'Argentina',
    }
  }

  console.log(person);

  return (
    <>

    </>
  )
}
