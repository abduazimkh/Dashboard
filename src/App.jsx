import './App.css'
import MainDash from './components/mainDash/MainDash';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <MainDash/>
          <div></div>
        </div>
        
    </div>
  );
}

export default App;
