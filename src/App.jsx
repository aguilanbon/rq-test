import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <div className="max-w-screen min-h-screen flex items-center flex-col">
      <NavigationBar />
      <div className="flex flex-col items-center justify-center w-3/4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
