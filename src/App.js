import './App.css';
import Banner from './banner/Banner';
import Footer from './footer/Footer';
import Header from './header/Header';
import Section3 from './section-3/Section3';
import Section7 from './section-7/Section7';
import Secttion from './section1/Secttion';
import Section2 from './section2/Section2';
import Section4 from './section4/Section4';
import Section5 from './section5/Section5';
import Section6 from './section6/Section6';
import Section8 from './section8/Section8';
import Section9 from './section9/Section9';

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
    <Section6></Section6>
    <Section7></Section7>
    <Section8></Section8>
    <Section9></Section9>
    <Footer></Footer>
    </div>
  );
}

export default App;
