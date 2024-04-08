import './dashboard.css'
const City = ({ city, weatherData, index }) => (
    <div className="city" key={city}>
        <h2>Weather for {city}</h2>
        {weatherData[index] ? (
            <div>
                <p>Temperature: {weatherData[index].main.temp} Kelvin</p>
                <p>Weather: {weatherData[index].weather[0].description}</p>
            </div>
        ) : <p>...Loading weather data</p>}
    </div>
);


export default City