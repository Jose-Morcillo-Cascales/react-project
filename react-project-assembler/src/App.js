import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import AllRoutes from './Routes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';
function App() {


  return (
   
    <>
    <BrowserRouter>
      <NavBar />
      <AllRoutes/>
      <Footer />
    </BrowserRouter>
    </>

  );
}

export default App;
