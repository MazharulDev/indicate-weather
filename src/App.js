import './App.css';
import Navbar from './components/Navber/Navbar';
import './components/css/app.css'
import SearchBox from './components/searchBox/SearchBox';

function App() {
  return (
    <div className='bg-img'>
      <Navbar />
      <SearchBox />
    </div>
  );
}

export default App;
