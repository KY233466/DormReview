import styles from "./procon.module.css";
import Icon from "./icon/icon";

const ProCon = ({ pro, con }) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.bold}> Pros: </div>
        <div className={styles.subSections}>
          {pro?.map((value, index) => (
            <Icon
              index={value.index}
              title={value.title}
              key={value.title}
              pic={value.pic}
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProCon;
