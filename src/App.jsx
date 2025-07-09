import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginForm from "./components/loginForm";
import { Route, Routes } from "react-router-dom";
import SigninForm from "./components/signinForm";
import NavBar from "./components/navBar";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<SigninForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
