import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import AllRoutes from './Routes/AllRoutes';
import {ShoppingCartProvider} from './context/shoppingCartContext/ShoppingCartProvider'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context';
function App() {


  return (
   
    <>
    <AuthProvider>
      <ShoppingCartProvider> 
        <BrowserRouter>
          <NavBar />
          <AllRoutes/>
          <Footer />
        </BrowserRouter>
      </ShoppingCartProvider> 
    </AuthProvider>
    </>

  );
}

export default App;
