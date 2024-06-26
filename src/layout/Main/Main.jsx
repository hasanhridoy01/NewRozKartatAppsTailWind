import { Outlet, useLocation } from "react-router-dom";
import Header from "../../common/Header/Header";
import Hero from "../../common/Hero/Hero";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Footer from "../../common/Footer/Footer";
import "./Main.css";

/* Font-Family */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 500px)");
  const location = useLocation();

  //added media Query on that screen.............................!'
  const isExtraSmallScreen = useMediaQuery('(max-width: 500px)');
  const isMediumScreen = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isLargeScreen = useMediaQuery('(min-width: 1025px)');

  const isHeroShow = location.pathname.includes("game") || location.pathname.includes("billPay") || location.pathname.includes("mobile");

  //auto open popup..................!
  useEffect(() => {
    const lastClosed = localStorage.getItem("popupLastClosed");
    if (lastClosed) {
      const timePassed = Date.now() - parseInt(lastClosed, 10);
      if (timePassed >= 32000) {
        setIsVisible(true);
      } else {
        const remainingTime = 32000 - timePassed;
        setTimeout(() => {
          setIsVisible(true);
        }, remainingTime);
      }
    } else {
      setIsVisible(true);
    }
  }, []);

  //set close on this popup..............!
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("popupLastClosed", Date.now().toString());
    setTimeout(() => {
      setIsVisible(true);
    }, 32000);
  };
  return (
    <div className="w-full">
      {isSmallScreen
        ? isVisible && (
            <div
              style={{
                backgroundColor: "#FFFAE7",
                width: "320px",
                padding: "15px 25px",
                position: "fixed",
                transform: "translate(-50%, -50%)",
                left: "32%",
                top: "24%",
                zIndex: 3000,
                boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)",
              }}
              id="popup"
              className="popup-animation"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0px",
                }}
              >
                <h5
                  style={{
                    color: "#EE6C3E",
                    fontSize: "15px",
                    fontWeight: 450,
                  }}
                >
                  Hi! You are not{" "}
                  <span style={{ fontWeight: 900 }}>logged in</span> yet.
                </h5>
                <button
                  style={{
                    color: "#c5c5c5",
                    backgroundColor: "#fff",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "24px",
                  }}
                  onClick={handleClose}
                >
                  &times;
                </button>
              </div>
              <h6
                style={{
                  fontSize: "14px",
                  marginTop: "6px",
                  fontWeight: 100,
                  marginBottom: "12px",
                  fontStyle: "italic",
                }}
              >
                Make sure you unlock your membership.
              </h6>
              <p
                style={{
                  fontSize: "12px",
                  marginTop: "0px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  textAlign: "justify",
                }}
              >
                We want to ensure you get the most out of your experience with
                us. By saving your order history, Wishlist items, and loyalty
                points, you'll have easy access to everything you love. Plus,
                you'll be first in line for exclusive offers just for you!
              </p>
            </div>
          )
        : isVisible && (
            <div
              style={{
                backgroundColor: "#FFFAE7",
                width: "320px",
                padding: "15px 25px",
                position: "fixed",
                transform: "translate(-50%, -50%)",
                left: "76%",
                top: "13%",
                zIndex: 2000,
                boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
              }}
              id="popup"
              className="popup-animation"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0px",
                }}
              >
                <h5
                  style={{
                    color: "#EE6C3E",
                    fontSize: "15px",
                    fontWeight: 450,
                  }}
                >
                  Hi! You are not{" "}
                  <span style={{ fontWeight: 900 }}>logged in</span> yet.
                </h5>
                <button
                  style={{
                    color: "#c5c5c5",
                    backgroundColor: "#fff",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "24px",
                  }}
                  onClick={handleClose}
                >
                  &times;
                </button>
              </div>
              <h6
                style={{
                  fontSize: "14px",
                  marginTop: "6px",
                  fontWeight: 100,
                  marginBottom: "12px",
                  fontStyle: "italic",
                  color: 'gray'
                }}
              >
                Make sure you unlock your membership.
              </h6>
              <p
                style={{
                  fontSize: "12px",
                  marginTop: "0px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  textAlign: "justify",
                }}
              >
                We want to ensure you get the most out of your experience with
                us. By saving your order history, Wishlist items, and loyalty
                points, you'll have easy access to everything you love. Plus,
                you'll be first in line for exclusive offers just for you!
              </p>
            </div>
          )}

      <Header />
      {!isHeroShow && <Hero />}

      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
