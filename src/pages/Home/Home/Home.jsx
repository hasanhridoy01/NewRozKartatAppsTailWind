import React from "react";
import Arrivals from "../Arrivals/Arrivals";
import Category from "../Category/Category";
import GameCD from "../GameCD/GameCD";
import GameCurrency from "../GameCurrency/GameCurrency";
import GamesCard from "../GamesCard/GamesCard";
import GiftCard from "../GiftCard/GiftCard";
import Recommended from "../Recommended/Recommended";
import SubCarousel from "../SubCarousel/SubCarousel";
import SubSlider from "../SubSlider/SubSlider";
import { Helmet } from "react-helmet-async";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-40">
      <Helmet>
        <title>kartat | Home Page</title>
      </Helmet>
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
