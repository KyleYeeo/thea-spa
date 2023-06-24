import Categories from './Categories/Categories';
import Items from './Items/Items';
import cls from './Shop.module.css';

const Shop = () => {
    return (
        <main className={ cls.shop }>
            <Items />
            <Categories />
        </main>
    );
}

export default Shop;