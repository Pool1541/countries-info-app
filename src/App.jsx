import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './config/routes';
import { Suspense, lazy } from 'react';
import LoadingSpiner from './components/LoadingSpinner/LoadingSpiner';
import Sidebar from './components/sidebar/Sidebar';

const Home = lazy(() => import('./views/home/Home'));
const Countries = lazy(() => import('./views/countries/Countries'));
const Continents = lazy(() => import('./views/continents/Continents'));

function App() {
  return (
    <>
      <Sidebar />
      <Suspense fallback={<LoadingSpiner mainSpinner={true} />}>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.countries} element={<Countries />} />
          <Route path={ROUTES.continents} element={<Continents />} />
          <Route path={ROUTES.countriesByContinent} element={<Countries />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
