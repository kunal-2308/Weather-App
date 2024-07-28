import MainContext from './MainContext';
import React,{useState,useEffect} from 'react'
function MainState(props) {
  const [location, setLocation] = useState('New Delhi');
  const [days, setDays] = useState(1);
  const [response, setResponse] = useState({}); // Initialize with an empty object

  const url = `http://api.weatherapi.com/v1/forecast.json?key=33d5c5117b78414490f45847242507&q=${location}&days=${days}&aqi=no&alerts=yes`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        let data = await response.json();
        console.log('Fetched data:', data); // Log to verify data
        setResponse(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    fetchData();
  }, [location, days]);

  return (
    <MainContext.Provider
      value={{
        location,
        setLocation,
        days,
        setDays,
        response,
      }}>
      {props.children}
    </MainContext.Provider>
  );
}

export default MainState;