import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './App.css';
import Home from './Page/Home';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
