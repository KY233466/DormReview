import Draggable from "react-draggable-bottom-sheet";
import { useState } from "react";
import ProCon from "../../components/ProCon/ProCon";
import bathroom from "../../assets/bathroom.png";
import elevator from "../../assets/elevator.png";
import Location from "../../assets/location.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Lol = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openBottomSheet = () => setIsOpen(true);
  const closeBottomSheet = () => setIsOpen(false);

  const styles = {
    backdrop: {
      opacity: 0,
    },
    window: {
      wrap: {
        borderRadius: "10px 10px 0 0",
      },
    },
    dragIndicator: {
      wrap: {
        opacity: 0,
        paddingTop: 0,
      },
      indicator: {
        opacity: 0,
      },
    },
  };

  const Pro = [
    {
      title: "Single Person Bathrooms",
      pic: bathroom,
    },
    {
      title: "Elevator",
      pic: elevator,
    },
  ];

  const Con = [
    {
      title: "Far From Center of Campus",
      pic: Location,
    },
  ];

  return (
    <div style={{ backgroundColor: "orange", height: "630px" }}>
      <button onClick={openBottomSheet}>Click me 🤩</button>
      <Draggable isOpen={isOpen} close={closeBottomSheet} styles={styles}>
        <div style={{ textAlign: "left", padding: "0px 16px 16px 16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <h2>Harleston Hall</h2>
              <p>Downhill</p>
            </div>
            <a href="/harleston" className={styles.btn}>
              <ArrowBackIosIcon />
            </a>
          </div>

          <div>Sophomore ✅</div>
          <div>Extra-long twin bed · 13 washers · 14 dryers</div>
          <div>167 doubles · 51 singles · 1 triple</div>

          <hr />

          <ProCon key={"Harleston Hall"} pro={Pro} con={Con} />
        </div>
      </Draggable>
    </div>
  );
};

export default Lol;
