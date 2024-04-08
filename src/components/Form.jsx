const Form = ({ handleSubmit, cityInput, handleChange }) => (
    <form className='form-container' onSubmit={handleSubmit}>
        <input type="text" value={cityInput} onChange={handleChange} placeholder="Enter city name" />
        <button type="submit">Add City</button>
    </form>
);
export default Form