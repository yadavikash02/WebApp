import './App.css';
import AboutUs from './Component/AboutUs';
import Experties from './Component/Experties';
import Footer from './Component/Footer';
import MainContent from './Component/MainContent';
import NavBar from './Component/NavBar';
import Success from './Component/Success';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <MainContent></MainContent>
    <AboutUs></AboutUs>
    <Experties></Experties>
    <Success></Success>
    <Footer></Footer>
    </>
   
  );
}

export default App;
