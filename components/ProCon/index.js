import useMediaQuery from "@mui/material/useMediaQuery";

import Icon from "./icon";

import styles from "./procon.module.css";

const ProCon = ({ pro, con }) => {
  const isMobile = useMediaQuery("(max-width:860px)");

  return (
    <div className={isMobile ? styles.containerMobile : styles.container}>
      <div className={isMobile ? styles.proMobile : styles.pro}>
        <div className={styles.bold}> Pros: </div>
        <div
          className={isMobile ? styles.subSectionsMobile : styles.subSections}
        >
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
        <div
          className={isMobile ? styles.subSectionsMobile : styles.subSections}
        >
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
