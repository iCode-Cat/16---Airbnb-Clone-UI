import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './App.css';
import Home from './Page/Home.jsx';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
