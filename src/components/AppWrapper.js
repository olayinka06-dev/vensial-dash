"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navigationbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Sidebar2 from "./sidebar/Sidebar2";
import "@/app/globals.css";
import ComplainceNotification from "./general/ComplainceNotification";

export function AppWrapper({ children }) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/register" ? (
        ""
      ) : pathname === "/login" ? (
        ""
      ) : pathname === "/reset-password" ? (
        ""
      ) : (
        <Navbar />
      )}
      <main className="container max-w-screen-2xl mx-auto ">
        <div
          className={`lg:flex  relative   ${
            pathname === "/register"
              ? "lg:m-0"
              : pathname === "/login"
              ? "lg:m-0"
              : pathname === "/reset-password"
              ? "lg:m-0 "
              : "lg:m-11 pt-[50px]"
          }       `}
        >
          {pathname === "/" ||
          pathname === "/transactions" ||
          pathname === "/settings" ? (
            <Sidebar />
          ) : pathname === "/business-info" ? (
            ""
          ) : (
            ""
          )}

          <div className="lg:w-full">{children}</div>
        </div>
      </main>
    </>
  );
}
