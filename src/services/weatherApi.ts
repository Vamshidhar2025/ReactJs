const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Note: In production, this should be in environment variables

export const getWeatherForTask = async (city: string = 'London') => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Weather data fetch failed');
    }

    const data = await response.json();
    
    return {
      temp: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};