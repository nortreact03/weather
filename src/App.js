import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useState} from 'react'
import {fetchWeatherData} from './utilities.js'
import Weather from './Weather.js';

function App() {
  const [cities, setCities] = useState([
    {
      name: 'Tallinn',
      lat: 59.437,
      long: 24.75,
      weatherData: null
    },
    {
      name: 'Pärnu',
      lat: 58.391,
      long: 24.4953,
      weatherData: null
    },
    {
      name: 'Tartu',
      lat: 58.3780,
      long: 26.7290,
      weatherData: null
    },
  ]);

  const [weather, setWeather] = useState(null)

  const rowClicked = async (id) => {
    console.log('Click on row ' + cities[id].lat)
    const dataObj = await fetchWeatherData({
      lat: cities[id].lat,
      long: cities[id].long,
    })
    console.log(dataObj)
    setWeather(dataObj)
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
        </Col>
        <Col>
          <h1>Current weather in </h1>
          <Weather weather={weather} />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
