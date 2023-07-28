import { Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import { ROUTES } from './config/routes';
import Countries from './views/countries/Countries';
import Continents from './views/continents/Continents';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.countries} element={<Countries />} />
        <Route path={ROUTES.continents} element={<Continents />} />
        <Route path={ROUTES.countriesByContinent} element={<Countries />} />
      </Routes>
    </>
  );
}

export default App;
