import styles from "./header.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Header({ title, location }) {
  return (
    <div className={styles.header}>
      <a href="/" className={styles.btn}>
        <ArrowBackIosIcon />
      </a>
      <div className={styles.bold}> {title} </div>
      <div className={styles.location}> {location} </div>
    </div>
  );
}

export default Header;
