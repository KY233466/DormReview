import styles from "./icon.module.css";

function icon({ title, index, pic }) {
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
    <div className={styles.icons}>
      <img alt={title} src={pic}/>
      <div> {title} </div>
    </div>
  );
}

export default icon;
