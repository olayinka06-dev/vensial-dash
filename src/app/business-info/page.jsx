"use client";
import React, { useState, useEffect } from "react";
import ComplainceNotification from "@/components/general/ComplainceNotification";
import Sidebar2 from "@/components/sidebar/Sidebar2";
import ComplianceBusinessStarter from "@/components/compliance_component/starter/ComplianceBusinessStarter";
import ContactInfoStarter from "@/components/compliance_component/starter/ContactInfoStarter";
import OwnersStarter from "@/components/compliance_component/starter/OwnersStarter";
import PaymentStarter from "@/components/compliance_component/starter/PaymentStarter";
import DocsStarter from "@/components/compliance_component/starter/DocsStarter";
import ComplianceBusinessRegister from "@/components/compliance_component/register/ComplianceBusinessRegister";
import ContactInfoRegister from "@/components/compliance_component/register/ContactInfoRegister";
import OwnersRegister from "@/components/compliance_component/register/OwnersRegister";
import PaymentRegister from "@/components/compliance_component/register/PaymentRegister";
import DocsRegister from "@/components/compliance_component/register/DocsRegister";
import OwnersInfo from "@/components/compliance_component/starter/OwnersInfo";
import OwnersInfoReg from "@/components/compliance_component/register/OwnersInfoReg";


function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  const [switchInfoStarter, setswitchInfoStarter] = useState(false);
  const [switchInfoRegsiter, setswitchInfoRegsiter] = useState(false);
  
  useEffect(() => {
    setSelectedOption("option1")
  }, []) 
  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const Menus = [
    "business info",
    "contact info",
    "owners",
    "documents",
    "payment info"
  ];
  const starterData = [
    {
      content: (
        <ComplianceBusinessStarter
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
          handleContinue={() => handleTabClick(activeTab + 1)}
        />
      ),
    },
    { content: <ContactInfoStarter handleContinue={() => handleTabClick(activeTab + 1)} /> },
    { content: switchInfoStarter ? <OwnersInfo handleBackward={()=> setswitchInfoStarter(false)} handleContinue={() => handleTabClick(activeTab + 1)}/> : <OwnersStarter handleSwitch={()=> setswitchInfoStarter(true)} />},
    { content: <DocsStarter handleContinue={() => handleTabClick(activeTab + 1)} /> },
    { content: <PaymentStarter /> },
  ];
  
  const registeredData = [
    {
      content: (
        <ComplianceBusinessRegister
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
          handleContinue={() => handleTabClick(activeTab + 1)}
        />
      ),
    },
    { content: <ContactInfoRegister handleContinue={() => handleTabClick(activeTab + 1)} /> },
    { content:  switchInfoRegsiter ? <OwnersInfoReg handleBackwardReg={()=> setswitchInfoRegsiter(false)} handleContinue={() => handleTabClick(activeTab + 1)}/> : <OwnersRegister handleSwitchReg={()=> setswitchInfoRegsiter(true)}/>},
    { content: <DocsRegister handleContinue={() => handleTabClick(activeTab + 1)} /> },
    { content: <PaymentRegister /> },
  ];
  
  
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (data) => {
    setActiveTab(data);
  };

  return (
    <>
      <div className="lg:flex relative">
        <Sidebar2
          MenuData={Menus}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
        <div className="flex-1 mx-2 lg:ms-11">
          <ComplainceNotification />
          {
            selectedOption === "option1" ? (
              <div className="animation">{starterData[activeTab].content}</div>
            ) : (
              <div className="animation">{registeredData[activeTab].content}</div>
            )
          }
          
          
        </div>
      </div>
    </>
  );
}

export default Home;
 