import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IOSHLevel3 from "./components/IOSHLevel3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iosh-level-3" element={<IOSHLevel3 />} />
    </Routes>
  );
}

export default App;
