import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

function Weather({weather}) {
    if (!weather) {
        return <h3>Click on city name</h3>
    }

    let backroundStyle = 'defaultStyle'

    if (weather.current_weather.temperature > 20) {
        backroundStyle = 'beach'
    }

    return (
        <div>
            <h4>show here selected city name</h4>
            <Row>
                <Col>
                    Lattitude
                </Col>
                <Col>
                    {weather.latitude}
                </Col>
            </Row>
            <Row>
                <Col>
                    Longitude
                </Col>
                <Col>
                    {weather.longitude}
                </Col>
            </Row>
            <Row>
                <Col>
                    Current weather
                </Col>
                <Col>
                    <div>Temperature: {weather.current_weather.temperature}</div>
                    <div>Wind speed: {weather.current_weather.windspeed}</div>
                </Col>
            </Row>
        </div>
    )

}

export default Weather