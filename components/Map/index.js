import { useRouter } from "next/navigation";
import { GoogleMap, OverlayView } from "@react-google-maps/api";

import styles from "./map.module.css";

const containerStyle = {
  width: "100%",
  height: "100vh",
  zIndex: 0,
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

export default function Map({ center, zoom }) {
  const router = useRouter();

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
          <div onClick={() => router.push(value.path)} className={styles.bubble}>
            {value.title}
          </div>
        </OverlayView>
      ))}
    </GoogleMap>
  );
}
