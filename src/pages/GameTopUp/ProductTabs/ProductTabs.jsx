import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Categories from "./Categories";
import Platform from "./Platform";
import Device from "./Device";
import Regions from "./Regions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-10">
      <div className="">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center'}} className="px-6">
            <p
              style={{
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
                color: "var(--Text-Regular, #222222)",
              }}
            >
              All Games (500)
            </p>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                borderBottom: "2px solid #E5E5E5",
                "& .MuiTabs-indicator": {
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  "&::after": {
                    content: '""',
                    width: "42px", // Set the custom width
                    height: "3px", // Set the indicator color
                    borderRadius: "2px",
                  },
                },
                marginBottom: "20px",
              }}
            >
              <Tab
                sx={{
                  color: "#555555",
                  "&.Mui-selected": { color: "#d4d4d4" },
                  marginRight: "32px",
                  alignItems: "center", // Align text and icon vertically
                }}
                label="Categories" // Use ExpandMoreIcon here
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  color: "#555555",
                  "&.Mui-selected": { color: "#d4d4d4" },
                  marginRight: "32px",
                }}
                label="Platform"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  color: "#555555",
                  "&.Mui-selected": { color: "#d4d4d4" },
                  marginRight: "32px",
                }}
                label="Device"
                {...a11yProps(2)}
              />
              <Tab
                sx={{
                  color: "#555555",
                  "&.Mui-selected": { color: "#d4d4d4" },
                  marginRight: "32px",
                }}
                label="Regions"
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Categories />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Platform />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Device />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Regions />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default ProductTabs;
