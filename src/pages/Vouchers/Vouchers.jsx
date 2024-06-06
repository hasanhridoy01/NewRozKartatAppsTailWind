import { Helmet } from "react-helmet-async";
import GiftCard from "../Home/GiftCard/GiftCard";
import Recommended from "../Home/Recommended/Recommended";
import React from "react";

const Vouchers = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-24">
      <Helmet>
        <title>kartat | Vouchers Page</title>
      </Helmet>
      <GiftCard />
      <Recommended />
    </div>
  );
};

export default Vouchers;
