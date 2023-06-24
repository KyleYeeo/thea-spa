import FilterCategory from './FilterCategory';
import FilterTags from './FilterTags';
import cls from './Categories.module.css';

const Categories = () => {
    const categoriesArray = ['ALL', 'FACE MASSAGE', 'TREATMENT', 'BODY RELAX', 'SAUNA', 'SPA'];
    const tagsArray = ['Aromatherapy', 'Bath', 'Hotel', 'Jade', 'Lifting', 'Natural', 'Relax', 'Roller', 'Sauna', 'Serum', 'Spa', 'Treatment', 'All'];
    return (
        <section className={ cls.categories }>
            <p className={ cls.heading }>CATEGORIES</p>
            {categoriesArray.map((category, i) => (
                <FilterCategory key={ i } category={ category }/>
            ))}

            <hr />

            <p className={ cls.heading }>TAGS</p>
            {tagsArray.map((tag, i) => (
                <FilterTags key={ i } tag={ tag } />
            ))}
        </section>
    );
}
export default Categories;