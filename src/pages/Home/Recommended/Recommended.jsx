import img1 from "../../../assets/Images/Recommended/image.png";
import img2 from "../../../assets/Images/Recommended/image (1).png";
import img3 from "../../../assets/Images/Recommended/image (2).png";
import img4 from "../../../assets/Images/Recommended/image (3).png";
import img5 from "../../../assets/Images/Recommended/image (4).png";
import img6 from "../../../assets/Images/Recommended/image (5).png";

import "./Recommended.css";
import { Button } from "@mui/material";

const Recommended = () => {
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
          Recommended for You
        </p>
      </div>

      <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-2">
        <div className="col-span-4 cardRecommended">
          <img src={img1} alt="" />
          <div>
            <p className="cardRecommendedTitle">STEAMASSETTO CORSA ULTIMATE EDITION PC</p>
            <p className="cardRecommendedSubTitle">IQD 62000</p>
            <Button variant="outlined" size="small">
              Buy Now
            </Button>
          </div>
        </div>
        <div className="col-span-4 cardRecommended">
        <img src={img2} alt="" />
          <div>
            <p className="cardRecommendedTitle">STEAMASSETTO CORSA ULTIMATE EDITION PC</p>
            <p className="cardRecommendedSubTitle">IQD 62000</p>
            <Button variant="outlined" size="small">
              Buy Now
            </Button>
          </div>
        </div>
        <div className="col-span-4 cardRecommended">
        <img src={img3} alt="" />
          <div>
            <p className="cardRecommendedTitle">STEAMASSETTO CORSA ULTIMATE EDITION PC</p>
            <p className="cardRecommendedSubTitle">IQD 62000</p>
            <Button variant="outlined" size="small">
              Buy Now
            </Button>
          </div>
        </div>
        
        <div className="col-span-4 cardRecommended">
        <img src={img4} alt="" />
          <div>
            <p className="cardRecommendedTitle">STEAMASSETTO CORSA ULTIMATE EDITION PC</p>
            <p className="cardRecommendedSubTitle">IQD 62000</p>
            <Button variant="outlined" size="small">
              Buy Now
            </Button>
          </div>
        </div>
        <div className="col-span-4 cardRecommended">
        <img src={img5} alt="" />
          <div>
            <p className="cardRecommendedTitle">STEAMASSETTO CORSA ULTIMATE EDITION PC</p>
            <p className="cardRecommendedSubTitle">IQD 62000</p>
            <Button variant="outlined" size="small">
              Buy Now
            </Button>
          </div>
        </div>
        <div className="col-span-4 cardRecommended">
        <img src={img6} alt="" />
          <div>
            <p className="cardRecommendedTitle">STEAMASSETTO CORSA ULTIMATE EDITION PC</p>
            <p className="cardRecommendedSubTitle">IQD 62000</p>
            <Button variant="outlined" size="small">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
