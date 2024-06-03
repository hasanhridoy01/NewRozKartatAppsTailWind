import logo from "../../assets/Images/logo.png";
import country from "../../assets/Images/ico.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Container,
  Divider,
  Drawer,
  Grid,
  Stack,
  useMediaQuery,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

const Header = () => {
  const [isActiveHome, setIsActiveHome] = React.useState(false);
  const [isActiveGame, setIsActiveGame] = React.useState(false);
  const [isActiveVouchers, setIsActiveVouchers] = React.useState(false);
  const [isActiveBill, setIsActiveBill] = React.useState(false);
  const [isActiveMobile, setIsActiveMobile] = React.useState(false);

  //set small screen content
  const isSmallScreen = useMediaQuery("(max-width: 500px)");

  //handle submenu....................!
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

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

  //handle menu drawer......................!
  //handleMenuDrawer............................!
  const [drawer, setDrawer] = React.useState(false);

  const handleMenuDrawer = () => {
    setDrawer(true);
  };

  const handleCloseDrawer = () => {
    setDrawer(false);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DrawerListTwo = (
    <Box
      sx={{ width: 250, padding: "40px" }}
      role="presentation"
      onClick={handleMenuDrawer}
    >
      <div className="" style={{ marginLeft: "50px", marginBottom: "20px" }}>
        <img src={logo} alt="" />
      </div>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ margin: "8px", marginLeft: "30px" }}
      >
        Home
      </Typography>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ margin: "8px", marginLeft: "30px" }}
      >
        Game Top-Up
      </Typography>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ margin: "8px", marginLeft: "30px" }}
      >
        Vouchers
      </Typography>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ margin: "8px", marginLeft: "30px" }}
      >
        Bill Pay
      </Typography>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ margin: "8px", marginLeft: "30px" }}
      >
        Mobile Recharge
      </Typography>
      <Divider />
    </Box>
  );
  return (
    <div>
      <div
        className="bg-top h-36 fixed top-0 left-0 right-0"
        style={{ width: "100vw", zIndex: 1000 }}
      >
        <div className="top h-36 w-12/12 fixed top-2 left-20 right-20 flex justify-between">
          {isSmallScreen && (
            <button onClick={handleMenuDrawer}>
              <MenuIcon
                style={{
                  fontSize: "40px",
                  marginLeft: "-40px",
                  marginTop: "-60px",
                  paddingLeft: "0px",
                }}
              />
            </button>
          )}
          <Drawer open={drawer} onClose={handleCloseDrawer}>
            {DrawerListTwo}
          </Drawer>
          {isSmallScreen ? (
            <img
              className="my-5"
              style={{ width: "195px", height: "40px", marginLeft: "60px" }}
              src={logo}
              alt=""
            />
          ) : (
            <img
              className="my-5"
              style={{ width: "195px", height: "40px" }}
              src={logo}
              alt=""
            />
          )}

          {isSmallScreen ? (
            <div
              className=""
              style={{ marginTop: "62px", marginLeft: "-290px", zIndex: 2000 }}
            >
              <div className="flex my-4">
                <select
                  className="appearance-none"
                  style={{
                    width: "113px",
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
                    width: "320px",
                    height: "48px",
                    gap: "0px",
                    border: "1px solid #E5E5E5",
                    opacity: "0px",
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="">
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
            </div>
          )}

          {isSmallScreen ? (
            <div
              className="flex my-4 gap-2 p-0"
              style={{ position: "absolute", right: -62 }}
            >
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
                  <PersonOutlineIcon style={{ color: "#222222" }} />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex my-4 gap-2 p-0">
              <div className="" style={{ height: "40px", width: "113px" }}>
                <button
                  style={{ background: "#fff", padding: "14px 10px 14px 10px" }}
                  className="px-3 py-1"
                >
                  <ShoppingCartIcon style={{ color: "#222222" }} /> $100.00
                </button>
              </div>
              <div className="">
                <img
                  src={country}
                  style={{ height: "54px", width: "48px" }}
                  alt=""
                />
              </div>
              <div className="" style={{ height: "46px", width: "48px" }}>
                <button
                  style={{ background: "#fff", padding: "14px 14px" }}
                  className="px-3 py-1"
                >
                  <PersonOutlineIcon style={{ color: "#222222" }} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {!isSmallScreen && (
        <div
          className="fixed top-24 left-0 right-0 h-16"
          style={{
            border: "1px solid #F0F0F0",
            width: "100vw",
            zIndex: 1000,
            backgroundColor: "#fff",
          }}
        >
          <div className="w-12/12 fixed top-29 left-20 right-20 z-10 justify-between">
            <nav className="bg-base-100 py-4 mt-1 justify-between">
              <div className="container mx-auto flex justify-between items-center">
                {/* Logo (Centered) */}
                <Popper
                  // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
                  sx={{
                    zIndex: 1200,
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  placement={placement}
                  transition
                  className="my-32"
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper sx={{ marginTop: "13px", width: "1360px" }}>
                        <Container sx={{ padding: "20px" }}>
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Grid
                              item
                              lg={4}
                              sx={{ padding: "20px", width: "400px" }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  marginLeft: "0px",
                                  marginBottom: "20px",
                                  color: "gray",
                                  fontSize: "14px",
                                }}
                              >
                                Vouchers
                              </Typography>
                              <Stack spacing={2}>
                                {/* <NavLink className="DNav">
                                <GamingIcon />
                                Gaming Cards
                              </NavLink> */}
                                <NavLink className="DNav">
                                  Gaming CD-Key
                                </NavLink>
                                <NavLink className="DNav">
                                  Gaming Console
                                </NavLink>
                                <NavLink className="DNav">
                                  Gaming Top-Up
                                </NavLink>
                                <NavLink className="DNav">Gift Card</NavLink>
                                <NavLink className="DNav">Subscription</NavLink>
                                <NavLink className="DNav">
                                  Play Gift Card
                                </NavLink>
                                <NavLink className="DNav">Apple Store</NavLink>
                              </Stack>
                            </Grid>
                            <Grid
                              item
                              lg={4}
                              sx={{ padding: "20px", width: "400px" }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  marginLeft: "0px",
                                  marginBottom: "20px",
                                  color: "gray",
                                  fontSize: "14px",
                                }}
                              >
                                Bill Payment
                              </Typography>
                              <Stack spacing={2}>
                                <NavLink className="DNav">
                                  Mobile Top-up
                                </NavLink>
                                <NavLink className="DNav">Gas</NavLink>
                                <NavLink className="DNav">Water</NavLink>
                                <NavLink className="DNav">Internet</NavLink>
                                <NavLink className="DNav">Electricity</NavLink>
                                <NavLink className="DNav">House Rent</NavLink>
                                <NavLink className="DNav">Education</NavLink>
                                <NavLink className="DNav"></NavLink>
                                <NavLink className="DNav"></NavLink>
                              </Stack>
                            </Grid>
                            <Grid
                              item
                              lg={4}
                              sx={{ padding: "20px", width: "400px" }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  marginLeft: "0px",
                                  marginBottom: "20px",
                                  color: "gray",
                                  fontSize: "14px",
                                }}
                              >
                                Game
                              </Typography>
                              <Stack spacing={2}>
                                <NavLink className="DNav">PC Games</NavLink>
                                <NavLink className="DNav">WebGame</NavLink>
                                <NavLink className="DNav">Mobile Games</NavLink>
                                <NavLink className="DNav">PlayStation</NavLink>
                                <NavLink className="DNav">Xbox Games</NavLink>
                                <NavLink className="DNav"></NavLink>
                                <NavLink className="DNav"></NavLink>
                                <NavLink className="DNav"></NavLink>
                                <NavLink className="DNav"></NavLink>
                                <NavLink className="DNav"></NavLink>
                                <NavLink className="DNav"></NavLink>
                              </Stack>
                            </Grid>
                          </Grid>
                        </Container>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
                {!isSmallScreen && (
                  <div
                    className="flex gap-4 ml-0 pl-0"
                    style={{
                      marginLeft: "0px",
                      paddingLeft: "0px",
                      alignItems: "center",
                    }}
                  >
                    <button onClick={handleClick("bottom-end")}>
                      <ListIcon
                        style={{
                          fontSize: "30px",
                          marginLeft: "0px",
                          paddingLeft: "0px",
                        }}
                      />
                    </button>
                    <p
                      style={{
                        height: "20px",
                        width: "100px",
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#222222",
                      }}
                    >
                      Explore All
                    </p>
                  </div>
                )}

                {/* Navbar Links (Right Side) */}
                <div className="hidden md:block order-3">
                  <NavLink
                    to="/"
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
                      borderBottom: isActiveMobile
                        ? "2px solid #EC5928"
                        : "none",
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
      )}
    </div>
  );
};

export default Header;
