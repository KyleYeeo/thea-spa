import { useEffect } from 'react';
import { Box, Drawer, List, Divider, ListItem } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { getCartIsOpen, showCart } from '../../../redux/cartOpenSlice';
import { getCartItems, getTotalCost, clearAll, getCost } from '../../../redux/cartSlice';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import cls from './Cart.module.css';
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
    const dispatch = useDispatch();
    const cartIsOpen = useSelector(getCartIsOpen);
    const cartItems = useSelector(getCartItems);
    const cost = useSelector(getCost);
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        dispatch(getTotalCost());
    }, [cartItems, dispatch]);

    const handleDrawerClose = () => {
        dispatch(showCart(false))
    };

    const list = () => (
        <Box sx={{
            width: { xs: 280, sm: 300 },
            height: '100%',
            backgroundColor: 'black',
            color: 'white',
        }}
        role='presentation'>
            <Box sx={{ textAlign: 'start', mb: { xs: 0.25, sm: -0.75, md: 1.75 } }}>
                <CloseRounded onClick={handleDrawerClose} className={ cls.close_btn } sx={{ color: 'white', m: 1 }}/>
            </Box>
            <List className={ cls.list } sx={{ backgroundColor: 'black' }}>
                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', p: { xs: 1, sm: 1.5 } }}>
                    {cartItems.map((item, i) => {
                    return (
                        <CartItem key={ i } item={ item } />
                    )
                })}
                </ListItem>
            </List>
            <Divider sx={{ borderColor: 'rgba(185, 180, 176, .6)' }}/>
            <Box sx={{ backgroundColor: 'black', px: 1.5, pt: 5, fontFamily: `'Josefin Sans', sans-serif`, letterSpacing: '3px' }}>
                { cost === 0 ? 'CART IS EMPTY' : `TOTAL: $${ !isAuthenticated ? cost : cost*0.9 }`}
            </Box>
            <Box onClick={ () => dispatch(clearAll()) } 
                sx={{ backgroundColor: 'black', px: 1.5, py: 3, fontFamily: `'Cormorant Garamond', serif`, fontStyle: 'italic', cursor: 'pointer' }}
            >{ cost === 0 ? '' : 'Clear cart' }
            </Box>
            <Box sx={{ backgroundColor: 'black', pb: 3 }}>
            { cost !== 0 && (
                <Link to='/checkout' onClick={handleDrawerClose} >
                    <button className={ cls.checkoutBtn }>Proceed to checkout</button>
                </Link>
            )}
            </Box>
        </Box>
    );

    return (
        <div className={ cls.cart }>
            <Drawer anchor='right'
                    open={cartIsOpen}
                    onClose={handleDrawerClose}
            >
                {list()}
            </Drawer>
        </div>
    );
}

export default Cart;
