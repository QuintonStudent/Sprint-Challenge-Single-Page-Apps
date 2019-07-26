import React from 'react'
import styled from 'styled-components';

const CardDiv = styled.div`
  border: 1px solid gray;
  margin: 25px;
  font-size: 1rem;
  text-align: center;
  padding: 25px;
  width: 500px;
`;

export default function EpisodeCard ({ component }) {
  return (
    <CardDiv>
      <h1>{component.id}: {component.name} ({component.episode})</h1>
      <div>Air Date: {component.air_date}</div>
      <div>Number of Characters: {component.characters.length}</div>
    </CardDiv>
  )
}
