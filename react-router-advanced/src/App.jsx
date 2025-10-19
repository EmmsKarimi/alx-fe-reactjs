import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
