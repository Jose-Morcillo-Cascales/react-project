import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import AllRoutes from './Routes/AllRoutes';
import {ShoppingCartProvider} from './context/shoppingCartContext/ShoppingCartProvider'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context';
import WhishListProvider from './context/whishListContext/WhishListProvider';
function App() {


  return (
   
    <>
    <AuthProvider>
    <WhishListProvider>
      <ShoppingCartProvider> 
        <BrowserRouter>
          <NavBar />
          <AllRoutes/>
          <Footer />
        </BrowserRouter>
      </ShoppingCartProvider> 
      </WhishListProvider>
    </AuthProvider>
    </>

  );
}

export default App;
