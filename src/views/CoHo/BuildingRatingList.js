import { useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import RatingDisplay from "components/RatingDisplay/RatingDisplay";
import { CoHoDorms } from "./CoHoConfig";

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
            <div key={index}>
              <ListItemButton
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
                    sx={{
                      marginRight: "10px",
                      transform: toggleList.includes(d.label)
                        ? "rotate(-180deg)"
                        : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                ) : (
                  <div>
                    <RatingDisplay path3={d.path3} />
                  </div>
                )}
              </ListItemButton>

              {d.unit && (
                <Collapse
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
                          underline="always"
                          sx={linkStyle}
                        >
                          {u.label}
                        </Link>
                        <RatingDisplay path3={u.path3} />
                      </ListItemButton>
                    </List>
                  ))}
                </Collapse>
              )}
            </div>
          ))}
        </>
      )}
    </List>
  );
};

export default CoHoBuildingRating;
