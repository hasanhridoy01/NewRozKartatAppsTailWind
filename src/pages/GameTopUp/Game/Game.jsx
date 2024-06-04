import Recommended from "../../Home/Recommended/Recommended";
import ProductTabs from "../ProductTabs/ProductTabs";

const Game = () => {
    return (
        <div className="mt-60 mb-24">
            <ProductTabs />
            <Recommended />
        </div>
    );
};

export default Game;