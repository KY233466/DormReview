import React from "react";

// import { Landing } from "./views/landings/Landing";
// import { Counter } from "./components/counter/Counter";
// import { JoinQueue } from "./views/JoinQueue/JoinQueue";
// import LoginPage from "./views/SignIn/SignIn";
// import { Enroll } from "./views/enroll/Enroll";
// import { TAQueue } from "./views/TAQueue/TAQueue";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Harleston from "./views/Harleston/Harleston";
import Lewis from "./views/Lewis/Lewis";
import LatinWay from "./views/Latin Way/LatinWay";
import Haskell from "./views/Haskell/Haskell";
import SoGo from "./views/SoGo/SoGo";
import CoHo from "./views/CoHo/CoHo";
import West from "./views/West/West";
import Wren from "./views/Wren/Wren";
import Hillside from "./views/Hillside/Hillside";
import Stratton from "./views/Stratton/Stratton";
import Winthrop from "./views/Winthrop/Winthrop";
import Sunset from "./views/Sunset/Sunset";
import { UserAuthContextProvider } from "./context/userAuthContext";
// import Home from "./Home";
import Verify from "./views/Verification/verification";
// import { auth } from "./config/firebase";
// import firebaseConfig from "./config/config";
// import { initializeApp } from "firebase/app";
// import AuthRoute from "./components/AuthRoute";
import "./App.css";
// import { ClockIn } from "./views/ClockIn/ClockIn";

// initializeApp(firebaseConfig);

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Landing />} />{" "}
        <Route path="/coho" element={<CoHo />} />{" "}
        <Route path="/harleston" element={<Harleston />} />{" "}
        <Route path="/haskell" element={<Haskell />} />{" "}
        <Route path="/hillside" element={<Hillside />} />{" "}
        <Route path="/latin-way" element={<LatinWay />} />{" "}
        <Route path="/lewis" element={<Lewis />} />{" "}
        <Route path="/sogo" element={<SoGo />} />{" "}
        <Route path="/stratton" element={<Stratton />} />{" "}
        <Route path="/west" element={<West />} />{" "}
        <Route path="/wren" element={<Wren />} />{" "}
        <Route path="/10_winthrop" element={<Winthrop />} />{" "}
        <Route path="/9-11_sunset" element={<Sunset />} />{" "}
        <Route path="/verify-email" element={<Verify />} />{" "}
      </Routes>{" "}
    </UserAuthContextProvider>
  );
}

export default App;
