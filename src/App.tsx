import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Details from "./components/Details";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/airbnbs/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
