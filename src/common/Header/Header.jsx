import logo from "../../assets/Images/logo.png";

const Header = () => {
  return (
    <div>
      <div className="top h-20 w-12/12 fixed top-4 left-20 right-20 flex justify-between bg-top">
        <img className="my-5" style={{ width: "195px", height: "40px" }} src={logo} alt="" />
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
        <div className="cart">
            <button></button>
        </div>
      </div>

      <div className="w-12/12 fixed top-24 left-20 right-20 z-10" style={{ border: "1px solid #F0F0F0" }}>
        <nav className="bg-base-100 p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo (Centered) */}
            <div className="text-white font-bold">Logo</div>

            {/* Navbar Links (Right Side) */}
            <div className="hidden md:block order-3">
              <a href="#" className="text-black mx-4">
                Home
              </a>
              <a href="#" className="text-black mx-4">
                About
              </a>
              <a href="#" className="text-black mx-4">
                Services
              </a>
              <a href="#" className="text-black mx-4">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
