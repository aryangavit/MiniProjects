import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainContainer from './components/mainContainer';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [data, setData] = useState();

  const fetchData = async () => {
    const apiKey = "d5774511ff2f3efe9b6a71ed9d0396f1";

    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}  &appid=${apiKey}`);
      setWeatherData(res.data);
      console.log(res.data);
    } catch (error) {

    }
  }

  return (
    <div className='border h-screen flex flex-col justify-center items-center'>
      <div className='mb-5 w-[400px]'>
        <input type="text" className='w-[80%] px-3 py-2 rounded-lg' onChange={(e) => {
          setData(e.target.value);
        }} />
        <button
          onClick={() => {
            fetchData();
          }}
          className="bg-blue-500 w-[20%] text-white font-bold px-3 py-2 rounded-lg">Submit</button>
      </div>
      {}
    </div>
  )
}

export default App