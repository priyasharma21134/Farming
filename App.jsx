import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CentreLayout from "./CentreLayout";

const pages = {
  "/centre-dashboard": ["📊", "Centre Dashboard"],
  "/todays-procurement": ["🌾", "Today's Procurement"],
  "/token-management": ["🎫", "Token Management"],
  "/farmers-management": ["👨‍🌾", "Farmers"],
  "/centre-members": ["👥", "Centre Members"],
  "/centre-schedule": ["📅", "Schedule"],
  "/procurement-records": ["📦", "Procurement Records"],
  "/centre-notifications": ["🔔", "Notifications"],
  "/payment-management": ["₹", "Payments"],
  "/centre-profile": ["👤", "Profile"],
  "/farmer-support": ["❓", "Help Centre"],
};

function Page({ icon, title }) {
  return (
    <section className="min-h-[calc(100vh-76px)] bg-[#f4f8f5] p-5 sm:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-[#075e45]">{title}</h2>
              <p className="mt-1 text-sm text-slate-500">Smart Procurement Centre Portal</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <div className="text-5xl">🌱</div>
          <h3 className="mt-4 text-xl font-semibold text-slate-800">{title}</h3>
          <p className="mx-auto mt-2 max-w-xl text-slate-500">
            This section is ready for the existing Farming portal functionality.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CentreLayout />}>
          <Route index element={<Navigate to="/centre-dashboard" replace />} />
          {Object.entries(pages).map(([path, [icon, title]]) => (
            <Route key={path} path={path} element={<Page icon={icon} title={title} />} />
          ))}
        </Route>
        <Route path="*" element={<Navigate to="/centre-dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
