import React from 'react'

export default function CharacterCard ({ name, status, origin, image, species, location, episodes }) {
  return (
    <div className='card'>
      <img src={image} />
      <div>{name}</div>
      <div>{species} {status}</div>
      <br />
      <div>Location: {location}</div>
      <div>Origin: {origin}</div>
      <br />
      <button>episodes</button>
    </div>
  )
}
