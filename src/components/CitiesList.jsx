import City from "./City";
const CitiesList = ({ cities, weatherData }) => (
    <div>
        {cities.map((city, index) => (
            <City key={city} city={city} weatherData={weatherData} index={index} />
        ))}
    </div>
);

export default CitiesList