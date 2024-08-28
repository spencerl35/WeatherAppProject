import React, { useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WeatherMenu from './WeatherMenu';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [homePage, setHomePage] = React.useState(true);
  const changePage = useCallback((isHomePage) => {
    setHomePage(isHomePage)
  }, [setHomePage])

  const SetPage = ({home}) => {
    return (
    home ? <WeatherMenu setHomePage={changePage} /> : <WeatherDisplay setHomePage={changePage}/>
    );
  }

  return (
      <SetPage home={homePage}/>
  );

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);