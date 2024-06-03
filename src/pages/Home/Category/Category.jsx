import img1 from "../../../assets/Images/ProductCard/Group 1000002223.png";
import img2 from "../../../assets/Images/ProductCard/Frame 1000002523.png";
import img3 from "../../../assets/Images/ProductCard/Frame 1000003077.png";
import img4 from "../../../assets/Images/ProductCard/ico.png";
import img5 from "../../../assets/Images/ProductCard/smartphone.png";
import img6 from "../../../assets/Images/ProductCard/ico1.png";

const Category = () => {
  return (
    <div>
      <div className="container mx-auto px-10 grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-4">
        <div
          className="col-span-2"
          style={{
            width: "233px",
            height: "310px",
            border: "1px solid #E5E5E5",
            padding: "30px",
            gap: "16px",
            background: "#EFFFF8",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          <div
            className="rounded-full"
            style={{
              marginBottom: "20px",
              width: "90px",
              height: "90px",
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#EFFFF8",
              },
            }}
          >
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

        <div
          className="col-span-2"
          style={{
            width: "233px",
            height: "310px",
            border: "1px solid #E5E5E5",
            padding: "30px",
            gap: "16px",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#00a1a1",
            },
          }}
        >
          <div
            className="rounded-full"
            style={{
              marginBottom: "20px",
              width: "90px",
              height: "90px",
              background: "#FFFAEC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#EFFFF8",
              },
            }}
          >
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

        <div
          className="col-span-2"
          style={{
            width: "233px",
            height: "310px",
            border: "1px solid #E5E5E5",
            padding: "30px",
            gap: "16px",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          <div
            className="rounded-full"
            style={{
              marginBottom: "20px",
              width: "90px",
              height: "90px",
              background: "#EEFAFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#EFFFF8",
              },
            }}
          >
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
        <div
          className="col-span-2"
          style={{
            width: "233px",
            height: "310px",
            border: "1px solid #E5E5E5",
            padding: "30px",
            gap: "16px",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          <div
            className="rounded-full"
            style={{
              marginBottom: "20px",
              width: "90px",
              height: "90px",
              background: "#FFF3F3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#EFFFF8",
              },
            }}
          >
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
        <div
          className="col-span-2"
          style={{
            width: "233px",
            height: "310px",
            border: "1px solid #E5E5E5",
            padding: "30px",
            gap: "16px",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          <div
            className="rounded-full"
            style={{
              marginBottom: "20px",
              width: "90px",
              height: "90px",
              background: "#F7F0FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#EFFFF8",
              },
            }}
          >
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
        <div
          className="col-span-2"
          style={{
            width: "233px",
            height: "310px",
            border: "1px solid #E5E5E5",
            padding: "30px",
            gap: "16px",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          <div
            className="rounded-full"
            style={{
              marginBottom: "20px",
              width: "90px",
              height: "90px",
              background: "#EDFFE9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#EFFFF8",
              },
            }}
          >
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
