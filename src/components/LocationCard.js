import React from 'react'
import styled from 'styled-components';

const CardDiv = styled.div`
  border: 1px solid gray;
  margin: 25px;
  font-size: 1rem;
  text-align: center;
  padding: 25px;
  width: 300px;
`;

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
    <CardDiv>
      <h1>{name}</h1>
      <div>{type} - {dimension}</div>
      <button>{residents.length} residents</button>
    </CardDiv>
  )
}
