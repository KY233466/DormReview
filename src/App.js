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
import Uni19 from "./views/CoHo/19-uni/Uni19";
import Profile from "./views/Profile/Profile";
import { UserAuthContextProvider } from "./context/userAuthContext";
import Lol from "./views/Mobile/Lol";
import Verify from "./views/Verification/verification";
import MobileMap from "./views/MobileMap/MobileMap";
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
        <Route path="/" element={<Landing />} />
        <Route path="/map" element={<MobileMap />} />
        <Route path="/mobile" element={<Lol />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/coho" element={<CoHo />} />
        <Route path="/coho/11-fairmount" element={<CoHo />} />
        <Route path="/coho/21-fairmount" element={<CoHo />} />
        <Route path="/coho/11-bellevue" element={<CoHo />} />
        <Route path="/coho/green-house" element={<CoHo />} />
        <Route path="/coho/14-16-bellevue" element={<CoHo />} />
        <Route path="/coho/15-bellevue" element={<CoHo />} />
        <Route path="/coho/19-bellevue" element={<CoHo />} />
        <Route path="/coho/21-23-bellevue" element={<CoHo />} />
        <Route path="/coho/22-bellevue" element={<CoHo />} />
        <Route path="/coho/19-21-university" element={<Uni19 />} />
        <Route path="/coho/4-6-capen" element={<CoHo />} />
        <Route path="/coho/43-45-winthrop" element={<CoHo />} />
        <Route path="/coho/44-46-winthrop" element={<CoHo />} />
        <Route path="/coho/47-winthrop" element={<CoHo />} />
        <Route path="/harleston" element={<Harleston />} />
        <Route path="/haskell" element={<Haskell />} />
        <Route path="/hillside" element={<Hillside />} />
        <Route path="/latin-way" element={<LatinWay />} />
        <Route path="/lewis" element={<Lewis />} />
        <Route path="/sogo" element={<SoGo />} />
        <Route path="/stratton" element={<Stratton />} />
        <Route path="/west" element={<West />} />
        <Route path="/wren" element={<Wren />} />
        <Route path="/10_winthrop" element={<Winthrop />} />
        <Route path="/9-11_sunset" element={<Sunset />} />
        <Route path="/verify-email" element={<Verify />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
