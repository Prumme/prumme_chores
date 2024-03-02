import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/authentification/Login";
import Register from "./components/authentification/Register";
import Error404 from "./components/error/404";
import AdminDashboard from "./components/admin/dashboard/Dashboard";
import "./i18n";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./components/dashboard/Dashboard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      {/* Public */}
      <Route path="/" element={<div>Hello world!</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Super Admin Routes */}
      <Route path="/" element={<Dashboard />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>

      {/* 404 Error */}
      <Route path="/*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
