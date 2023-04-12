import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Alert from "@mui/material/Alert";

import styles from "./search.module.css";

export default function ComboBox({ setZoom, setCenter }) {
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState(false);

  function newValue(value) {
    setValue(value);
    if (value === null) {
      setCenter({
        lat: 42.40735001860593,
        lng: -71.12106588226075,
      });
      setZoom(17);
      return;
    }

    setZoom(19);

    switch (value.label) {
      case "CoHo (Community Housing)":
        setCenter({
          lat: 42.410239549677414,
          lng: -71.12123496015069,
        });
        return;
      case "Fairmount House":
        setCenter({
          lat: 42.409912676660966,
          lng: -71.12124490144829,
        });
        return;
      case "Harleston Hall":
        setCenter({
          lat: 42.403637698129884,
          lng: -71.12040219459307,
        });
        return;
      case "Haskell Hall":
        setCenter({
          lat: 42.40455656040672,
          lng: -71.12177003837492,
        });
        return;
      case "Hillside Apartments":
        setCenter({
          lat: 42.40894509417623,
          lng: -71.11935062690905,
        });
        return;
      case "Latin Way":
        setCenter({
          lat: 42.40394891986206,
          lng: -71.12119008700702,
        });
        return;
      case "Lewis Hall":
        setCenter({
          lat: 42.40486195456316,
          lng: -71.12269480624146,
        });
        return;
      case "Sophia Gordon Hall":
        setCenter({
          lat: 42.40509748849349,
          lng: -71.11842243463789,
        });
        return;
      case "Stratton Hall":
        setCenter({
          lat: 42.405121254856375,
          lng: -71.11925928377993,
        });
        return;
      case "West Hall":
        setCenter({
          lat: 42.408253977552356,
          lng: -71.12031835750494,
        });
        return;
      case "Wren Hall":
        setCenter({
          lat: 42.40982536583952,
          lng: -71.12189014665391,
        });
        return;
      case "10 Winthrop Street":
        setCenter({
          lat: 42.409562415825704,
          lng: -71.12346426525042,
        });
        return;
      case "9-11 Sunset Road":
        setCenter({
          lat: 42.40871799441268,
          lng: -71.12420763414914,
        });
        return;
      default:
        setCenter({
          lat: 42.40735001860593,
          lng: -71.12106588226075,
        });
        setZoom(17);
        return;
    }
  }

  function go(value) {
    switch (value.label) {
      case "CoHo (Community Housing)":
        window.location.href = "/coho";
        setCenter({
          lat: 42.410239549677414,
          lng: -71.12123496015069,
        });
        return;
      case "Harleston Hall":
        window.location.href = "/harleston";
        return;
      case "Haskell Hall":
        window.location.href = "/haskell";
        return;
      case "Hillside Apartments":
        window.location.href = "/hillside";
        return;
      case "Latin Way":
        window.location.href = "/latin-way";
        return;
      case "Lewis Hall":
        window.location.href = "/lewis";
        return;
      case "Sophia Gordon Hall":
        window.location.href = "/sogo";
        return;
      case "Stratton Hall":
        window.location.href = "/stratton";
        return;
      case "West Hall":
        window.location.href = "/west";
        return;
      case "Wren Hall":
        window.location.href = "/wren";
        return;
      case "10 Winthrop Street":
        window.location.href = "/10_winthrop";
        return;
      case "9-11 Sunset Road":
        window.location.href = "/9-11_sunset";
        return;
      default:
        setWarning(true);
        return;
    }
  }

  return (
    <div className={styles.container}>
      {warning ? (
        <Alert
          onClose={() => {
            setWarning(false);
          }}
          severity="warning"
          sx={{
            width: "270px",
            marginBottom: "25px",
          }}
        >
          Please select a dorm{" "}
        </Alert>
      ) : null}
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={dorms}
        sx={{
          width: 300,
          marginBottom: "25px",
        }}
        renderInput={(params) => <TextField {...params} label="Select Dorm" />}
        onChange={(event, value) => newValue(value)}
      />{" "}
      <div className={styles.btn} onClick={() => go(value)}>
        {" "}
        Go{" "}
      </div>{" "}
    </div>
  );
}

const dorms = [
  {
    label: "CoHo (Community Housing)",
  },
  {
    label: "Harleston Hall",
  },
  {
    label: "Haskell Hall",
  },
  {
    label: "Hillside Apartments",
  },
  {
    label: "Latin Way",
  },
  {
    label: "Lewis Hall",
  },
  {
    label: "Sophia Gordon Hall",
  },
  {
    label: "Stratton Hall",
  },
  {
    label: "West Hall",
  },
  {
    label: "Wren Hall",
  },
  {
    label: "10 Winthrop Street",
  },
  {
    label: "9-11 Sunset Road",
  },
];
