

import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch'
import LocationInfo from './components/LocationInfo'
import ResidentInfo from './components/ResidentInfo'

function App() {
  
  const [location, setLocation] = useState()
  const [locationnumber, setLocationnumber] = useState()  
  const [hasError, setHasError] = useState(false)
  
 
  useEffect(() => {
    //ubicaciones van de la 1 a la 126
    let URL
    if (locationnumber) {
      URL = `https://rickandmortyapi.com/api/location/${locationnumber}`      
    }
    else {
      const randomLocation = Math.floor(Math.random() * 126) +1 
      URL = `https://rickandmortyapi.com/api/location/${randomLocation}`
    }    
    axios.get(URL)
    .then((result) => { setLocation(result.data)
      setHasError(false)
    }).catch((err) => { console.log(err);
      setHasError(true)
    });
 
  }, [locationnumber])


  const handledSubmit = (e) => {
      e.preventDefault()
      setLocationnumber(e.target.locationnumber.value)
  }  
  
  return (
    <div className="App">
      <h1 className='App__title'><img src="/titleprimarybanner.svg" alt="" /></h1>
      <form onSubmit={handledSubmit}>
        <input type="text"  id='locationnumber' placeholder='type a location id'/>
        <button>Search</button>
      </form>
      {
        hasError ?
         <ErrorFetch />
        :
        <>
        <LocationInfo location = {location}/>
        <div className='card__container'>
          
            {
              location?.residents.map(residentUrl => (
                <ResidentInfo  key={residentUrl} residentUrl = {residentUrl}/>
                ))
              }
          </div>          
         
        </>
      }
    </div>
  )
}

export default App
