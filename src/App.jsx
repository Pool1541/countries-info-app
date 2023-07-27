import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import { ROUTES } from './config/routes';
import Countries from './views/countries/Countries';
import Continents from './views/continents/Continents';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.countries} element={<Countries />} />
        <Route path={ROUTES.continents} element={<Continents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
