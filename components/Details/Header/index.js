import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import styles from "./header.module.css";

function Header({ title, location }) {
  const isMobile = useMediaQuery("(max-width:860px)");

  return (
    <div className={styles.header}>
      <a href={isMobile ? "/map" : "/"} className={styles.btn}>
        <ArrowBackIosIcon sx={{color: 'white'}}/>
      </a>
      <div className={styles.bold}> {title} </div>
      <div className={styles.location}> {location} </div>
    </div>
  );
}

export default Header;
