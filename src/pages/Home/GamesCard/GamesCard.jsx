import img1 from "../../../assets/Images/ProductCardSmall/monitor1.png";
import img2 from "../../../assets/Images/ProductCardSmall/monitor2.png";
import img3 from "../../../assets/Images/ProductCardSmall/ico.png";
import img4 from "../../../assets/Images/ProductCardSmall/mobile.png";
import img5 from "../../../assets/Images/ProductCardSmall/monitor.png";

const GamesCard = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="flex justify-between mt-20 mb-10">
        <p
          style={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            color: "var(--Text-Regular, #222222)",
          }}
        >
          Games for (30)
        </p>

        <button
          style={{
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "21px",
            color: "var(--Text-Regular, #222222)",
            textDecoration: "underline",
          }}
        >
          View All
        </button>
      </div>
      <div className="grid lg:grid-cols-10 md:grid-cols-6 sm:grid-cols-4">
        <div
          className="col-span-2"
          style={{
            height: "130px",
            border: "1px solid #E5E5E5",
            borderRight: 'none',
            padding: "10px 30px 10px 30px",
            gap: "16px",
            display: "flex",
            alignItems: "center",
            justifyItems: "space-around",
          }}
        >
          <div
            className="rounded-full"
            style={{
              marginBottom: "0px",
              width: "90px",
              height: "90px",
              background: "#EFFFF8",
              display: "flex",
              alignItems: "center",
              padding: "24px",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#EFFFF8",
              },
            }}
          >
            <img src={img1} alt="" />
          </div>
          <div className="">
            <p
              style={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#052819",
              }}
              className="mb-2"
            >
              PC Games
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "14px",
                color: "gray",
                width: "109px",
              }}
            >
              324 games for your PC
            </p>
          </div>
        </div>
        <div
          className="col-span-2"
          style={{
            height: "130px",
            border: "1px solid #E5E5E5",
            borderRight: 'none',    
            padding: "10px 30px 10px 30px",
            gap: "16px",
            display: "flex",
            alignItems: "center",
            justifyItems: "space-around",
          }}
        >
          <div
            className="rounded-full"
            style={{
              marginBottom: "0px",
              width: "90px",
              height: "90px",
              background: "#FFF3F3",
              display: "flex",
              alignItems: "center",
              padding: "24px",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#EFFFF8",
              },
            }}
          >
            <img src={img2} alt="" />
          </div>
          <div className="">
            <p
              style={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#052819",
              }}
              className="mb-2"
            >
              Playstation
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "14px",
                width: "109px",
                color: "gray",
              }}
            >
              324 games for your PC
            </p>
          </div>
        </div>
        <div
          className="col-span-2"
          style={{
            height: "130px",
            border: "1px solid #E5E5E5",
            borderRight: 'none',
            padding: "10px 30px 10px 30px",
            gap: "16px",
            display: "flex",
            alignItems: "center",
            justifyItems: "space-around",
          }}
        >
          <div
            className="rounded-full"
            style={{
              marginBottom: "0px",
              width: "90px",
              height: "90px",
              background: "#E0FFFD",
              display: "flex",
              alignItems: "center",
              padding: "24px",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#EFFFF8",
              },
            }}
          >
            <img src={img3} alt="" />
          </div>
          <div className="">
            <p
              style={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#052819",
              }}
              className="mb-2"
            >
              Webgame
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "14px",
                width: "109px",
                color: "gray",
              }}
            >
              324 games for your PC
            </p>
          </div>
        </div>
        <div
          className="col-span-2"
          style={{
            height: "130px",
            border: "1px solid #E5E5E5",
            borderRight: 'none',
            padding: "10px 30px 10px 30px",
            gap: "16px",
            display: "flex",
            alignItems: "center",
            justifyItems: "space-around",
          }}
        >
          <div
            className="rounded-full"
            style={{
              marginBottom: "0px",
              width: "90px",
              height: "90px",
              background: "#EDFFE9",
              display: "flex",
              alignItems: "center",
              padding: "24px",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#EFFFF8",
              },
            }}
          >
            <img src={img4} alt="" />
          </div>
          <div className="">
            <p
              style={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#052819",
              }}
              className="mb-2"
            >
              Mobile
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "14px",
                width: "109px",
                color: "gray",
              }}
            >
              324 games for your PC
            </p>
          </div>
        </div>
        <div
          className="col-span-2"
          style={{
            height: "130px",
            border: "1px solid #E5E5E5",
            padding: "10px 30px 10px 30px",
            gap: "16px",
            display: "flex",
            alignItems: "center",
            justifyItems: "space-around",
          }}
        >
          <div
            className="rounded-full"
            style={{
              marginBottom: "0px",
              width: "90px",
              height: "90px",
              background: "#FFFAEC",
              display: "flex",
              alignItems: "center",
              padding: "24px",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#EFFFF8",
              },
            }}
          >
            <img src={img5} alt="" />
          </div>
          <div className="">
            <p
              style={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#052819",
              }}
              className="mb-2"
            >
              Xbox
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "14px",
                width: "109px",
                color: "gray",
              }}
            >
              324 games for your PC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesCard;
