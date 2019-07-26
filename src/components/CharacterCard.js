import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  border: 1px solid gray;
  margin: 25px;
  font-size: 1rem;
  text-align: center;
  padding: 25px;
`;

const CardImg = styled.img`
  width: 75%;
`;

export default function CharacterCard ({ name, status, origin, image, species, location, episodes }) {
  return (
    <CardDiv>
      <CardImg src={image} />
      <div>{name}</div>
      <div>{species} {status}</div>
      <div>Location: {location}</div>
      <div>Origin: {origin}</div>
      <button>episodes</button>
    </CardDiv>
  )
}
