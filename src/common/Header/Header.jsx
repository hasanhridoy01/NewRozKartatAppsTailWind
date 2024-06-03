import logo from "../../assets/Images/logo.png";
import country from "../../assets/Images/ico.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isActiveHome, setIsActiveHome] = React.useState(false);
  const [isActiveGame, setIsActiveGame] = React.useState(false);
  const [isActiveVouchers, setIsActiveVouchers] = React.useState(false);
  const [isActiveBill, setIsActiveBill] = React.useState(false);
  const [isActiveMobile, setIsActiveMobile] = React.useState(false);

  const handleActiveEffectHome = (e) => {
    e.preventDefault();
    // navigate("/");
    setIsActiveHome(true);
    setIsActiveGame(false);
    setIsActiveVouchers(false);
    setIsActiveBill(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectGame = (e) => {
    e.preventDefault();
    // navigate("/game");
    setIsActiveGame(true);
    setIsActiveHome(false);
    setIsActiveVouchers(false);
    setIsActiveBill(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectVouchers = (e) => {
    e.preventDefault();
    // navigate("/vouchers");
    setIsActiveVouchers(true);
    setIsActiveHome(false);
    setIsActiveGame(false);
    setIsActiveBill(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectBill = (e) => {
    e.preventDefault();
    // navigate("/billPay");
    setIsActiveBill(true);
    setIsActiveHome(false);
    setIsActiveGame(false);
    setIsActiveVouchers(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectMobile = (e) => {
    e.preventDefault();
    // navigate("/mobile");
    setIsActiveMobile(true);
    setIsActiveHome(false);
    setIsActiveGame(false);
    setIsActiveVouchers(false);
    setIsActiveBill(false);
  };
  return (
    <div>
      <div
        className="bg-top h-20 fixed top-4 left-0 right-0"
        style={{ width: "100vw" }}
      >
        <div className="top h-20 w-12/12 fixed top-4 left-20 right-20 flex justify-between">
          <img
            className="my-5"
            style={{ width: "195px", height: "40px" }}
            src={logo}
            alt=""
          />
          <div className="flex my-4">
            <select
              className="appearance-none"
              style={{
                width: "94px",
                height: "48px",
                padding: "14px 24px 14px 24px",
                gap: "24px",
                background: "var(--Color-Gray-10, #F0F0F0)",
              }}
            >
              <option value="" disabled selected>
                All
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <input
              type="text"
              className=""
              style={{
                width: "569px",
                height: "48px",
                gap: "0px",
                border: "1px solid #E5E5E5",
                opacity: "0px",
              }}
            />
          </div>
          <div className="flex my-4 gap-2 p-0">
            <div className="" style={{ height: "40px", width: "92px" }}>
              <button
                style={{ background: "#fff", padding: "14px 10px 14px 10px" }}
                className="px-3 py-1"
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{ color: "#222222" }}
                />{" "}
                $100
              </button>
            </div>
            <div className="">
              <img
                src={country}
                style={{ height: "51px", width: "48px" }}
                alt=""
              />
            </div>
            <div className="" style={{ height: "46px", width: "48px" }}>
              <button
                style={{ background: "#fff", padding: "14px 14px" }}
                className="px-3 py-1"
              >
                <FontAwesomeIcon icon={faUser} style={{ color: "#222222" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed top-24 left-0 right-0 h-16"
        style={{ border: "1px solid #F0F0F0", width: "100vw" }}
      >
        <div className="w-12/12 fixed top-29 left-20 right-20 z-10 justify-between">
          <nav className="bg-base-100 py-4 mt-1 justify-between">
            <div className="container mx-auto flex justify-between items-center">
              {/* Logo (Centered) */}
              <div
                className="flex gap-4 ml-0 pl-0"
                style={{ marginLeft: "0px", paddingLeft: "0px" }}
              >
                <button>
                  <FontAwesomeIcon
                    icon={faBars}
                    style={{
                      fontSize: "20px",
                      marginLeft: "0px",
                      paddingLeft: "0px",
                    }}
                  />
                </button>
                <p
                  style={{
                    height: "19px",
                    width: "100px",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#222222",
                  }}
                >
                  Explore All
                </p>
              </div>

              {/* Navbar Links (Right Side) */}
              <div className="hidden md:block order-3">
                <NavLink
                  to=""
                  className="text-black mx-4"
                  onClick={handleActiveEffectHome}
                  style={{
                    borderBottom: isActiveHome ? "2px solid #EC5928" : "none",
                    padding: "20px",
                  }}
                >
                  HOME
                </NavLink>
                <NavLink
                  to=""
                  className="text-black mx-4"
                  onClick={handleActiveEffectGame}
                  style={{
                    borderBottom: isActiveGame ? "2px solid #EC5928" : "none",
                    padding: "20px",
                  }}
                >
                  GAME TOP-UP
                </NavLink>
                <NavLink
                  to=""
                  className="text-black mx-4"
                  onClick={handleActiveEffectVouchers}
                  style={{
                    borderBottom: isActiveVouchers
                      ? "2px solid #EC5928"
                      : "none",
                    padding: "20px",
                  }}
                >
                  VOUCHERS
                </NavLink>
                <NavLink
                  to=""
                  className="text-black mx-4"
                  onClick={handleActiveEffectBill}
                  style={{
                    borderBottom: isActiveBill ? "2px solid #EC5928" : "none",
                    padding: "20px",
                  }}
                >
                  BILL PAY
                </NavLink>
                <NavLink
                  to=""
                  className="text-black mx-4"
                  onClick={handleActiveEffectMobile}
                  style={{
                    borderBottom: isActiveMobile ? "2px solid #EC5928" : "none",
                    padding: "20px",
                  }}
                >
                  MOBILE RECHARGE
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
