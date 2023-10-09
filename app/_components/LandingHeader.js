import styles from "./landingHeader.module.css";
import SigninSignup from "../../components/SignUp/signin_signup";
// import Profile from "../profile/profile";

function LandingHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.bold}> DormReview </div>
      <div className={styles.headerR}>
        <SigninSignup />
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default LandingHeader;
