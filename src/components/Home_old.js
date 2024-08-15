import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    console.log("+++")
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8d680c10b6msh9b3135e94f673c4p15e050jsn9f9a5dedb5e0',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    fetchData();
  };

  return (
    <div className='main'>
        <div className="home">
        <input
            type="text"
            placeholder="Enter the city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        {data && (
            <div>
            <h3>Weather Data for {city}: {data.wind.speed}</h3>
            <h3>Weather Data for {city}: {data.weather[0].main}</h3>
            </div>
        )}
        </div>
        <div className='history'>
            <Link to="history"><button>History</button></Link>
        </div>
    </div>
  );
};

export default Home;
