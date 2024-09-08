import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layouts/Layout";
import { HomePage } from "./Pages/HomePage";
import AuthCallback from "./Pages/AuthCallback";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth-callback" element={<AuthCallback />} />
        <Route path="/" element={<Layout Children={<HomePage />} />} />
      </Routes>
    </div>
  );
};
