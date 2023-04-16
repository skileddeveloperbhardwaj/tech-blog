import logo from './logo.svg';
import './App.css';
import NavigationBar from './front_page/NavigationBar';
import CarouselSlides from './front_page/CarouselSlides';
import TopicsGuide from './front_page/TopicsGrid';
import DataStructuresTopicsGrid from './front_page/DataStructuresTopicsGrid';
import Footer from './front_page/Footer';
import AlgoCarouselGrid from './front_page/AlgoCarouselGrid';
import DSCarouselGrid from './front_page/DSCarouselGrid';

function App() {
  return (
    <div style={{marginLeft: '3%'}} className='App'>
      <NavigationBar />
      <br></br>
      <CarouselSlides/>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <AlgoCarouselGrid/>
      <br></br><br></br>
      <DSCarouselGrid/>
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;
