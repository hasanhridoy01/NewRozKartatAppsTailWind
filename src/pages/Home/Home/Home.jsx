import Category from '../Category/Category';
import GameCurrency from '../GameCurrency/GameCurrency';
import GamesCard from '../GamesCard/GamesCard';
import GiftCard from '../GiftCard/GiftCard';
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
        </div>
    );
};

export default Home;