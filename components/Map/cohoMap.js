import { useNavigate } from "react-router";
import styles from "./map.module.css";

import { GoogleMap, OverlayView } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const options = {
  mapId: "a694fd2df47596ad",
  disableDefaultUI: true,
  clickableIcons: false,
};

const Dorms = [
  {
    title: "11 Fairmount Street",
    path: "/coho/11-fairmount",
    location: {
      lat: 42.41025133761668,
      lng: -71.12086915523571,
    },
  },
  {
    title: "21 Fairmount Street",
    path: "/coho/21-fairmount",
    location: {
      lat: 42.40994199333359,
      lng: -71.12121565486969,
    },
  },
  {
    title: "11 Bellevue Street",
    path: "/coho/11-bellevue",
    location: {
      lat: 42.410617693627096,
      lng: -71.12147317305958,
    },
  },
  {
    title: "Green House",
    path: "/coho/green-house",
    location: {
      lat: 42.41043633602428,
      lng: -71.12111447550117,
    },
  },
  {
    title: "14-16 Bellevue Street",
    path: "/coho/14-16-bellevue",
    location: {
      lat: 42.41034463143017,
      lng: -71.12124130018209,
    },
  },
  {
    title: "15 Bellevue Street",
    path: "/coho/15-bellevue",
    location: {
      lat: 42.41053361946756,
      lng: -71.12162369225565,
    },
  },
  {
    title: "19 Bellevue Street",
    path: "/coho/19-bellevue",
    location: {
      lat: 42.41040440090709,
      lng: -71.12174372110918,
    },
  },
  {
    title: "21-23 Bellevue Street",
    path: "/coho/21-23-bellevue",
    location: {
      lat: 42.410292015199,
      lng: -71.12187246714153,
    },
  },
  {
    title: "22 Bellevue Street",
    path: "/coho/22-bellevue",
    location: {
      lat: 42.41010381559285,
      lng: -71.1215304836668,
    },
  },
  {
    title: "19-21 University Avenue",
    path: "/coho/19-21-university",
    location: {
      lat: 42.40956446905501,
      lng: -71.12046559172917,
    },
  },
  {
    title: "4-6 Capen Street",
    path: "/coho/4-6-capen",
    location: {
      lat: 42.41042937699091,
      lng: -71.12208790207626,
    },
  },
  {
    title: "43-45 Winthrop Street",
    path: "/coho/43-45-winthrop",
    location: {
      lat: 42.41072608811737,
      lng: -71.12206192634955,
    },
  },
  {
    title: "44-46 Winthrop Street",
    path: "/coho/44-46-winthrop",
    location: {
      lat: 42.41082729302144,
      lng: -71.12251185098322,
    },
  },
  {
    title: "47 Winthrop Street",
    path: "/coho/47-winthrop",
    location: {
      lat: 42.4108191600724,
      lng: -71.12195582977292,
    },
  },
];

export default function CoHoMap({ center, zoom }) {
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
