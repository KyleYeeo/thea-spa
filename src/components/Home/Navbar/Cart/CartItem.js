import { useEffect } from 'react';
import { dataItems } from '../../../Shop/Items/dataItems';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, getSubtotal, getCartItems, removeItem } from '../../../redux/cartSlice';
import { IoIosClose } from 'react-icons/io';
import cls from './CartItem.module.css';
import { useAuth0 } from "@auth0/auth0-react";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);
    const { isAuthenticated } = useAuth0();

    const order = dataItems.find(el => {
        return el.id === props.item.id;
    })

    const { id, image, title } = order;
    const updateIndicators = cartItems.find(el =>  el.id === id);

    useEffect(() => {
        dispatch(getSubtotal());
    }, [updateIndicators, dispatch]);

    return (
        <div className={ cls.cartItems }>
            <img src={ `./images/${image}.jpg` } alt='Spa order' />
            <div className={ cls.info }>
                <p>{ title }</p> 
                <div className={ cls.btns }>
                    <div onClick={() => dispatch(decreaseQuantity(id))}>
                        <button className={ cls.btn }>&#8722;</button>
                    </div>
                    <span>{ updateIndicators.quantity }</span>
                    <div onClick={() => dispatch(increaseQuantity(id))}>
                        <button className={ cls.btn }>&#43;</button>
                    </div>
                </div>
                <p className={ cls.subtotal }>SUBTOTAL: ${ !isAuthenticated ? updateIndicators.subtotal : updateIndicators.subtotal*0.9 }</p>
            </div>
            <div className={ cls.delete }>
                <IoIosClose onClick={ () => dispatch(removeItem(id)) } />
            </div>
        </div>
    );
}
export default CartItem;
