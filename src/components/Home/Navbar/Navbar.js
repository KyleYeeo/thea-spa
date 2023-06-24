import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart/Cart';
import dataNavbar from './dataNavbar';
import { Sidebar } from './Sidebar/Sidebar';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../../redux/cartOpenSlice';
import { getTotalQuantity, getQuantity, getCartItems } from '../../redux/cartSlice';
import cls from './Navbar.module.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);
    const totalQuantity = useSelector(getQuantity);

    useEffect(() => {
        dispatch(getTotalQuantity());
    }, [cartItems, dispatch]);

    return (
        <nav>
            <div>
                <Link to='/' className='mobile-brand'>THEA</Link>
            </div>
            <div className={ cls.links }>
            {dataNavbar.map((link, i) => (
                <Link to={ link.to } key={ i } className={ link.class }>{ link.title }</Link>
            ))}
            </div>
            
            <div className={ cls.container }>
                <Button onClick={ () => dispatch(showCart(true)) }
                    sx={{ color: 'white', p: 0, display: { xs: 'none', md: 'block' } }}
                >
                CART
                <span>{ totalQuantity === 0 ? '' : `(${ totalQuantity })` }</span>
                </Button>
            </div>
            <Cart />
            <div className={ cls.sidebar }>
                <Sidebar />
            </div>
        </nav>
    );
}
export default Navbar;