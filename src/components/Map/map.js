import { useNavigate } from "react-router";
import styles from "./map.module.css";

import { GoogleMap, OverlayView } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const options = {
  mapId: "c74cb64c84d8e1b2",
  disableDefaultUI: true,
  clickableIcons: false,
};

const Dorms = [
  {
    title: "CoHo",
    path: "/coho",
    location: {
      lat: 42.410239549677414,
      lng: -71.12123496015069,
    },
  },
  {
    title: "Harleston Hall",
    path: "/harleston",
    location: {
      lat: 42.403637698129884,
      lng: -71.12040219459307,
    },
  },
  {
    title: "Haskell Hall",
    path: "/haskell",
    location: {
      lat: 42.40455656040672,
      lng: -71.12177003837492,
    },
  },
  {
    title: "Hillside Apartments",
    path: "/hillside",
    location: {
      lat: 42.40894509417623,
      lng: -71.11935062690905,
    },
  },
  {
    title: "Latin Way",
    path: "/latin-way",
    location: {
      lat: 42.40394891986206,
      lng: -71.12119008700702,
    },
  },
  {
    title: "Lewis Hall",
    path: "/lewis",
    location: {
      lat: 42.40486195456316,
      lng: -71.12269480624146,
    },
  },
  {
    title: "Sophia Gordon Hall",
    path: "/sogo",
    location: {
      lat: 42.40509748849349,
      lng: -71.11842243463789,
    },
  },
  {
    title: "Stratton Hall",
    path: "/stratton",
    location: {
      lat: 42.405121254856375,
      lng: -71.11925928377993,
    },
  },
  {
    title: "West Hall",
    path: "/west",
    location: {
      lat: 42.408253977552356,
      lng: -71.12031835750494,
    },
  },
  {
    title: "Wren Hall",
    path: "/wren",
    location: {
      lat: 42.40982536583952,
      lng: -71.12189014665391,
    },
  },
  {
    title: "10 Winthrop Street",
    path: "/10_winthrop",
    location: {
      lat: 42.409562415825704,
      lng: -71.12346426525042,
    },
  },
  {
    title: "9-11 Sunset Road",
    path: "/9-11_sunset",
    location: {
      lat: 42.40871799441268,
      lng: -71.12420763414914,
    },
  },
];
//   useMemo <
//   MapOptions >
//   (() => ({
//     mapId: "c74cb64c84d8e1b2",
//     disableDefaultUI: true,
//     clickableIcons: false,
//   }));

// const onLoad = (polygon) => {
//   console.log("polygon: ", polygon);
// };

export default function Map({ center, zoom }) {
  // const [center, setCenter] = useState({
  //   lat: 42.40735001860593,
  //   lng: -71.12106588226075,
  // });

  // function centerLocation() {
  //   switch (value.label) {
  //     case "Carpenter House":
  //       setCenter({ lat: 42.40941424096112, lng: -71.12358797547878 });
  //       return;
  //     case "CoHo (Community Housing)":
  //        setCenter({ lat: 42.410239549677414, lng: -71.12123496015069 });
  //       return;
  // case "Fairmount House":
  //   window.location.href = "/fairmount";
  //   return;
  // case "Harleston Hall":
  //   window.location.href = "/harleston";
  //   return;
  // case "Haskell Hall":
  //   window.location.href = "/haskell";
  //   return;
  // case "Hillside Apartments":
  //   window.location.href = "/hillside";
  //   return;
  // case "Latin Way":
  //   window.location.href = "/latin_way";
  //   return;
  // case "Lewis Hall":
  //   window.location.href = "/lewis";
  //   return;
  // case "Sophia Gordon Hall":
  //   window.location.href = "/sogo";
  //   return;
  // case "Stratton Hall":
  //   window.location.href = "/stratton";
  //   return;
  // case "West Hall":
  //   window.location.href = "/west";
  //   return;
  // case "Wren Hall":
  //   window.location.href = "/wren";
  //   return;
  // case "10 Winthrop Street":
  //   window.location.href = "/10_winthrop";
  //   return;
  // case "9-11 Sunset Road":
  //   window.location.href = "/9-11_sunset";
  //   return;
  //     default:
  //       setCenter({ lat: 42.40735001860593, lng: -71.12106588226075 });
  //       return;
  //   }
  // }

  const navigate = useNavigate();

  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height - 15),
  });

  return (
    <GoogleMap
      zoom={zoom}
      center={center}
      mapContainerStyle={containerStyle}
      options={options}
    >
      {Dorms.map((value, index) => (
        <OverlayView
          key={Math.random()}
          position={value.location}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={getPixelPositionOffset}
        >
          <div onClick={() => navigate(value.path)} className={styles.bubble}>
            {value.title}
          </div>
        </OverlayView>
      ))}
    </GoogleMap>
  );
}
