import { useContext } from 'react';
import Banner from './Component/Banner/Banner';
import Des from './Component/Des/Des';
import Footer from './Component/footer/Footer';
import Header from './Component/Header/Header';
import Intro from './Component/Intro/Intro';
import Sep from './Component/Sep/Sep';
import Slider from './Component/slider/Slider';
import Table from './Component/Table/Table';
import { ThemeContext } from './Context';
function App() { 
   const theme = useContext(ThemeContext)
   const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{backgroundColor:darkMode ? "#222" :"white" , color:darkMode && 'white'  }}>
      <Header/>
      <Banner />
      <Intro />
      <Sep />
      <Table />
      <Sep />
      <Des />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
