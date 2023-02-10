import './App.css';
import Banner from './banner/Banner';
import Header from './header/Header';
import Secttion from './section1/Secttion';
import Section2 from './section2/Section2';

function App() {
  return (
    <div className='overflow-x-hidden'>
    <Header></Header>
    <Banner></Banner>
    <Secttion></Secttion>
    <Section2></Section2>
    </div>
  );
}

export default App;
