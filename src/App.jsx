import { Toaster } from "react-hot-toast";
import DisableRightClick from "./components/common/DisableRightClick";
import AnnexureMain from "./pages/AnnexureMain";

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
      
      />
      <DisableRightClick />
      <AnnexureMain />;
    </div>
  );
}

export default App;
