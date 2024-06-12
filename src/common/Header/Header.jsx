import logo from "../../assets/Images/logo.png";
import country from "../../assets/Images/ico.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Drawer,
  FormControlLabel,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import OtpInput from "react-otp-input";
import Modal from "@mui/material/Modal";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import './Header.css'

//Modal Style.........................!
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #f1f1f1",
  boxShadow: 24,
  p: 4,
  margin: "auto",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
};

const Header = () => {
  const [isActiveHome, setIsActiveHome] = React.useState(false);
  const [isActiveGame, setIsActiveGame] = React.useState(false);
  const [isActiveVouchers, setIsActiveVouchers] = React.useState(false);
  const [isActiveBill, setIsActiveBill] = React.useState(false);
  const [isActiveMobile, setIsActiveMobile] = React.useState(false);
  const navigate = useNavigate();

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
    navigate("/");
    setIsActiveHome(true);
    setIsActiveGame(false);
    setIsActiveVouchers(false);
    setIsActiveBill(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectGame = (e) => {
    e.preventDefault();
    navigate("/game");
    setIsActiveGame(true);
    setIsActiveHome(false);
    setIsActiveVouchers(false);
    setIsActiveBill(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectVouchers = (e) => {
    e.preventDefault();
    navigate("/vouchers");
    setIsActiveVouchers(true);
    setIsActiveHome(false);
    setIsActiveGame(false);
    setIsActiveBill(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectBill = (e) => {
    e.preventDefault();
    navigate("/billPay");
    setIsActiveBill(true);
    setIsActiveHome(false);
    setIsActiveGame(false);
    setIsActiveVouchers(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectMobile = (e) => {
    e.preventDefault();
    navigate("/mobile");
    setIsActiveMobile(true);
    setIsActiveHome(false);
    setIsActiveGame(false);
    setIsActiveVouchers(false);
    setIsActiveBill(false);
  };

  //handleMenuDrawer............................!
  const [drawer, setDrawer] = React.useState(false);

  const handleMenuDrawer = () => {
    setDrawer(true);
  };

  const handleCloseDrawer = () => {
    setDrawer(false);
  };

  //handle modal......................!
  const [otp, setOtp] = React.useState("");
  const [isOtpComplete, setIsOtpComplete] = React.useState(false);

  const handleOtpChange = (otp) => {
    setOtp(otp);
    setIsOtpComplete(otp.length === 4);
  };

  //login modal event...................!
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
    setOpenRegistrationModal(false);
  };
  const handleCloseModal = () => setOpenModal(false);

  // Registration modal event
  const [openRegistrationModal, setOpenRegistrationModal] =
    React.useState(false);
  const handleRegistrationModalOpen = () => {
    setOpenRegistrationModal(true);
    setOpenModal(false);
  };
  const handleRegistrationModalClose = () => setOpenRegistrationModal(false);

  // Forgot modal event
  const [openForgotModal, setOpenForgotModal] = React.useState(false);
  const handleForgotModalOpen = () => {
    setOpenForgotModal(true);
    setOpenModal(false);
    setOpenRegistrationModal(false);
  };
  const handleForgotModalClose = () => setOpenForgotModal(false);

  // OTP modal event
  const [openOtpModal, setOpenOtpModal] = React.useState(false);
  const handleOTPModalOpen = () => {
    setOpenOtpModal(true);
    setOpenForgotModal(false);
    setOpenModal(false);
    setOpenRegistrationModal(false);
  };
  const handleOTPModalClose = () => setOpenOtpModal(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
                  onClick={handleOpenModal}
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
                  onClick={handleOpenModal}
                >
                  <PersonOutlineIcon style={{ color: "#222222" }} />
                </button>
                {/* Login modal */}
                <Modal
                  open={openModal}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className={`modal ${openModal ? "active" : ""}`}
                >
                  <Box sx={style}>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="" style={{ marginTop: "10px" }}>
                        <img src={logo} alt="" />
                      </div>

                      <div
                        className=""
                        style={{
                          marginTop: "14px",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "337px",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            textAlign: "center",
                            marginBottom: "10px",
                            fontFamily: "Montserrat",
                            fontOpticalSizing: "auto",
                            fontStyle: "normal",
                          }}
                        >
                          Sign In
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: "center",
                            marginBottom: "4px",
                            fontFamily: "Montserrat",
                            fontOpticalSizing: "auto",
                            fontStyle: "normal",
                            color: "#555555",
                            fontSize: "18px",
                          }}
                        >
                          Welcome back! Please enter your details.
                        </Typography>
                      </div>

                      <div
                        className=""
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <TextField
                          className="inputFieldModal"
                          type="text"
                          placeholder="Email"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon />
                              </InputAdornment>
                            ),
                            style: { border: "none" },
                          }}
                          sx={{ marginBottom: "17px" }}
                        />
                        <TextField
                          className="inputFieldModal"
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                sx={{ marginRight: "0px", marginLeft: "0px" }}
                              >
                                <IconButton>
                                  <LockOpenIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleTogglePasswordVisibility}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>

                      <div
                        className=""
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "16px",
                          width: "335px",
                        }}
                      >
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Remember Me"
                          color="info"
                        />
                        <Typography
                          onClick={handleForgotModalOpen}
                          variant="body1"
                          sx={{
                            textDecoration: "underLine",
                            float: "left",
                            color: "gray",
                            cursor: "pointer",
                          }}
                        >
                          Forgot Password
                        </Typography>
                      </div>

                      <div className="">
                        <Button
                          size="large"
                          variant="contained"
                          color="info"
                          sx={{
                            textTransform: "none",
                            marginTop: "25px",
                            width: "337px",
                            boxShadow: "none",
                            marginBottom: "23px",
                          }}
                        >
                          Sign In
                        </Button>
                      </div>

                      <Divider />

                      <div className="">
                        <Typography
                          variant="body2"
                          gutterBottom
                          sx={{ marginLeft: "-13px" }}
                        >
                          Sign in with social
                        </Typography>
                        <Stack
                          spacing={1}
                          direction={"row"}
                          sx={{ marginTop: "15px" }}
                        >
                          <FacebookRoundedIcon
                            sx={{
                              padding: "6px",
                              background: "#f1f1f1",
                              borderRadius: "5px",
                            }}
                          />
                          <TwitterIcon
                            sx={{
                              padding: "6px",
                              background: "#f1f1f1",
                              borderRadius: "5px",
                            }}
                          />
                          <InstagramIcon
                            sx={{
                              padding: "6px",
                              background: "#f1f1f1",
                              borderRadius: "5px",
                            }}
                          />
                        </Stack>
                      </div>

                      <div className="" style={{ marginTop: "17px" }}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "center" }}
                        >
                          Do not have an account?{" "}
                          <span
                            style={{
                              textDecoration: "underLine",
                              fontSize: "13px",
                              color: "orange",
                              cursor: "pointer",
                            }}
                            onClick={handleRegistrationModalOpen}
                          >
                            REGISTRATION
                          </span>
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </Modal>

                {/* Registration modal */}
                <Modal
                  open={openRegistrationModal}
                  onClose={handleRegistrationModalClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className={`modal ${openRegistrationModal ? "active" : ""}`}
                >
                  <Box sx={style}>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="" style={{ marginTop: "10px" }}>
                        <img src={logo} alt="" />
                      </div>

                      <div
                        className=""
                        style={{
                          marginTop: "14px",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "337px",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            textAlign: "center",
                            marginBottom: "10px",
                            fontFamily: "Montserrat",
                            fontOpticalSizing: "auto",
                            fontStyle: "normal",
                          }}
                        >
                          Create an account
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: "center",
                            marginBottom: "4px",
                            fontFamily: "Montserrat",
                            fontOpticalSizing: "auto",
                            fontStyle: "normal",
                            color: "#555555",
                            fontSize: "18px",
                          }}
                        >
                          Looks like you’re new to Kartat.
                        </Typography>
                      </div>

                      <div
                        className=""
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <TextField
                          className="inputFieldModal"
                          type="text"
                          placeholder="Name"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Person3OutlinedIcon />
                              </InputAdornment>
                            ),
                            style: { border: "none" },
                          }}
                          sx={{ marginBottom: "17px" }}
                        />
                        <TextField
                          className="inputFieldModal"
                          type="email"
                          placeholder="Email"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon />
                              </InputAdornment>
                            ),
                            style: { border: "none" },
                          }}
                          sx={{ marginBottom: "17px" }}
                        />
                        <TextField
                          className="inputFieldModal"
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                sx={{ marginRight: "0px", marginLeft: "0px" }}
                              >
                                <IconButton>
                                  <LockOpenIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleTogglePasswordVisibility}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>

                      <div
                        className=""
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "16px",
                          width: "335px",
                        }}
                      >
                        <FormControlLabel
                          control={<Checkbox />}
                          label="I agree to the Terms & Condition"
                          color="info"
                        />
                      </div>

                      <div className="">
                        <Button
                          size="large"
                          variant="contained"
                          color="info"
                          sx={{
                            textTransform: "none",
                            marginTop: "25px",
                            width: "337px",
                            boxShadow: "none",
                            marginBottom: "23px",
                          }}
                        >
                          Create Account
                        </Button>
                      </div>

                      <Divider />

                      <div className="">
                        <Typography
                          variant="body2"
                          gutterBottom
                          sx={{ marginLeft: "-13px" }}
                        >
                          Sign in with social
                        </Typography>
                        <Stack
                          spacing={1}
                          direction={"row"}
                          sx={{ marginTop: "15px", }}
                        >
                          <FacebookRoundedIcon
                            sx={{
                              padding: "6px",
                              background: "#f1f1f1",
                              borderRadius: "5px",
                            }}
                          />
                          <TwitterIcon
                            sx={{
                              padding: "6px",
                              background: "#f1f1f1",
                              borderRadius: "5px",
                            }}
                          />
                          <InstagramIcon
                            sx={{
                              padding: "6px",
                              background: "#f1f1f1",
                              borderRadius: "5px",
                            }}
                          />
                        </Stack>
                      </div>

                      <div className="" style={{ marginTop: "17px" }}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "center" }}
                        >
                          Already have an account?
                          <span
                            style={{
                              textDecoration: "underLine",
                              fontSize: "13px",
                              color: "orange",
                              cursor: "pointer",
                              marginLeft: "4px",
                            }}
                            onClick={handleOpenModal}
                          >
                            SIGN IN
                          </span>
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </Modal>

                {/* Forgot modal */}
                <Modal
                  open={openForgotModal}
                  onClose={handleForgotModalClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className={`modal ${openForgotModal ? "active" : ""}`}
                >
                  <Box sx={style}>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="" style={{ marginTop: "10px" }}>
                        <img src={logo} alt="" />
                      </div>

                      <div
                        className=""
                        style={{
                          marginTop: "14px",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "337px",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            textAlign: "center",
                            marginBottom: "10px",
                            fontFamily: "Montserrat",
                            fontOpticalSizing: "auto",
                            fontStyle: "normal",
                          }}
                        >
                          Please Fill This Field
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: "center",
                            marginBottom: "4px",
                            fontFamily: "Montserrat",
                            fontOpticalSizing: "auto",
                            fontStyle: "normal",
                            color: "#555555",
                            fontSize: "18px",
                          }}
                        >
                          Looks like you’re new to Kartat.
                        </Typography>
                      </div>

                      <div
                        className=""
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <TextField
                          className="inputFieldModal"
                          type="email"
                          placeholder="Email"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon />
                              </InputAdornment>
                            ),
                            style: { border: "none" },
                          }}
                          sx={{ marginBottom: "17px" }}
                        />
                        <TextField
                          className="inputFieldModal"
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                sx={{ marginRight: "0px", marginLeft: "0px" }}
                              >
                                <IconButton>
                                  <LockOpenIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleTogglePasswordVisibility}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />

                        <TextField
                          sx={{ marginTop: "17px" }}
                          className="inputFieldModal"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                sx={{ marginRight: "0px", marginLeft: "0px" }}
                              >
                                <IconButton>
                                  <LockResetOutlinedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={
                                    handleToggleConfirmPasswordVisibility
                                  }
                                  edge="end"
                                >
                                  {showConfirmPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>

                      <div
                        className=""
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "16px",
                          width: "335px",
                        }}
                      >
                        <FormControlLabel
                          control={<Checkbox />}
                          label="I agree to the Terms & Condition"
                          color="info"
                        />
                      </div>

                      <div className="">
                        <Button
                          onClick={handleOTPModalOpen}
                          size="large"
                          variant="contained"
                          color="info"
                          sx={{
                            textTransform: "none",
                            marginTop: "25px",
                            width: "337px",
                            boxShadow: "none",
                            marginBottom: "23px",
                          }}
                        >
                          Confirm
                        </Button>
                      </div>
                    </div>
                  </Box>
                </Modal>

                {/* OTP modal */}
                <Modal
                  open={openOtpModal}
                  onClose={handleOTPModalClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className={`modal ${openOtpModal ? "active" : ""}`}
                >
                  <Box sx={style}>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className=""
                        style={{ marginTop: "10px", marginRight: "140px" }}
                      >
                        <img src={logo} alt="" />
                      </div>

                      <div
                        className=""
                        style={{
                          marginTop: "9px",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "337px",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            textAlign: "left",
                            marginBottom: "10px",
                            fontFamily: "Montserrat",
                            fontOpticalSizing: "auto",
                            fontStyle: "normal",
                          }}
                        >
                          Enter OTP
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: "left",
                            marginBottom: "2px",
                            fontFamily: "Montserrat",
                            fontOpticalSizing: "auto",
                            fontStyle: "normal",
                            color: "#555555",
                            fontSize: "16px",
                          }}
                        >
                          Enter confirmation code that we sent to:
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: "left",
                            marginBottom: "4px",
                            fontFamily: "Montserrat",
                            fontOpticalSizing: "auto",
                            fontStyle: "normal",
                            color: "#69BCF3",
                            fontSize: "16px",
                          }}
                        >
                          hasanhridoy1367@gmail.com
                        </Typography>

                        <OtpInput
                          value={otp}
                          onChange={handleOtpChange}
                          numInputs={4}
                          renderSeparator={
                            <span style={{ marginRight: "14px" }}> </span>
                          }
                          renderInput={(props, index) => (
                            <input
                              {...props}
                              style={{
                                width: "45px",
                                height: "45px",
                                margin: "0 5px",
                                fontSize: "18px",
                                textAlign: "center",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                outline: "none",
                                marginTop: "10px",
                                marginLeft: "0px",
                                background: "#f1f1f1",
                              }}
                            />
                          )}
                        />

                        <Typography
                          variant="body2"
                          gutterBottom
                          sx={{ marginTop: "23px" }}
                        >
                          Didn't get the code?{" "}
                          <span style={{ color: "#44b6e1", cursor: "pointer" }}>
                            Resend
                          </span>
                        </Typography>

                        {isOtpComplete && (
                          <div className="" style={{ marginTop: "20px" }}>
                            <Button
                              size="large"
                              variant="contained"
                              gutterBottom
                              color="info"
                              sx={{
                                textTransform: "none",
                                width: "100%",
                                boxShadow: "none",
                              }}
                            >
                              Done
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </Box>
                </Modal>
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
                      <Paper sx={{ marginTop: "16px", width: "1360px" }}>
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
                    className="flex gap-4 ml-0 pl-0 align-middle"
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
                          fontWeight: 200
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
