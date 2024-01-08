import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import LoginAuthFB from "./components/pages/LoginAuthFB";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/homepage' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginAuthFB />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
