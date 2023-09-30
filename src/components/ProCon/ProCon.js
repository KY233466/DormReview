import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./procon.module.css";
import Icon from "./icon/icon";

const ProCon = ({ pro, con }) => {
  const isMobile = useMediaQuery("(max-width:899px)");

  return (
    <div className={isMobile ? styles.containerMobile : styles.container}>
      <div className={isMobile ? styles.sectionMobile : styles.section}>
        <div className={styles.bold}> Pros: </div>
        <div className={styles.subSections}>
          {pro?.map((value, index) => (
            <Icon
              index={value.index}
              title={value.title}
              key={value.title}
              pic={value.pic}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
      <div>
        <div className={styles.bold}> Cons: </div>
        <div className={styles.subSections}>
          {con?.map((value, index) => (
            <Icon
              index={value.index}
              title={value.title}
              key={value.title}
              pic={value.pic}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProCon;
