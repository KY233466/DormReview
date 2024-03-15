import { lazy, Suspense } from "react";
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
import Uni1921 from "./views/CoHo/19-21University";
import Profile from "./views/Profile/Profile";
import { UserAuthContextProvider } from "./context/userAuthContext";
import Verify from "./views/Verification/verification";
import MobileMap from "./views/MobileMap";
import ReactGA from "react-ga4";
import "./App.css";

const Fairmount11 = lazy(() => import("views/CoHo/11Fairmount"));
const Fairmount21 = lazy(() => import("views/CoHo/21Fairmount"));
const Bellevue11 = lazy(() => import("./views/CoHo/11Bellevue"));
const Bellevue12 = lazy(() => import("./views/CoHo/12Bellevue"));
const Bellevue1416 = lazy(() => import("./views/CoHo/14-16Bellevue"));
const Bellevue15 = lazy(() => import("./views/CoHo/15Bellevue"));
const Bellevue19 = lazy(() => import("./views/CoHo/19Bellevue"));
const Bellevue2123 = lazy(() => import("./views/CoHo/21-23Bellevue"));
const Bellevue22 = lazy(() => import("./views/CoHo/22Bellevue"));
const Capen46 = lazy(() => import("./views/CoHo/4-6Capen"));
const Winthrop4345 = lazy(() => import("./views/CoHo/43-45Winthrop"));
const Winthrop4446 = lazy(() => import("./views/CoHo/44-46Winthrop"));
const Winthrop47 = lazy(() => import("./views/CoHo/47Winthrop"));
const Winthrop50 = lazy(() => import("./views/CoHo/50Winthrop"));

function App() {
  ReactGA.initialize("G-5EE2SGKP2Y");

  return (
    <UserAuthContextProvider>
      <Suspense fallback={<h1>Loading...</h1>}>
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
            <Route path="14-16Bellevue" element={<Bellevue1416 />} />
            <Route path="15Bellevue">
              <Route path="2" element={<Bellevue15 />} />
              <Route path="1" element={<Bellevue15 />} />
            </Route>
            <Route path="21-23Bellevue">
              <Route path="3" element={<Bellevue2123 />} />
              <Route path="2" element={<Bellevue2123 />} />
              <Route path="1" element={<Bellevue2123 />} />
            </Route>
            <Route path="22Bellevue" element={<Bellevue22 />} />
            <Route path="19-21University">
              <Route path="3" element={<Uni1921 />} />
              <Route path="2" element={<Uni1921 />} />
              <Route path="1" element={<Uni1921 />} />
            </Route>
            <Route path="43-45Winthrop">
              <Route path="3" element={<Winthrop4345 />} />
              <Route path="2" element={<Winthrop4345 />} />
              <Route path="1" element={<Winthrop4345 />} />
            </Route>
            <Route path="44-46Winthrop">
              <Route path="2" element={<Winthrop4446 />} />
              <Route path="1" element={<Winthrop4446 />} />
            </Route>
            <Route path="47Winthrop">
              <Route path="3" element={<Winthrop47 />} />
              <Route path="2" element={<Winthrop47 />} />
              <Route path="1" element={<Winthrop47 />} />
            </Route>
            <Route path="4-6Capen" element={<Capen46 />} />
            <Route path="19Bellevue" element={<Bellevue19 />} />
            <Route path="50Winthrop" element={<Winthrop50 />} />
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
      </Suspense>
    </UserAuthContextProvider>
  );
}

export default App;
