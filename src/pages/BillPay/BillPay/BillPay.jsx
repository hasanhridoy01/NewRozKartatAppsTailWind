import img1 from "../../../assets/Images/Bill-Pay-PageImages/Smartphone.png";
import img2 from "../../../assets/Images/Bill-Pay-PageImages/Frame 1000002523.png";
import img3 from "../../../assets/Images/Bill-Pay-PageImages/drop.png";
import img4 from "../../../assets/Images/Bill-Pay-PageImages/flash.png";
import img5 from "../../../assets/Images/Bill-Pay-PageImages/home-wifi.png";
import img6 from "../../../assets/Images/Bill-Pay-PageImages/home-hashtag.png";
import img7 from "../../../assets/Images/Bill-Pay-PageImages/teacher.png";
import img8 from "../../../assets/Images/Bill-Pay-PageImages/buildings.png";
import img9 from "../../../assets/Images/Bill-Pay-PageImages/ico1.png";
import img10 from "../../../assets/Images/Bill-Pay-PageImages/ico.png";
import img11 from "../../../assets/Images/Bill-Pay-PageImages/data.png";
import img12 from "../../../assets/Images/Bill-Pay-PageImages/bus.png";

import "./BillPay.css";

const BillPay = () => {
  return (
    <div className="container mx-auto px-10 my-60">
      <div className="">
        <p className="GamePageTitle">Bill Payment</p>
        <p className="GamePageTitleSub">
          Home / <span className="GamePageSubTitle">Bill Payment</span>
        </p>
      </div>
      <div className="container mx-auto my-10 grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-2">
        <div className="col-span-2 billCardOne">
          <div className="rounded-full billCardOneImg">
            <img src={img1} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            Top-up
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>

        <div className="col-span-2 billCardTwo">
          <div className="rounded-full billCardTwoImg">
            <img src={img2} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            Gas
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>

        <div className="col-span-2 billCardThree">
          <div className="rounded-full billCardThreeImg">
            <img src={img3} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            Water
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>

        <div className="col-span-2 billCardFour">
          <div className="rounded-full billCardFourImg">
            <img src={img4} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            Electricity
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>

        <div className="col-span-2 billCardFive">
          <div className="rounded-full billCardFiveImg">
            <img src={img5} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            Internet
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>

        <div className="col-span-2 billCardSix">
          <div className="rounded-full billCardSixImg">
            <img src={img6} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            House Rent
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>

        <div className="col-span-2 billCardSeven">
          <div className="rounded-full billCardSevenImg">
            <img src={img7} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            Tuition Fee 
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>

        <div className="col-span-2 billCardEight">
          <div className="rounded-full billCardEightImg">
            <img src={img8} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            Apartment
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>

        <div className="col-span-2 billCardNine">
          <div className="rounded-full billCardNineImg">
            <img src={img9} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            TAx
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>

        <div className="col-span-2 billCardTen">
          <div className="rounded-full billCardTenImg">
            <img src={img10} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            toll
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>

        <div className="col-span-2 billCardEleven">
          <div className="rounded-full billCardElevenImg">
            <img src={img11} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            cable tv
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>

        <div className="col-span-2 billCardTwelve">
          <div className="rounded-full billCardTwelveImg">
            <img src={img12} alt="" />
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "19.5px",
              textAlign: "left",
              marginBottom: "0px", // Added margin bottom for spacing
            }}
          >
            metro
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
              margin: "0", // Centered horizontally
            }}
          >
            Recharge or Pay Mobile Bill{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillPay;
