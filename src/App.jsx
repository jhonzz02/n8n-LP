import React from "react";
import "./App.css";
import SectionTutorial from "./components/section.jsx";
import Footer from "./components/footer";
import Benefits from "./components/benefits";
import Header from "./components/header";
import SubHeader from "./components/subheader";
import Features from "./components/features";
import CTA from "./components/CTAsection";
import IconWhats from "./components/whatsIcon";
function App() {
  return (
    <div className="min-h-screen bg-[#0A0A23] text-white overflow-x-hidden">
      <Header />
      <IconWhats />
      <SubHeader />
      <Features />
      <Benefits />
      <SectionTutorial />
      <CTA />
      <Footer />
    </div>
  );
}
export default App;