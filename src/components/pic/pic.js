import TwoFloor from "../../assets/2Harleston.png"
import styles from "./pic.module.css"

function Pic() {
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
    <div>
        {/* <div>huh?</div> */}
      <img src={TwoFloor} alt="lol" useMap="#image-map" />

      <map name="image-map">
        <area
          className={styles.lol}
          target="_top"
          alt="lol"
          title="lol"
          // href="/room"
          coords="807,973,966,1073"
          shape="rect"
          onClick={() => {
            console.log("clicked");
          }}
        />
      </map>
    </div>
  );
}

export default Pic;
