import logo from "../../assets/Images/logo.png";
import country from "../../assets/Images/ico.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
            <div className="" style={{ height: "45px", width: "92px" }}>
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
              <img src={country} style={{ height: "51px", width: "48px", }} alt="" />
            </div>
            <div className="" style={{ height: "48px", width: "48px" }}>
              <button
                style={{ background: "#fff", padding: "14px 14px" }}
                className="px-3 py-1"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#222222", }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed top-24 left-0 right-0 h-16"
        style={{ border: "1px solid #F0F0F0", width: "100vw" }}
      >
        <div className="w-12/12 fixed top-29 left-20 right-20 z-10">
          <nav className="bg-base-100 p-4 mt-1">
            <div className="container mx-auto flex justify-between items-center">
              {/* Logo (Centered) */}
              <div className="text-white font-bold">Logo</div>

              {/* Navbar Links (Right Side) */}
              <div className="hidden md:block order-3">
                <a href="#" className="text-black mx-4">
                  HOME
                </a>
                <a href="#" className="text-black mx-4">
                  GAME TOP-UP
                </a>
                <a href="#" className="text-black mx-4">
                  VOUCHERS
                </a>
                <a href="#" className="text-black mx-4">
                  BILL PAY
                </a>
                <a href="#" className="text-black mx-4">
                  MOBILE RECHARGE
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
