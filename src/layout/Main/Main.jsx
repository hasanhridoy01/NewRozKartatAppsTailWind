import { Outlet } from "react-router-dom";
import Header from "../../common/Header/Header";

const Main = () => {
    return (
        <div className="w-full">
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;