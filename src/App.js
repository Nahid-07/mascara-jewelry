import './App.css';
import Banner from './banner/Banner';
import Header from './header/Header';
import Section3 from './section-3/Section3';
import Secttion from './section1/Secttion';
import Section2 from './section2/Section2';
import Section4 from './section4/Section4';
import Section5 from './section5/Section5';

function App() {
  return (
    <div className='overflow-x-hidden'>
    <Header></Header>
    <Banner></Banner>
    <Secttion></Secttion>
    <Section2></Section2>
    <Section3></Section3>
    <Section4></Section4>
    <Section5></Section5>
    </div>
  );
}

export default App;
