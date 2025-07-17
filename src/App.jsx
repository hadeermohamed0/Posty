import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/loginForm";
import SignUpForm from "./pages/signupForm";
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import Allpost from "./components/Allpost";

import { Toaster } from "react-hot-toast";
import MyPosts from "./components/Myposts";

function App() {
  return (
    <>
      <NavBar />
      <Toaster position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Allpost />} />
          <Route path="/Myposts" element={<MyPosts/>} />
        </Route>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
