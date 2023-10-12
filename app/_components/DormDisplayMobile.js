import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import MobileDetailBottomSheet from "/components/MobileDetailBottomSheet";
import FloorPlan from "/components/FloorPlan";

function DormDisplayMobile({ Content, floor, Pro, Con }) {
  return (
    <>
      <a
        href={"/map"}
        style={{
          position: "absolute",
          padding: "5px",
          paddingLeft: "3px",
          left: "12px",
          top: "20px",
          zIndex: 1,
          height: "15px",
          width: "15px",
        }}
      >
        <ArrowBackIosIcon style={{ height: "15px", color: "#2f2f2f" }} />
      </a>
      <FloorPlan displayDetail={true} floor={floor} />
      <MobileDetailBottomSheet content={Content} pro={Pro} con={Con} />
    </>
  );
}

export default DormDisplayMobile;
