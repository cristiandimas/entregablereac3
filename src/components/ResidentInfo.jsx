import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/residentInfo.css'

const ResidentInfo = ({residentUrl}) => {
  const [resident, setResident] = useState()
  useEffect(() => {
    axios.get(residentUrl)
    .then((result) => {setResident(result.data)
      console.log(resident)
    }).catch((err) => { console.log(err)
      
    });
  
  }, [])

 
  
  return (
    <article className='card'>
      <header className='card__header'>
      <img className='card__img' src={resident?.image} alt="" />
      <div className='card__indicator-container'>
        <span className={`card__indicator ${resident?.status}`}></span>
        <span className='card__indicator-label'>{resident?.status}</span>
      </div>
      </header>
      <section className='card__body'>
      <h3 className='card__name'>{resident?.name}</h3>
      <ul className='card__list'>
        <li className='card__item'>
          <span className='card__item-label'>Species: </span>
          <span>{resident?.species}</span>
          </li>
        <li className='card__item'>
          <span className='card__item-label'>Origin: </span>
          <span>{resident?.origin.name}</span>
          </li>
        <li className='card__item'>
          <span className='card__item-label'>Episodes where appear: </span>
          <span>{resident?.episode.length}</span>
          </li>
      </ul>
      </section>         
    </article>
  )
}

export default ResidentInfo