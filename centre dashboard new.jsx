import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function CentreLayout() {
  const menuItems = [
    ["📊", "Dashboard", "/centre-dashboard"],
    ["🌾", "Today's Procurement", "/todays-procurement"],
    ["🎫", "Token Management", "/token-management"],
    ["👨‍🌾", "Farmers", "/farmers-management"],
    ["👥", "Centre Members", "/centre-members"],
    ["📅", "Schedule", "/centre-schedule"],
    ["📦", "Procurement Records", "/procurement-records"],
    ["🔔", "Notifications", "/centre-notifications"],
    ["₹", "Payments", "/payment-management"],
    ["👤", "Profile", "/centre-profile"],
  ];

  return (
    <div className="min-h-screen bg-[#f4f8f5]">

      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-50 h-[76px] bg-white shadow-sm">
        <div className="flex h-full items-center justify-between">

          {/* Logo */}
          <div className="flex h-full w-[300px] items-center rounded-br-[35px] bg-[#075e45] px-7 text-white">

            <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-3xl">
              🌾
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Smart Procurement
              </h1>

              <p className="text-sm text-green-100">
                Centre Portal
              </p>
            </div>

          </div>

          {/* Right side */}
          <div className="flex items-center gap-5 px-7">

            <div className="relative text-2xl">
              🔔
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </div>

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#087c5a] text-xl text-white">
                👤
              </div>

              <div className="hidden sm:block">
                <p className="text-xs text-slate-400">
                  Welcome
                </p>

                <p className="font-bold text-[#075e45]">
                  Centre Admin
                </p>
              </div>

            </div>

          </div>

        </div>
      </header>


      {/* SIDEBAR */}
      <aside className="fixed bottom-0 left-0 top-[76px] z-40 hidden h-[calc(100vh-76px)] w-[300px] flex-col overflow-hidden bg-[#075e45] text-white lg:flex">

        {/* MENU */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">

          {menuItems.map(([icon, title, link]) => (

            <NavLink
              key={title}
              to={link}
              end={title === "Dashboard"}
              className={({ isActive }) =>
                `group mb-1 flex items-center gap-4 rounded-r-xl px-5 py-3.5 text-sm transition-all duration-200 ${
                  isActive
                    ? "border-l-4 border-yellow-400 bg-[#087c5a] font-bold"
                    : "hover:bg-white/10"
                }`
              }
            >

              <span className="w-6 text-center text-xl">
                {icon}
              </span>

              <span>
                {title}
              </span>

              {title === "Notifications" && (
                <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
                  3
                </span>
              )}

            </NavLink>

          ))}

          <div className="my-4 border-t border-white/10"></div>

          <NavLink
            to="/"
            className="flex items-center gap-4 rounded-r-xl px-5 py-3.5 text-sm text-red-100 transition hover:bg-red-500/10"
          >
            <span className="text-xl">🚪</span>
            Logout
          </NavLink>

        </nav>


        {/* BOTTOM */}
        <div className="shrink-0 border-t border-white/10 bg-[#075e45] px-5 py-5">

          <div className="mb-4 text-center">

            <div className="text-2xl">
              🌱
            </div>

            <p className="mt-1 text-xs italic text-green-100">
              Supporting Farmers
            </p>

          </div>

          <NavLink
            to="/farmer-support"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            ❓ Help Centre
          </NavLink>

        </div>

      </aside>


      {/* RIGHT SIDE CONTENT */}
      <main className="min-h-screen pt-[76px] lg:ml-[300px]">

        <Outlet />

      </main>

    </div>
  );
}

export default CentreLayout;