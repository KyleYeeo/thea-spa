import { useSelector, useDispatch } from 'react-redux';
import { filterCategory, getSelectedCategory } from '../../redux/itemsCategorySlice';
import cls from './FilterCategory.module.css';

const FilterCategory = (props) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return (
        <div className={ cls.filter }>
            <p onClick={ () => dispatch(filterCategory(props.category)) } 
                className={selectedCategory === props.category ? `${ cls.category } ${ cls.selected }` : `${ cls.category }`}
            >
                { props.category }
            </p>
        </div>
    );
}
export default FilterCategory;