import ReactDOM from 'react-dom/client';
import App from './App';
import MainWrapper from './components/mainWrapper/MainWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MainWrapper>
    <App />
  </MainWrapper>,
);
