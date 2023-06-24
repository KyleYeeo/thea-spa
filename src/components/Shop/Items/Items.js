import { dataItems } from './dataItems';
import Item from './Item';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/itemsCategorySlice';
import { getSelectedTag } from '../../redux/itemsCategorySlice';
import cls from './Items.module.css';

const Items = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    const selectedTag = useSelector(getSelectedTag);

    return (
        <section className={ cls.items }>
            {dataItems.filter(el => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === el.category;
            }).map((item, i) => <Item key={ i } item={ item } />)
            }

            {dataItems.filter(el => {
                if (selectedTag === 'All') return true;
                return el.tags.includes(selectedTag);
            }).map((item, i) => <Item key={ i } item={ item } />)
            }
        </section>
    );
}

export default Items;