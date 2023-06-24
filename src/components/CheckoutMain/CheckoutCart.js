import { useEffect } from 'react';
import { dataItems } from '../Shop/Items/dataItems';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, getSubtotal, getCartItems, removeItem } from '../redux/cartSlice';
import { IoIosClose } from 'react-icons/io';
import { TableRow, TableCell } from '@mui/material';
import cls from './CheckoutCart.module.css';

const CheckoutCart = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);

    const order = dataItems.find(el => {
        return el.id === props.item.id;
    })

    const { id, image, title, price } = order;
    const updateIndicators = cartItems.find(el =>  el.id === id);

    useEffect(() => {
        dispatch(getSubtotal());
    }, [updateIndicators, dispatch]);

    return (<>
            <TableRow>
              <TableCell component="th" scope="row" className={ cls.cellColor } 
              sx={{ display: 'flex', alignItems: 'center', fontFamily: `'Cormorant Garamond', serif`, color: 'white', px: { xs: 0.5, sm: 2 }, pb: { xs: 2, sm: '16.5px' } }}>
                <img src={ `./images/${image}.jpg` } alt='Spa order' />
                { title }
              </TableCell>
              <TableCell align="right" className={ cls.cellColor } sx={{ fontFamily: `'Cormorant Garamond', serif`, color: '#b9b4b0', px: { xs: 0.5, sm: 2 }, pr: { xs: '10px', sm: '20px' } }}>
                ${ price }
              </TableCell>
              <TableCell align="right" className={ cls.cellColor } sx={{ px: { xs: 0.5, sm: 2 } }}>
                <div className={ cls.btns }>
                    <div onClick={() => dispatch(decreaseQuantity(id))}>
                        <button className={ cls.btn }>&#8722;</button>
                    </div>
                    <span>{ updateIndicators.quantity }</span>
                    <div onClick={() => dispatch(increaseQuantity(id))}>
                        <button className={ cls.btn }>&#43;</button>
                    </div>
                </div>
              </TableCell>
              <TableCell align="right" className={ cls.cellColor } sx={{ px: { xs: 0.5, sm: 2 } }}>       
                <p className={ cls.subtotal }>
                  ${ updateIndicators.subtotal }
                    <IoIosClose onClick={ () => dispatch(removeItem(id)) } className={ cls.delete } />
                </p>
              </TableCell>
            </TableRow>
        </>
    );
}
export default CheckoutCart;