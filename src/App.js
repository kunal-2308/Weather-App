import "./App.css";
import Alerts from "./Components/Alerts";
import Forecast from "./Components/Forecast";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainState from "./Context/MainState";
function App() {
  return (
    <>
      <MainState>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/HomePage" element={<HomePage />}></Route>
            <Route exact path="/Alerts" element={<Alerts />}></Route>
            <Route exact path="/Forecast" element={<Forecast />}></Route>
          </Routes>
        </BrowserRouter>
      </MainState>
    </>
  );
}

export default App;
