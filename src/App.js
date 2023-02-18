import './App.css';
import Display from './componenets/Display';
import Stock from './componenets/Stock'
import Holdings from './componenets/Holdings'

function App() {
  return (
    <div className="App">
      <span className='top'>
        <Display />
      </span>
      <span className='bottom'>
        <Stock />
        <Holdings />
      </span>
    </div>
  );
}

export default App;
