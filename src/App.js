import './App.css';
import Banner from './banner/Banner';
import Header from './header/Header';
import Secttion from './section1/Secttion';

function App() {
  return (
    <div className='overflow-x-hidden'>
    <Header></Header>
    <Banner></Banner>
    <Secttion></Secttion>
    </div>
  );
}

export default App;
