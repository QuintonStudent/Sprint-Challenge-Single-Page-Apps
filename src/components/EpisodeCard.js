import React from 'react'
import styled from 'styled-components';

const CardDiv = styled.div`
  border: 1px solid gray;
  margin: 25px;
  font-size: 1rem;
  text-align: center;
  padding: 25px;
`;

export default function EpisodeCard ({ component }) {
  return (
    <CardDiv>
      <div>{component.id}: {component.name}</div>
    </CardDiv>
  )
}
