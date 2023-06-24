import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import cls from './Item.module.css';
import { useAuth0 } from "@auth0/auth0-react";

const Item = (props) => {
    const dispatch = useDispatch();
    let quantity = 1;
    const { isAuthenticated } = useAuth0();

    return (
        <div className={ cls.item }>
            <img src={ `/images/${ props.item.image }.jpg` } alt='Spa service' />
            <button onClick={ () => dispatch(addToCart(props.item, quantity)) }>Add to cart</button>
            <p>{ props.item.title }</p>
            {
                !isAuthenticated ? 
                <p >$ { props.item.price }</p>
                : 
                <p>$<del>{ props.item.price }</del> <ins>{ props.item.price*0.9 }</ins></p>
            }
        </div>
    );
}
export default Item;