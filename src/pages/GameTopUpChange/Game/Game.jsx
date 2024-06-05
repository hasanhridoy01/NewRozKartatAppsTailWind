import Recommended from "../../Home/Recommended/Recommended";
import { Button, Divider, Icon, Typography } from "@mui/material";
import img1 from "../../../assets/Images/GameCD/Frame 1000002467.png";
import img2 from "../../../assets/Images/GameCD/Frame 1000002467 1.png";
import img3 from "../../../assets/Images/GameCD/Frame 1000003048.png";
import PublicIcon from "@mui/icons-material/Public";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./Game.css";
import React from "react";

const Game = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-60 mb-24">
      <div className="container mx-auto px-10">
        <div className="">
          <p className="GamePageTitle">Game Top-up</p>
          <p className="GamePageTitleSub">
            Home / <span className="GamePageSubTitle">Game Top-up</span>
          </p>
        </div>

        <div className="flex justify-between mt-20 mb-10">
          <p
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "24px",
              color: "var(--Text-Regular, #222222)",
            }}
          >
            All (245)
          </p>
        </div>

        <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-8 gap-4">
          <div className="col-span-8">
            <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-4">
              <div className="col-span-4 GameTopCard">
                <img src={img1} alt="" />
                <p
                  className="mt-1"
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    width: "308px",
                  }}
                >
                  Play station Network Card Global
                </p>
                <div
                  className="flex"
                  style={{ alignItems: "center", color: "gray" }}
                >
                  <Icon
                    component={PublicIcon}
                    fontSize="small"
                    sx={{ verticalAlign: "middle", marginRight: "8px" }}
                  />{" "}
                  <p>Global - Xbox</p>
                </div>
                <Divider />

                <div className="flex justify-between w-full">
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.36
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "40px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      size="small"
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-span-4 GameTopCard">
                <img src={img2} alt="" />
                <p
                  className="mt-1"
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    width: "308px",
                  }}
                >
                  Play station Network Card Global
                </p>
                <div
                  className="flex"
                  style={{ alignItems: "center", color: "gray" }}
                >
                  <Icon
                    component={PublicIcon}
                    fontSize="small"
                    sx={{ verticalAlign: "middle", marginRight: "8px" }}
                  />{" "}
                  <p>Global - Xbox</p>
                </div>
                <Divider />

                <div className="flex justify-between w-full">
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.36
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "40px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      size="small"
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-span-4 GameTopCard">
                <img src={img3} alt="" />
                <p
                  className="mt-1"
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    width: "308px",
                  }}
                >
                  Play station Network Card Global
                </p>
                <div
                  className="flex"
                  style={{ alignItems: "center", color: "gray" }}
                >
                  <Icon
                    component={PublicIcon}
                    fontSize="small"
                    sx={{ verticalAlign: "middle", marginRight: "8px" }}
                  />{" "}
                  <p>Global - Xbox</p>
                </div>
                <Divider />

                <div className="flex justify-between w-full">
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.36
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "40px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      size="small"
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-span-4 GameTopCard">
                <img src={img1} alt="" />
                <p
                  className="mt-1"
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    width: "308px",
                  }}
                >
                  Play station Network Card Global
                </p>
                <div
                  className="flex"
                  style={{ alignItems: "center", color: "gray" }}
                >
                  <Icon
                    component={PublicIcon}
                    fontSize="small"
                    sx={{ verticalAlign: "middle", marginRight: "8px" }}
                  />{" "}
                  <p>Global - Xbox</p>
                </div>
                <Divider />

                <div className="flex justify-between w-full">
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.36
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "40px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      size="small"
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-span-4 GameTopCard">
                <img src={img2} alt="" />
                <p
                  className="mt-1"
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    width: "308px",
                  }}
                >
                  Play station Network Card Global
                </p>
                <div
                  className="flex"
                  style={{ alignItems: "center", color: "gray" }}
                >
                  <Icon
                    component={PublicIcon}
                    fontSize="small"
                    sx={{ verticalAlign: "middle", marginRight: "8px" }}
                  />{" "}
                  <p>Global - Xbox</p>
                </div>
                <Divider />

                <div className="flex justify-between w-full">
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.36
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "40px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      size="small"
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-span-4 GameTopCard">
                <img src={img3} alt="" />
                <p
                  className="mt-1"
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    width: "308px",
                  }}
                >
                  Play station Network Card Global
                </p>
                <div
                  className="flex"
                  style={{ alignItems: "center", color: "gray" }}
                >
                  <Icon
                    component={PublicIcon}
                    fontSize="small"
                    sx={{ verticalAlign: "middle", marginRight: "8px" }}
                  />{" "}
                  <p>Global - Xbox</p>
                </div>
                <Divider />

                <div className="flex justify-between w-full">
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.36
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "40px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      size="small"
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-span-4 GameTopCard">
                <img src={img1} alt="" />
                <p
                  className="mt-1"
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    width: "308px",
                  }}
                >
                  Play station Network Card Global
                </p>
                <div
                  className="flex"
                  style={{ alignItems: "center", color: "gray" }}
                >
                  <Icon
                    component={PublicIcon}
                    fontSize="small"
                    sx={{ verticalAlign: "middle", marginRight: "8px" }}
                  />{" "}
                  <p>Global - Xbox</p>
                </div>
                <Divider />

                <div className="flex justify-between w-full">
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.36
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "40px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      size="small"
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-span-4 GameTopCard">
                <img src={img2} alt="" />
                <p
                  className="mt-1"
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    width: "308px",
                  }}
                >
                  Play station Network Card Global
                </p>
                <div
                  className="flex"
                  style={{ alignItems: "center", color: "gray" }}
                >
                  <Icon
                    component={PublicIcon}
                    fontSize="small"
                    sx={{ verticalAlign: "middle", marginRight: "8px" }}
                  />{" "}
                  <p>Global - Xbox</p>
                </div>
                <Divider />

                <div className="flex justify-between w-full">
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.36
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "40px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      size="small"
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-span-4 GameTopCard">
                <img src={img3} alt="" />
                <p
                  className="mt-1"
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    width: "308px",
                  }}
                >
                  Play station Network Card Global
                </p>
                <div
                  className="flex"
                  style={{ alignItems: "center", color: "gray" }}
                >
                  <Icon
                    component={PublicIcon}
                    fontSize="small"
                    sx={{ verticalAlign: "middle", marginRight: "8px" }}
                  />{" "}
                  <p>Global - Xbox</p>
                </div>
                <Divider />

                <div className="flex justify-between w-full">
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.36
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "40px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      size="small"
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div
              className="border-spacing-1 px-12 py-8 relative"
              style={{
                border: "1px solid #E5E5E5",
                width: "332px",
                height: "48px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                className="w-full focus:outline-none focus:border-indigo-500"
                placeholder="Search Here......"
              />
              <SearchIcon
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                style={{ fontSize: 26, color: "gray" }}
              />
            </div>

            <div
              className="border-spacing-1 p-10 relative mt-7"
              style={{
                border: "1px solid #E5E5E5",
                width: "332px",
                height: "307px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#222222",
                }}
              >
                Categories
              </p>
              <FormGroup className="mt-3">
                <FormControlLabel
                  className="border-rounded"
                  control={<Checkbox />}
                  label="Game"
                />
                <FormControlLabel
                  className="border-rounded"
                  control={<Checkbox />}
                  label="DLCs"
                />
                <FormControlLabel
                  className="border-rounded"
                  control={<Checkbox />}
                  label="Subscription"
                />
                <FormControlLabel
                  className="border-rounded"
                  control={<Checkbox />}
                  label="Categories"
                />
              </FormGroup>
            </div>

            <div
              className="border-spacing-1 p-10 relative mt-7"
              style={{
                border: "1px solid #E5E5E5",
                width: "332px",
                height: "148px",
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center'
              }}
            >
              <p className="Price">Price range</p>
              <Box sx={{ width: '244px', marginTop: '5px' }}>
                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
              </Box>
              <div className="flex gap-3">
                <input className="inputField" type="text" />
                <input className="inputField" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Recommended />
    </div>
  );
};

export default Game;
