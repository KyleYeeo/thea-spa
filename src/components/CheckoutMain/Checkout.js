import { useEffect } from 'react';
import { Box, Paper, Table, TableBody, TableHead, TableContainer, TableRow, TableCell, styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems, getTotalCost, clearAll, getCost } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import cls from './Checkout.module.css';
import CheckoutCart from './CheckoutCart';
import { useAuth0 } from "@auth0/auth0-react";


const Checkout = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);
    const cost = useSelector(getCost);
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        dispatch(getTotalCost());
    }, [cartItems, dispatch]);

    const CustomBox = styled(Box)(() => ({
        color: 'white',
        backgroundColor: 'black'
      }));

    return (<div className={ cls.table_container }>
        { cost === 0 ? '' : 
        ( <>
            <TableContainer component={Paper}  sx={{ mt: '100px', backgroundColor: 'black' }} >
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell className={ cls.cellColor }>SERVICE</TableCell>
                        <TableCell align="right" className={ cls.cellColor }>PRICE</TableCell>
                        <TableCell align="right" className={ cls.cellColor }>QUANTITY</TableCell>
                        <TableCell align="right"className={ cls.cellColor }>SUBTOTAL</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {cartItems.map((item, i) => (
                        <CheckoutCart key={ i } item={ item }/>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <CustomBox onClick={ () => dispatch(clearAll()) } 
                sx={{ px: { xs: 0.5, sm: 1.5 }, py: 1.5, fontFamily: `'Cormorant Garamond', serif`, fontStyle: 'italic', fontSize: { xs: '15px', sm: '18px' }, cursor: 'pointer' }}
            >
                Clear cart
            </CustomBox>
            <CustomBox sx={{ px: { xs: 0.5, sm: 1.5 }, pt: { xs: 3, sm: 4 }, pb: 1.5, fontFamily: `'Josefin Sans', sans-serif`, fontSize: { xs: '14px', sm: '16px' }, letterSpacing: '3px' }}>
                { `SUBTOTAL: $${ cost }`}
            </CustomBox>
            <CustomBox sx={{  px: { xs: 0.5, sm: 1.5 }, pt: { xs: 1, sm: 1.5 }, fontSize: { xs: '15px', sm: '20px' }, fontFamily: `'Josefin Sans', sans-serif` }}>
                Your discount: { isAuthenticated ? `10% (-$${cost*0.1})` : '0%' }
            </CustomBox>
        </> )}

        <CustomBox sx={{ px: { xs: 0.5, sm: 1.5 }, pt: { xs: 3, sm: 5 }, fontFamily: `'Josefin Sans', sans-serif`, fontWeight: 'bold', fontSize: { xs: '14px', sm: '16px' }, letterSpacing: '3px' }} >
            { cost === 0 ? 'CART IS EMPTY' : `TOTAL: $${ !isAuthenticated ? cost : cost*0.9 }`}
        </CustomBox> 
        
        <Box sx={{ py: 3 }} className={ cost === 0 ? cls.empty : cls.full }>
            { cost !== 0 && (
                <Link to='/payment'>
                    <button className={ cls.checkoutBtn }>
                        BOOK AN APPOINTMENT
                    </button>
                </Link>
            )}
        </Box>   
    </div>);
}

export default Checkout;
