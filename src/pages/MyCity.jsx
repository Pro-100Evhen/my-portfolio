import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getWeather } from '../api/weather';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiDust } from 'react-icons/wi';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const WeatherContainer = styled.div`
  position: relative;
  background: linear-gradient(135deg, rgba(16, 46, 80, 0.9) 0%, rgba(231, 139, 72, 0.9) 100%);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 2rem;
`;

const WeatherHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Temperature = styled.div`
  font-size: 4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 5rem;
    color: var(--secondary-color);
  }
`;

const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
`;

const WeatherItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  h4 {
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const getWeatherIcon = (condition) => {
  const code = condition?.code;
  if (!code) return <WiDaySunny />;

  // Базова логіка для вибору іконки на основі коду погоди
  if (code === 1000) return <WiDaySunny />; // Clear
  if (code >= 1003 && code <= 1009) return <WiCloudy />; // Cloudy
  if (code >= 1063 && code <= 1201) return <WiRain />; // Rain
  if (code >= 1204 && code <= 1237) return <WiSnow />; // Snow
  if (code >= 1273 && code <= 1282) return <WiThunderstorm />; // Thunder
  if (code >= 1030 && code <= 1039) return <WiDust />; // Mist, fog, etc.
  
  return <WiDaySunny />;
};

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather('Kyiv');
        setWeather(data);
        setLoading(false);
      } catch (err) {
        setError('Помилка при завантаженні даних про погоду');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <PageContainer>
      <Section>
        <Title>Київ - столиця України</Title>
        <p>
          Київ - найбільше місто України, її столиця, розташована на річці Дніпро. 
          Це політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. 
          Заснований у V столітті, Київ є одним з найстаріших міст Європи.
        </p>
      </Section>

      <Section>
        <Title>Погода в місті</Title>
        {loading && <p>Завантаження...</p>}
        {error && <p style={{ color: 'var(--danger-color)' }}>{error}</p>}
        {weather && (
          <WeatherContainer>
            <WeatherHeader>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {weather.location.name}, {weather.location.country}
                </h3>
                <p>{new Date(weather.location.localtime).toLocaleDateString('uk-UA', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
              </div>
              <Temperature>
                {getWeatherIcon(weather.current.condition)}
                <span>{Math.round(weather.current.temp_c)}°C</span>
              </Temperature>
            </WeatherHeader>
            <WeatherDetails>
              <WeatherItem>
                <h4>Відчувається як</h4>
                <p>{Math.round(weather.current.feelslike_c)}°C</p>
              </WeatherItem>
              <WeatherItem>
                <h4>Вологість</h4>
                <p>{weather.current.humidity}%</p>
              </WeatherItem>
              <WeatherItem>
                <h4>Вітер</h4>
                <p>{Math.round(weather.current.wind_kph)} км/год</p>
              </WeatherItem>
              <WeatherItem>
                <h4>Умови</h4>
                <p>{weather.current.condition.text}</p>
              </WeatherItem>
            </WeatherDetails>
          </WeatherContainer>
        )}
      </Section>
    </PageContainer>
  );
};

export default MyCity; 