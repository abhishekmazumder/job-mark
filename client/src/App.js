// import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Landing, Register, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Dashboard /></div>} />
        <Route path="/register" element={<div><Register /></div>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<div><Error /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
