import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Header />
      <h1>HI</h1>
      {/* rest of applicatin */}
    </main>
  );
}

export default App;
