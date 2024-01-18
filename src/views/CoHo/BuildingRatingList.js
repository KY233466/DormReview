import { useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import RatingDisplay from "../../components/RatingDisplay/RatingDisplay";

const CoHoDorms = [
  { label: "11 Fairmount Street", path: "11Fairmount" },
  { label: "21 Fairmount Street", path: "21Fairmount" },
  { label: "11 Bellevue Street", path: "11Bellevue" },
  {
    label: "12 Bellevue Street",
    path: "12Bellevue/1",
    unit: [
      { label: "Unit 2", path: "/" },
      { label: "Unit 1", path: "/" },
    ],
  },
  {
    label: "14-16 Bellevue Street",
    path: "14-16Bellevue",
    unit: [
      { label: "16 Bellevue", path: "/" },
      { label: "14 Bellevue", path: "/" },
    ],
  },
  {
    label: "15 Bellevue Street",
    path: "15Bellevue",
    unit: [
      { label: "Unit 1", path: "/" },
      { label: "Unit 2", path: "/" },
    ],
  },
  {
    label: "19 Bellevue Street",
    path: "19Bellevue",
    unit: [
      { label: "Unit 1", path: "/" },
      { label: "Unit 2", path: "/" },
    ],
  },
  {
    label: "21-23 Bellevue Street",
    path: "21-23Bellevue",
    unit: [
      { label: "21 Bellevue", path: "/" },
      { label: "23 Bellevue", path: "/" },
    ],
  },
  { label: "22 Bellevue Street", path: "22Bellevue" },
  {
    label: "19-21 University Avenue",
    path: "19-21University",
    unit: [
      { label: "19 University", path: "/" },
      { label: "21 University", path: "/" },
    ],
  },
  {
    label: "4-6 Capen Street",
    path: "4-6Capen",
    unit: [
      { label: "4 Capen", path: "/" },
      { label: "6 Capen", path: "/" },
    ],
  },
  {
    label: "43-45 Winthrop Street",
    path: "43-45Winthrop/1",
    unit: [
      { label: "Unit 3", path: "/" },
      { label: "Unit 2", path: "/" },
      { label: "Unit 1", path: "/" },
    ],
  },
  {
    label: "44-46 Winthrop Street",
    path: "44-46Winthrop",
    unit: [
      { label: "44 Winthrop", path: "/" },
      { label: "46 Winthrop", path: "/" },
    ],
  },
  {
    label: "47 Winthrop Street",
    path: "47Winthrop",
    unit: [
      { label: "Unit 1", path: "/" },
      { label: "Unit 2", path: "/" },
    ],
  },
  {
    label: "50 Winthrop Street",
    path: "50Winthrop",
    unit: [
      { label: "Unit 1", path: "/" },
      { label: "Unit 2", path: "/" },
      { label: "Unit 3", path: "/" },
    ],
  },
];

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
          backgroundColor: "#BFC9D6",
          pl: "10px",
          mb: "7px",
          "&:hover, &:focus": { backgroundColor: "#BFC9D6" },
          alignItems: "center",
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
          {CoHoDorms.map((d) => (
            <>
              <ListItemButton
                key={d.label}
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
                }}
              >
                <Link
                  href={"/coho/" + d.path}
                  underline="always"
                  sx={{
                    color: "#303030",
                    textDecoration: "none !important",
                    marginBottom: "0 !important",
                    "&:hover, &:focus": {
                      textDecoration: "underline !important",
                    },
                  }}
                >
                  {d.label}
                </Link>
                {d.unit ? (
                  <KeyboardArrowDown
                    sx={{
                      transform: toggleList.includes(d.label)
                        ? "rotate(-180deg)"
                        : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                ) : (
                  <RatingDisplay rate={4.2} nReviews={4} />
                )}
              </ListItemButton>

              {d.unit && (
                <Collapse
                  in={toggleList.includes(d.label)}
                  timeout="auto"
                  unmountOnExit
                >
                  {d.unit.map((u) => (
                    <List key={u.label} component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4, mb: "5px" }}>
                        <ListItemText primary={u.label} />
                        <RatingDisplay rate={4.2} nReviews={4} />
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
