import React, { useState } from 'react';
import Form from './Form';
import CitiesList from './CitiesList';
import ErrorMessage from './ErrorMessage';
const FetchWeather = () => {
    const [cities, setCities] = useState([]);
    const [cityInput, setCityInput] = useState('');
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setCityInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiKey = process.env.REACT_APP_OM;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('City not found. Please enter a valid city name.');
                } else {
                    throw new Error('Failed to fetch weather data. Please try again later.');
                }
            }
            const data = await response.json();
            setWeatherData([...weatherData, data]);
            setCities([...cities, cityInput]);
            setCityInput('');
            setError(null);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError(error.message);
        }
    };

    return (
        <div>
            <Form handleSubmit={handleSubmit} cityInput={cityInput} handleChange={handleChange} />
            <ErrorMessage error={error} />
            <CitiesList cities={cities} weatherData={weatherData} />
        </div>
    );
};

export default FetchWeather;