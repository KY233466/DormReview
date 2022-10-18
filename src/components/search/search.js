import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Alert from "@mui/material/Alert";

import styles from "./search.module.css"

export default function ComboBox() {
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState(false);

  function go(value) {
    switch (value.label) {
        case "Carpenter House":
          window.location.href = "/carpenter";
          return;
        case "CoHo (Community Housing)":
          window.location.href = "/coho";
          return;
        case "Fairmount House":
          window.location.href = "/fairmount";
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
          window.location.href = "/latin_way";
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
          window.location.href = "/19-11_sunset";
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
          // variant="outlined"
          severity="warning"
          sx={{ width: "270px", marginBottom: "25px" }}
        >
          Please select a dorm
        </Alert>
      ) : null}

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300, marginBottom: "25px" }}
        renderInput={(params) => <TextField {...params} label="Select Dorm" />}
        onChange={(event, value) => setValue(value)}
      />
      <div className={styles.btn} onClick={() => go(value)}> Go </div>
    </div>
  );
}

const top100Films = [
  { label: "Carpenter House" },
  { label: "CoHo (Community Housing)" },
  { label: "Fairmount House" },
  { label: "Harleston Hall" },
  { label: "Haskell Hall" },
  { label: "Hillside Apartments" },
  { label: "Latin Way" },
  { label: "Lewis Hall" },
  { label: "Sophia Gordon Hall" },
  { label: "Stratton Hall" },
  { label: "West Hall" },
  { label: "Wren Hall" },
  { label: "10 Winthrop Street" },
  { label: "9-11 Sunset Road" },

  //   { label: "Bush Hall", year: 1994 },
  //   { label: "Carmichael Hall", year: 1972 },
  //   { label: "Hill Hall", year: 2003 },
  //   { label: "Hodgdon Hall", year: 1999 },
  //   { label: "Metcalf Hall", year: 2001 },
  //   { label: "Miller Hall", year: 2001 },
  //   { label: "Richardson House", year: 2001 },
  //   { label: "Tilton Hall", year: 2001 },
  //   { label: "Wilson House", year: 2001 },
];
