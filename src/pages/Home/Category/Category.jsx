import img1 from "../../../assets/Images/ProductCard/Group 1000002223.png";
import img2 from "../../../assets/Images/ProductCard/Frame 1000002523.png";
import img3 from "../../../assets/Images/ProductCard/Frame 1000003077.png";
import img4 from "../../../assets/Images/ProductCard/ico.png";
import img5 from "../../../assets/Images/ProductCard/smartphone.png";
import img6 from "../../../assets/Images/ProductCard/ico1.png";

import "./Category.css";

const Category = () => {
  return (
    <div>
      <div className="container mx-auto px-10 grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-4">
        <div className="col-span-2 cardOne">
          <div className="rounded-full cardOneImg">
            <img src={img1} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "2px", // Added margin bottom for spacing
            }}
          >
            Gift Cards
          </p>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "14.63px",
              textAlign: "center",
              width: "109px",
              height: "30px",
              color: "gray",
              margin: "0 auto", // Centered horizontally
            }}
          >
            Tap to find all Gift Cards{" "}
          </p>
        </div>

        <div className="col-span-2 cardTwo">
          <div className="rounded-full cardTwoImg">
            <img src={img2} alt="" />
          </div>

          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "2px", // Added margin bottom for spacing
            }}
          >
            Game cards
          </p>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "14.63px",
              textAlign: "center",
              width: "109px",
              height: "30px",
              color: "gray",
              margin: "0 auto", // Centered horizontally
            }}
          >
            purchase with Kartat All of Your Favourite games{" "}
          </p>
        </div>

        <div className="col-span-2 cardThree">
          <div className="rounded-full cardThreeImg">
            <img src={img3} alt="" />
          </div>

          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "2px", // Added margin bottom for spacing
            }}
          >
            Shopping Cards
          </p>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "14.63px",
              textAlign: "center",
              width: "109px",
              height: "30px",
              color: "gray",
              margin: "0 auto", // Centered horizontally
            }}
          >
            Pay And Get Instant All Shopping Cards{" "}
          </p>
        </div>

        <div className="col-span-2 cardFour">
          <div className="rounded-full cardFourImg">
            <img src={img4} alt="" />
          </div>

          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "2px", // Added margin bottom for spacing
            }}
          >
            Direct Top-Up
          </p>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "14.63px",
              textAlign: "center",
              width: "109px",
              height: "30px",
              color: "gray",
              margin: "0 auto", // Centered horizontally
            }}
          >
            Top-Up into your game{" "}
          </p>
        </div>

        <div className="col-span-2 cardFive">
          <div className="rounded-full cardFiveImg">
            <img src={img5} alt="" />
          </div>

          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "2px", // Added margin bottom for spacing
            }}
          >
            Direct Top-Up
          </p>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "14.63px",
              textAlign: "center",
              width: "109px",
              height: "30px",
              color: "gray",
              margin: "0 auto", // Centered horizontally
            }}
          >
            Prepaid and Post Recharge{" "}
          </p>
        </div>

        <div className="col-span-2 cardSix">
          <div className="rounded-full cardSixImg">
            <img src={img6} alt="" />
          </div>

          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "2px", // Added margin bottom for spacing
            }}
          >
            Direct Top-Up
          </p>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "14.63px",
              textAlign: "center",
              width: "109px",
              height: "30px",
              color: "gray",
              margin: "0 auto", // Centered horizontally
            }}
          >
            Pay Your All Bill{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
