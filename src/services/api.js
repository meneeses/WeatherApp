const KEY = 'b23463a0dc3344b487e184054232605'

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
  
  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  
  return data;

};

export default fetchData;