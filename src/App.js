import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home';
import Checkout from './components/CheckoutMain/Checkout';
import ServiceList from './components/Home/MainContent/ServiceList';
import Navbar from './components/Home/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import { useAuth0 } from "@auth0/auth0-react";
import { Auth } from './components/auth/Auth';
import Payment from './components/CheckoutMain/Payment';

function App() {
    const { isLoading } = useAuth0();
    if ( isLoading ) return <p>LOADING..</p>
    
    return (
        <Router>
            <div className='App'>
                <Navbar />
                
                <Routes>
                    <Route path='/' element={ <Home /> }></Route>
                    <Route path='/shop' element={ <Shop /> }></Route>
                    <Route path='/services/:id' element={ <ServiceList /> }></Route>
                    <Route path='/checkout' element={ <Checkout /> }></Route>
                    <Route path='/payment' element={ <Payment /> }></Route>
                </Routes>

                <Auth />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
