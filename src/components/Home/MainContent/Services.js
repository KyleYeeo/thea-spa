import { Link } from 'react-router-dom';
import cls from './Services.module.css';

const Services = () => {
    return (
        <section>
            <div className={ cls.container }>
                <Link to='/services/0' className={ `${cls.small} ${cls.right_marg}` }>
                    <img src={`/images/${'treatments'}.jpg`} alt='Service' />
                    <p>TREATMENTS</p>
                </Link>
                <Link to='/services/1' className={ `${cls.big} ${cls.left_marg}` }>
                    <img src={`/images/${'thermal-bath'}.jpg`} alt='Service' />
                    <p>THERMAL BATH</p>
                </Link>
            </div>
            <div className={ cls.container }>
                <Link to='/services/2' className={ `${cls.big} ${cls.right_marg}` }>
                    <img src={`/images/${'massages'}.jpg`} alt='Service' />
                    <p>MASSAGES</p>
                </Link>
                <Link to='/services/3' className={ `${cls.small} ${cls.left_marg}` }>
                    <img src={`/images/${'aromatic-oils'}.jpg`} alt='Service' />
                    <p>AROMATIC OILS</p>
                </Link>
            </div>
        </section>
    );
}
export default Services;