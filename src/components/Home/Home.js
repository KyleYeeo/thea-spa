import Numbers from './MainContent/Numbers';
import Services from './MainContent/Services';
import Text from './MainContent/Text';
import Video from './MainContent/Video';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <>
            <header>
                <Slider />
            </header>
            <main className='main-home'>
                <Text />
                <Services />
                <Numbers />
                <Video />
            </main>
        </>
    );
}

export default Home;
