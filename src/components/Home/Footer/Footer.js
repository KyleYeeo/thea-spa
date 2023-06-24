import { Link } from 'react-router-dom';
import cls from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={ cls.footer }>
                <div>
                    <Link to='/' className={ cls.brand }>THEA</Link>
                </div>
                <div>
                    <p className={ cls.heading }>CONTACT</p>
                    <p>+1 555-777-9999</p>
                    <p>THEASPA@THEASPA.COM</p>
                    <p>1 W 58TH ST FL 4, NEW YORK, NY 10019</p>
                </div>
                <div>
                    <p className={ cls.heading }>OPEN HOURS</p>
                    <p>WEEKDAYS: 10AM &#8208; 9PM</p>
                    <p>SATURDAY: 10AM &#8208; 6PM</p>
                    <p>SUNDAY CLOSED</p>
                </div>
            </div>
            <hr />
            <div className={ cls.author }>
                <a className={ cls.link } href='https://github.com/jtopolska'>&#169; 2023 Developed by Yuliia Topolska.</a>
                <p>The website was created for educational purposes. The images/video were taken from https://www.pexels.com, https://unsplash.com, https://www.freepik.com.</p>
            </div>
        </footer>
    );
}

export default Footer;