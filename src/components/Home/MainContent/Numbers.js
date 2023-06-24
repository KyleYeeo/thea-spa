import dataNumbers from './dataNumbers';
import cls from './Numbers.module.css';

const Numbers = () => {
    return (
        <section className={ cls.container }>
            {dataNumbers.map((num, i) => (
                <div className={ cls.number } key={ i }>
                    <p className={ cls.num }>{ num.num }</p>
                    <p className={ cls.title }>{ num.title }</p>
                </div>
            ))}
        </section>
    );
}

export default Numbers;