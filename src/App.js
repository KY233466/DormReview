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
import Verify from "./views/Verification/verification";
import MobileMap from "./views/MobileMap";
import ReactGA from "react-ga4";
import Fairmount11 from "views/CoHo/11Fairmount";
import Fairmount21 from "views/CoHo/21Fairmount";
import Winthrop4345 from "./views/CoHo/43-45Winthrop";
import Bellevue11 from "./views/CoHo/11Bellevue";
import Bellevue12 from "./views/CoHo/12Bellevue";
import "./App.css";

function App() {
  ReactGA.initialize("G-5EE2SGKP2Y");

  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/map" element={<MobileMap />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/coho" element={<CoHo />} />
        <Route path="/coho">
          <Route path="11Fairmount" element={<Fairmount11 />} />
          <Route path="21Fairmount" element={<Fairmount21 />} />
          <Route path="11Bellevue" element={<Bellevue11 />} />
          <Route path="12Bellevue">
            <Route path="3" element={<Bellevue12 />} />
            <Route path="2" element={<Bellevue12 />} />
            <Route path="1" element={<Bellevue12 />} />
          </Route>
          <Route path="43-45Winthrop">
            <Route path="3" element={<Winthrop4345 />} />
            <Route path="2" element={<Winthrop4345 />} />
            <Route path="1" element={<Winthrop4345 />} />
          </Route>
          <Route path="14-16Bellevue" element={<CoHo />} />
          <Route path="15Bellevue" element={<CoHo />} />
          <Route path="19Bellevue" element={<CoHo />} />
          <Route path="21-23Bellevue" element={<CoHo />} />
          <Route path="22Bellevue" element={<CoHo />} />
          <Route path="19-21University" element={<Uni19 />} />
          <Route path="4-6Capen" element={<CoHo />} />
          <Route path="44-46-winthrop" element={<CoHo />} />
          <Route path="47-winthrop" element={<CoHo />} />
        </Route>
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
