import { Outlet } from "react-router-dom";
import Sports from "./Sports";
function App() {
  return (
    <div className="max-w-screen min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center w-3/4">
        <Sports />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
