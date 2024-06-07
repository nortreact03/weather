import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useState, useEffect} from 'react'
import {fetchWeatherData, getAddressLocation} from './utilities.js'
import Weather from './Weather.js';
import NewLocation from './NewLocation.js';

function App() {
  const [cities, setCities] = useState([
    {
      name: 'Tallinn',
      weatherData: null
    },
    {
      name: 'Pärnu',
      weatherData: null
    },
    {
      name: 'Tartu',
      weatherData: null
    },
  ]);
  const [weather, setWeather] = useState(null)
  const [isAddingActive, setIsAddingActive] = useState(false)
  const [activeLocation, setActiveLocation] = useState(0)

  const addLocation = (location) => {
    setCities([
      ...cities,
      {
        name: location,
        weatherData: null
      }
    ])
    setIsAddingActive(false)
    setActiveLocation(cities.length-1)
  }

  const loadLocationData = async (id) => {
    try {
      const locationData = await getAddressLocation(cities[id].name);
      console.log(locationData)
      const dataObj = await fetchWeatherData({
        lat: locationData.lat,
        long: locationData.lng,
      })
      console.log(dataObj)
      setWeather(dataObj)
    } catch (err) {
      console.log(err.message)
      setWeather({error: err.message})
    }
  }

  
  const rowClicked = (id) => {
    console.log('Click on row ' + cities[id].lat)
    setIsAddingActive(false)
    //loadLocationData(id)
    setActiveLocation(id)
  }

  useEffect(()=> {
    loadLocationData(activeLocation)
  }, [activeLocation])






  let rightPaneJsx =  (
    <>
     <h1>Current weather in </h1>
    <Weather weather={weather} />
    </>
  )
  if (isAddingActive) {
    rightPaneJsx = <NewLocation addLocation={addLocation} />
  }
  return (
    <>
    <Container>
      <Row>
        <Col>
          <h1>Cities</h1>
          {cities.map((city, index) => (
            <div key={index} onClick={() => rowClicked(index)}>
              {city.name}
            </div>
          ))}
          <button 
            className='btn btn-link'
            onClick={()=>setIsAddingActive(true)}
          >
              Add location
            </button>
        </Col>
        <Col>
         {rightPaneJsx}
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
