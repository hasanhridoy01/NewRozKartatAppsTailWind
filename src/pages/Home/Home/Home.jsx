import Arrivals from '../Arrivals/Arrivals';
import Category from '../Category/Category';
import GameCD from '../GameCD/GameCD';
import GameCurrency from '../GameCurrency/GameCurrency';
import GamesCard from '../GamesCard/GamesCard';
import GiftCard from '../GiftCard/GiftCard';
import Recommended from '../Recommended/Recommended';
import SubCarousel from '../SubCarousel/SubCarousel';
import SubSlider from '../SubSlider/SubSlider';

const Home = () => {
    return (
        <div className='my-40'>
            <Category />
            <GamesCard />
            <GiftCard />
            <SubCarousel />
            <GameCurrency />
            <SubSlider />
            <GameCD />
            <Arrivals />
            <Recommended />
        </div>
    );
};

export default Home;