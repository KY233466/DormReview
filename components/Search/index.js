import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./index.module.css";

const textfieldStyle = {
  "& .MuiInputBase-input.MuiAutocomplete-input": {
    fontSize: "16px",
  },
};

const autocompleteStyle = {
  width: "90%",
  "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
    background: "white",
    borderRadius: "25px",
  },
};

const autocompleteStyleTablet = {
  width: "260px",
  "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
    background: "white",
    borderRadius: "25px",
  },
};

function ComboBox({
  setZoom,
  setCenter,
  showGoBtn = true,
  setSelectedDormName,
}) {
  const [selectedDorm, setSelectedDorm] = useState("");
  const [warning, setWarning] = useState(false);

  const isMobile = useMediaQuery("(max-width:860px)");
  const isTablet = useMediaQuery("(min-width:460px)");

  const listboxStyle = { maxHeight: "9.5rem" };
  const listboxStyleMobile = { maxHeight: "14rem" };

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

  const location = {
    "CoHo (Community Housing)": {
      mobile: {
        lat: 42.410375193093955,
        lng: -71.12100260908859,
      },
      pc: {
        lat: 42.410239549677414,
        lng: -71.12123496015069,
      },
    },
    "Harleston Hall": {
      mobile: {
        lat: 42.40355311542904,
        lng: -71.12046098315965,
      },
      pc: {
        lat: 42.403637698129884,
        lng: -71.12040219459307,
      },
    },
    "Haskell Hall": {
      mobile: {
        lat: 42.40422369976813,
        lng: -71.12191802857237,
      },
      pc: {
        lat: 42.404287303183715,
        lng: -71.12190497763478,
      },
    },
    "Hillside Apartments": {
      mobile: {
        lat: 42.40874549854822,
        lng: -71.11926016533442,
      },
      pc: {
        lat: 42.40894509417623,
        lng: -71.11935062690905,
      },
    },
    "Latin Way": {
      mobile: {
        lat: 42.40382180736755,
        lng: -71.12117580391173,
      },
      pc: {
        lat: 42.40394891986206,
        lng: -71.12119008700702,
      },
    },
    "Lewis Hall": {
      mobile: {
        lat: 42.40467970327077,
        lng: -71.12272608853274,
      },
      pc: {
        lat: 42.40486195456316,
        lng: -71.12269480624146,
      },
    },
    "Sophia Gordon Hall": {
      mobile: {
        lat: 42.40491730834321,
        lng: -71.11860337202084,
      },
      pc: {
        lat: 42.40509748849349,
        lng: -71.11842243463789,
      },
    },
    "Stratton Hall": {
      mobile: {
        lat: 42.40497519571491,
        lng: -71.1192545470877,
      },
      pc: {
        lat: 42.405121254856375,
        lng: -71.11925928377993,
      },
    },
    "West Hall": {
      mobile: {
        lat: 42.408112383261496,
        lng: -71.1203523188556,
      },
      pc: {
        lat: 42.408253977552356,
        lng: -71.12031835750494,
      },
    },
    "Wren Hall": {
      mobile: {
        lat: 42.40966898842749,
        lng: -71.1219157982569,
      },
      pc: {
        lat: 42.40982536583952,
        lng: -71.12189014665391,
      },
    },
    "10 Winthrop Street": {
      mobile: {
        lat: 42.40952978700597,
        lng: -71.1234434444138,
      },
      pc: {
        lat: 42.409562415825704,
        lng: -71.12346426525042,
      },
    },
    "9-11 Sunset Road": {
      mobile: {
        lat: 42.40873503042124,
        lng: -71.12420323658068,
      },
      pc: {
        lat: 42.40871799441268,
        lng: -71.12420763414914,
      },
    },
    default: {
      mobile: {
        lat: 42.40735001860593,
        lng: -71.12106588226075,
      },
      pc: {
        lat: 42.40735001860593,
        lng: -71.12106588226075,
      },
    },
  };

  function newValue(value) {
    if (value === null) {
      setSelectedDormName("");
      setCenter({
        lat: 42.40735001860593,
        lng: -71.12106588226075,
      });
      setZoom(17);
      return;
    }

    setSelectedDorm(value.label);
    setSelectedDormName?.(value.label);
    setZoom(19);

    if (
      value.label === "" ||
      value.label === null ||
      value.label === undefined
    ) {
      setCenter({
        lat: 42.40735001860593,
        lng: -71.12106588226075,
      });
      setZoom(17);
    } else {
      const dormLocation = isMobile
        ? location[value.label].mobile
        : location[value.label].pc;
      setCenter(dormLocation);
    }
  }

  function go(value) {
    switch (value) {
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
    <div className={showGoBtn ? styles.container : styles.floatContainer}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        size="small"
        options={dorms}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        getOptionLabel={(option) => option.label}
        sx={isMobile && isTablet ? autocompleteStyleTablet : autocompleteStyle}
        ListboxProps={{ style: isMobile ? listboxStyleMobile : listboxStyle }}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField size="small" sx={textfieldStyle} {...params} />
        )}
        onChange={(event, value) => newValue(value)}
      />

      {showGoBtn && (
        <button className={styles.btn} onClick={() => go(selectedDorm)}>
          Go
        </button>
      )}
    </div>
  );
}

export default ComboBox;
