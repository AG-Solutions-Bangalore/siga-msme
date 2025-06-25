import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import DisableRightClick from "./components/common/DisableRightClick";
import AnnexureMain from "./pages/AnnexureMain";
// Import other pages as needed
import AnnexureView from "./pages/AnnexureView";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

 const [hasEnter, setHasEnter] = useState(
  () => localStorage.getItem("hasEnter") === "true"
);

useEffect(() => {
  const hasPrinted = localStorage.getItem("hasPrinted") == "true";
  const lastPath = localStorage.getItem("lastPath");
  const localHasEnter = localStorage.getItem("hasEnter") == "true";
  if (localHasEnter !== hasEnter) {
    setHasEnter(localHasEnter);
  }

  if (!hasPrinted && lastPath && location.pathname !== lastPath && localHasEnter) {
    toast.error("Please take the print before leaving!");
    navigate(lastPath, { replace: true });
  } else {
    if (localHasEnter) {
      localStorage.setItem("lastPath", location.pathname);
    }
  }
}, [location.pathname, navigate, hasEnter]);

  return (
    <>
      {/* <DisableRightClick /> */}
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<AnnexureMain />} />
        <Route path="/annexure/:id" element={<AnnexureView />} />
        <Route path="*" element={<AnnexureMain />} />
      </Routes>
    </>
  );
}

export default App;
