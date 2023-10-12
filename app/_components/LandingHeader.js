import SigninSignup from "/components/SignUp/signin_signup";
import ProfileAvatar from "../../components/ProfileAvatar";

import styles from "./landingHeader.module.css";

function LandingHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.bold}> DormReview </div>
      <div className={styles.headerR}>
        <SigninSignup />
        <ProfileAvatar />
      </div>
    </div>
  );
}

export default LandingHeader;
