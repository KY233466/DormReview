import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const BackArrow = ({ href }) => {
  return (
    <a
      href={href}
      style={{
        position: "absolute",
        padding: "5px",
        paddingLeft: "3px",
        left: "12px",
        top: "20px",
        zIndex: 1,
        height: "15px",
        width: "15px",
      }}
    >
      <ArrowBackIosIcon style={{ height: "15px", color: "#2f2f2f" }} />
    </a>
  );
};

export default BackArrow;
