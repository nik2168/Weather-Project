import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./Components/Auth/ProtectRoute";
import axios from "axios";
const Home = lazy(() => import("./Pages/Home/Home"));
const Login = lazy(() => import("./Pages/Login/Login"));
const DashBoard = lazy(() => import("./Pages/DashBoard/DashBoard"))
const DefaultDashBoard = lazy(() =>
  import("./Pages/Default DashBoard/DefaultDashBoard")
);
import "./App.css";
import { Skeleton } from "@mui/material";
import NotFound from "./Pages/NotFound/NotFound";
import {Toaster} from "react-hot-toast"

function App() {

  const user = true;

return (
  <BrowserRouter>
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<DefaultDashBoard />} />
          <Route path="/dashboard/:city" element={<DashBoard />} />
        </Route>
        <Route
          path="/login"
          element={
            <ProtectRoute user={!user} redirect="/">
              <Login />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <Toaster position="top-center" />
  </BrowserRouter>
);
};

export default App;
