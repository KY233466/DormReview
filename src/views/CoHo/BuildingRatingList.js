import { useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import RatingDisplay from "components/RatingDisplay/RatingDisplay";

const CoHoDorms = [
  {
    label: "11 Fairmount Street",
    path: "11Fairmount",
    ratePath: "11Fairmount-rate",
  },
  {
    label: "21 Fairmount Street",
    path: "21Fairmount",
    ratePath: "21Fairmount-rate",
  },
  {
    label: "11 Bellevue Street",
    path: "11Bellevue",
    ratePath: "11Bellevue-rate",
  },
  {
    label: "12 Bellevue Street",
    path: "12Bellevue/1",
    unit: [
      { label: "Unit 2", url: "12Bellevue/2", path: "12Bellevue-2-rate" },
      { label: "Unit 1", url: "12Bellevue/1", path: "12Bellevue-1-rate" },
    ],
  },
  {
    label: "14-16 Bellevue Street",
    path: "14-16Bellevue",
    unit: [
      { label: "14 Bellevue", url: "14-16Bellevue", path: "14Bellevue-rate" },
      { label: "16 Bellevue", url: "14-16Bellevue", path: "16Bellevue-rate" },
    ],
  },
  {
    label: "15 Bellevue Street",
    path: "15Bellevue/2",
    unit: [
      { label: "Unit 1", url: "15Bellevue/1", path: "15Bellevue-1-rate" },
      { label: "Unit 2", url: "15Bellevue/2", path: "15Bellevue-2-rate" },
    ],
  },
  {
    label: "19 Bellevue Street",
    path: "19Bellevue",
    unit: [
      { label: "Unit 1", url: "19Bellevue/1", path: "19Bellevue-1-rate" },
      { label: "Unit 2", url: "19Bellevue/2", path: "19Bellevue-2-rate" },
    ],
  },
  {
    label: "21-23 Bellevue Street",
    path: "21-23Bellevue/1",
    unit: [
      { label: "21 Bellevue", url: "21-23Bellevue/2", path: "21Bellevue-rate" },
      { label: "23 Bellevue", url: "21-23Bellevue/1", path: "23Bellevue-rate" },
    ],
  },
  {
    label: "22 Bellevue Street",
    path: "22Bellevue",
    ratePath: "22Bellevue-rate",
  },
  {
    label: "19-21 University Avenue",
    path: "19-21University/1",
    unit: [
      {
        label: "19 University",
        url: "19-21University/2",
        path: "19University-rate",
      },
      {
        label: "21 University",
        url: "19-21University/1",
        path: "21University-rate",
      },
    ],
  },
  {
    label: "4-6 Capen Street",
    path: "4-6Capen",
    unit: [
      { label: "4 Capen", url: "4-6Capen", path: "4Capen-rate" },
      { label: "6 Capen", url: "4-6Capen", path: "6Capen-rate" },
    ],
  },
  {
    label: "43-45 Winthrop Street",
    path: "43-45Winthrop/1",
    unit: [
      { label: "Unit 3", url: "43-45Winthrop/3", path: "43-45Winthrop-3-rate" },
      { label: "Unit 2", url: "43-45Winthrop/2", path: "43-45Winthrop-2-rate" },
      { label: "Unit 1", url: "43-45Winthrop/1", path: "43-45Winthrop-1-rate" },
    ],
  },
  {
    label: "44-46 Winthrop Street",
    path: "44-46Winthrop/1",
    unit: [
      { label: "44 Winthrop", url: "44-46Winthrop/1", path: "44Winthrop-rate" },
      { label: "46 Winthrop", url: "44-46Winthrop/2", path: "46Winthrop-rate" },
    ],
  },
  {
    label: "47 Winthrop Street",
    path: "47Winthrop/1",
    unit: [
      { label: "Unit 1", url: "47Winthrop/1", path: "47Winthrop-1-rate" },
      { label: "Unit 2", url: "47Winthrop/2", path: "47Winthrop-2-rate" },
    ],
  },
  {
    label: "50 Winthrop Street",
    path: "50Winthrop",
    unit: [
      { label: "Unit 1", url: "50Winthrop", path: "50-Winthrop-1-rate" },
      { label: "Unit 2", url: "50Winthrop", path: "50-Winthrop-2-rate" },
      { label: "Unit 3", url: "50Winthrop", path: "50-Winthrop-3-rate" },
    ],
  },
];

const linkStyle = {
  color: "#303030",
  textDecoration: "none !important",
  marginBottom: "0 !important",
  "&:hover, &:focus": {
    textDecoration: "underline !important",
  },
};

const CoHoBuildingRating = ({ toggleList, setToggleList }) => {
  const [displayRatings, setDisplayRatings] = useState(false);

  const handleToggle = (name) => {
    if (toggleList.find((o) => o === name)) {
      let newList = toggleList.filter((o) => o !== name);
      setToggleList(newList);
      return;
    }
    setToggleList([...toggleList, name]);
  };

  const handleOnClickList = () => {
    setDisplayRatings(!displayRatings);
    setToggleList([]);
  };

  return (
    <List>
      <ListItemButton
        alignItems="flex-start"
        onClick={handleOnClickList}
        sx={{
          borderRadius: "5px",
          backgroundColor: "#e96a34",
          color: "white",
          pl: "10px",
          mb: "7px",
          "&:hover": { backgroundColor: "#CA4D18" },
          alignItems: "center",
          width: "100%",
        }}
      >
        <ListItemText primary="CoHo Buildings & Ratings" />
        <KeyboardArrowDown
          sx={{
            transform: displayRatings ? "rotate(-180deg)" : "rotate(0)",
            transition: "0.2s",
          }}
        />
      </ListItemButton>

      {displayRatings && (
        <>
          {CoHoDorms.map((d, index) => (
            <>
              <ListItemButton
                key={index}
                onClick={() => handleToggle(d.label)}
                sx={{
                  backgroundColor: d.unit ? "#F5F5F5" : "transparent",
                  "&:hover, &:focus": {
                    backgroundColor: d.unit ? "#DBDBDB" : "#F5F5F5",
                  },
                  borderRadius: "3px",
                  pr: "0px",
                  mb: "7px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href={"/coho/" + d.path}
                  underline="always"
                  sx={linkStyle}
                >
                  {d.label}
                </Link>
                {d.unit ? (
                  <KeyboardArrowDown
                    key={d.label + "arrow"}
                    sx={{
                      marginRight: "10px",
                      transform: toggleList.includes(d.label)
                        ? "rotate(-180deg)"
                        : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                ) : (
                  <RatingDisplay
                    key={d.label + "RatingDisplay"}
                    path3={d.path}
                  />
                )}
              </ListItemButton>

              {d.unit && (
                <Collapse
                  key={d.label + "collapse"}
                  in={toggleList.includes(d.label)}
                  timeout="auto"
                  unmountOnExit
                >
                  {d.unit.map((u) => (
                    <List key={u.label + index} component="div" disablePadding>
                      <ListItemButton
                        sx={{
                          pl: 4,
                          mb: "5px",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                        }}
                      >
                        <Link
                          href={"/coho/" + u.url}
                          key={d.label + "link"}
                          underline="always"
                          sx={linkStyle}
                        >
                          {u.label}
                        </Link>
                        <RatingDisplay path3={u.path} />
                      </ListItemButton>
                    </List>
                  ))}
                </Collapse>
              )}
            </>
          ))}
        </>
      )}
    </List>
  );
};

export default CoHoBuildingRating;
