import React from 'react';
import Category from '../Category/Category';
import GamesCard from '../GamesCard/GamesCard';
import GiftCard from '../GiftCard/GiftCard';

const Home = () => {
    return (
        <div className='my-40'>
            <Category />
            <GamesCard />
            <GiftCard />
        </div>
    );
};

export default Home;