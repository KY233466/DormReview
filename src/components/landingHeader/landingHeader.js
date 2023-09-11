import styles from "./landingHeader.module.css";
// import { getAuth } from "firebase/auth";
import SigninSignup from "../signUp/signin_signup";
import Profile from "../profile/profile";

// function State() {
//   // if (getAuth().currentUser != null) {
//   if (getAuth().currentUser?.emailVerified) {
//     console.log("hummm");
//     return null;
//   } else {
//     console.log("not verified");
//     return <div> please verify your account </div>;
//   }
//   // }
// }

function LandingHeader() {
  // const [status, setStatus] = useState(
  //   getAuth() != null && !getAuth().currentUser?.emailVerified
  // );

  return (
    <div className={styles.header}>
      <div className={styles.bold}> DormReview </div>
      <div className={styles.headerR}>
        <SigninSignup />
        <Profile />
      </div>
    </div>
  );
}

export default LandingHeader;
