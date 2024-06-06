import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import Recommended from "../../Home/Recommended/Recommended";
import img from "../../../assets/Images/mobile/robi.png";

import "./Recharge.css";
import { Helmet } from "react-helmet-async";
import React from "react";

const currencies = [
  {
    value: "Bangladesh",
    label: "Bangladesh",
  },
  {
    value: "Iraq",
    label: "Iraq",
  },
];

const Recharge = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-60 mb-20">
      <Helmet>
        <title>kartat | Mobile Recharge Page</title>
      </Helmet>
      <div className="container mx-auto px-10">
        <div className="">
          <p className="GamePageTitle">Mobile Recharge</p>
          <p className="GamePageTitleSub">
            Home / <span className="GamePageSubTitle">Mobile Recharge</span>
          </p>
        </div>

        <div className="my-10 grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-5 gap-1">
          <div className="col-span-5">
            <TextField
              id="outlined-select-currency"
              sx={{ width: "80%" }}
              select
              label="Country List"
              defaultValue="Country List"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Stack sx={{ marginTop: "30px", marginBottom: "20px" }}>
              <label htmlFor="">Select Operator</label>
              <Stack sx={{ marginTop: "25px" }} direction={"row"} spacing={2}>
                <img
                  style={{
                    background: "#E5E7EB",
                    border: "1px solid #00a1a1",
                    padding: "15px",
                  }}
                  src={img}
                  alt=""
                />
                <img
                  style={{ background: "#E5E7EB", padding: "15px" }}
                  src={img}
                  alt=""
                />
                <img
                  style={{ background: "#E5E7EB", padding: "15px" }}
                  src={img}
                  alt=""
                />
              </Stack>
            </Stack>
            <TextField
              sx={{ width: "80%", marginTop: "10px" }}
              id="outlined-basic"
              label="Enter your Recipient Mobile number"
              variant="outlined"
            />
            <TextField
              sx={{ width: "80%", marginTop: "20px" }}
              id="outlined-basic"
              label="Enter recharge amount"
              variant="outlined"
            />
            <div className="" style={{ marginTop: "20px" }}>
              <FormControlLabel
                color="info"
                control={<Checkbox />}
                label="I agree the Terms and Conditions"
              />
            </div>
            <Stack
              direction={"row"}
              spacing={2}
              sx={{ marginTop: "20px", width: "458px" }}
            >
              <Button variant="outlined" color="info" fullWidth>
                Add to Cart
              </Button>
              <Button variant="contained" color="info" fullWidth>
                Add to Cart
              </Button>
            </Stack>
          </div>

          <div className="col-span-2">
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: "100%",
                width: "1px",
                margin: "0 auto",
                backgroundColor: "#E5E5E5",
              }}
            />
          </div>

          <div className="col-span-5">
            <p className="mobileTitle">
              Recharge your mobile phone credits in Bangladesh, from anywhere,
              to anyone
            </p>
            <p className="Description">Description</p>
            <p className="mobileSubTitle">
              Transition from winter to spring in comforting neutrals with a
              functional feel. These sneakers are for the Air Max superfans,
              combining elements from past Air Max models. The heel cup is
              inspired by the AM90 while the AM180 influences the textured Air
              unit, which delivers just the right amount of cushioning. Go
              ahead—max out your look.
            </p>

            <p className="mobileTitleSubListParent">Benefits</p>
            <ul>
              <li>
                The upper combines synthetic leather and airy mesh for a layered
                look built to last.
              </li>
              <li>
                Plush and comfortable, the Max Air cushioning has just the right
                amount of support.
              </li>
              <li>Rubber outsole gives you durable traction.</li>
            </ul>

            <p className="mobileTitleSubListParent">Product details</p>
            <ul>
              <li>Foam midsole</li>
              <li>Rubber outsole</li>
              <li>
                Colour Shown: Light Bone/Neutral Olive/Light Bone/Neutral Olive
              </li>
              <li>Style: FN0136-001</li>
              <li>Country/Region of Origin: Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <p className="GamePageTitle">TERMS OF USE</p>
          <p className="GamePageTitleSub">
            UPDATED AND EFFECTIVE AS OF Jan 28 2024
          </p>
          <p className="GamePageTitleSub">
            Welcome to the KARTAT website. KARTAT is an online digital goods and
            services platform that facilitates, among others, sale and purchase
            of games, related merchandise and such other items including but not
            limited to game cards, gift cards, and services top up merchants and
            buyers or customers.
          </p>
        </div>
      </div>
      <Recommended />
    </div>
  );
};

export default Recharge;
