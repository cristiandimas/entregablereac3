import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article className='location__container'>
      <h2 className='location__title'>{location?.name}</h2>
      <ul className='location__list'>
        <li><span>Type: </span>{location?.type}</li>
        <li><span>Dimension: </span>{location?.dimension}</li>
        <li><span>Population: </span>{location?.residents.length}</li>
      </ul>
    </article>
  )
}

export default LocationInfo