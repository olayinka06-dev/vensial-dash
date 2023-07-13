import Navbar from "@/components/navigationbar/Navbar";
import Sidebar2 from "@/components/sidebar/Sidebar2";
import React from "react";

const ComplianceComplier = () => {
  return (
    <>
      <Navbar />
      <main className="container max-w-screen-2xl mx-auto ">
        <div className="lg:flex lg:m-11 pt-[50px] relative">
          <Sidebar2 />
          <div className="lg:w-full">
            
          </div>
        </div>
      </main>
    </>
  );
};

export default ComplianceComplier;
