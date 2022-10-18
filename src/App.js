import React from "react";

// import { Landing } from "./views/landings/Landing";
// import { Counter } from "./components/counter/Counter";
// import { JoinQueue } from "./views/JoinQueue/JoinQueue";
// import LoginPage from "./views/SignIn/SignIn";
// import { Enroll } from "./views/enroll/Enroll";
// import { TAQueue } from "./views/TAQueue/TAQueue";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing"
import Harleston from "./views/Harleston/Harleston";
import Lewis from "./views/Lewis/Lewis"
import LatinWay from "./views/Latin Way/LatinWay";
import SoGo from "./views/SoGo/SoGo";
// import { auth } from "./config/firebase";
// import firebaseConfig from "./config/config";
// import { initializeApp } from "firebase/app";
// import AuthRoute from "./components/AuthRoute";
import "./App.css";
// import { ClockIn } from "./views/ClockIn/ClockIn";

// initializeApp(firebaseConfig);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/harleston" element={<Harleston />} />
      <Route path="/lewis" element={<Lewis />} />
      <Route path="/latin_way" element={<LatinWay />} />
      <Route path="/sogo" element={<SoGo />} />
      {/* <Route path="/sign-in" element={<LoginPage />}></Route> */}
      {/* <Route path="/account" element={<Counter />}></Route>
        <Route path="/user/courses" element={<Landing />}></Route>
        <Route path="/user/enrollment" element={<Enroll />}></Route>
        <Route
          path="/user/student/comp40/check-queue"
          element={<Counter />}
        ></Route>
        <Route
          path="/user/student/comp40/join-queue"
          element={<JoinQueue />}
        ></Route>
        <Route
          path="/user/instructor/comp40/clock-in"
          element={<ClockIn />}
        ></Route>
        <Route
          path="/user/instructor/comp40/check-queue"
          element={<TAQueue />}
        ></Route>
        <Route
          path="/user/instructor/comp40/view-detail"
          element={<Counter />}
        ></Route> */}
    </Routes>
  );
}

export default App;
