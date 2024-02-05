import Link from "@mui/material/Link";
import RatingDisplay from "components/RatingDisplay/RatingDisplay";

const linkStyle = {
  color: "#303030",
  marginBottom: "0 !important",
  fontStyle: "italic",
  fontWeight: "100",
  cursor: "pointer",
  textDecorationColor: "rgba(25, 118, 210, 0.4) !important",
  width: "auto",
};

const altRatingDisplayBlock = ({ unitsConfig }) => {
  if (Array.isArray(unitsConfig)) {
    return (
      <div style={{ marginBottom: "7px" }}>
        {unitsConfig.map((p, index) => {
          return (
            <div key={index}>
              <Link
                underline="always"
                sx={linkStyle}
                onClick={() => {
                  window.location.href = "/coho/" + p.url;
                }}
              >
                {p.label}
              </Link>
              <RatingDisplay path3={p.path3} />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ marginBottom: "7px" }}>
      <RatingDisplay path3={unitsConfig.path3} />
    </div>
  );
};

export default altRatingDisplayBlock;
