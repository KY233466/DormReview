import styles from "./icon.module.css";

function icon({ title, index, pic, isMobile }) {
  return (
    <div className={isMobile ? styles.iconsMobile : styles.icons}>
      <img alt={title} src={pic} />
      <div style={{ marginTop: "5px", fontSize: '12px' }}> {title} </div>
    </div>
  );
}

export default icon;
