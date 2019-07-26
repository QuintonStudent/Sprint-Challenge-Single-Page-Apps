import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        console.log(response.data.results)
        setLocations(response.data.results)
      })
      .catch(error => {
        console.log(error)
      });
  }, [])

  return <section className='location-list grid-view'>
    <h2>
      {locations.map(item => (
        <LocationCard key={item.id} name={item.name} type={item.type} dimension={item.dimension} residents={item.residents} />
      ))}
    </h2>
  </section>
}
