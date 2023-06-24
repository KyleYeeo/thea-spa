import { useSelector, useDispatch } from 'react-redux';
import { filterTags, getSelectedTag } from '../../redux/itemsCategorySlice';
import cls from './FilterTags.module.css';

const FilterTags = (props) => {
    const dispatch = useDispatch();
    const selectedTag = useSelector(getSelectedTag);

    return (
        <span onClick={() => dispatch(filterTags(props.tag))}
            className={selectedTag === props.tag ? `${ cls.tag } ${ cls.selected }` : `${ cls.tag }`}
        >
            { props.tag }, </span>
    );
}
export default FilterTags;