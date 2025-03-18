import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dataCohost from "../datas/dataCohost.json";
import CardHost from "../components/elements/CardHost"
import TitleLine from "../components/TitleLine";
import dataHost from "../datas/dataHost.json";
const PrimaryLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="">
        <img src="/banner.jpg" alt="" className="bg-cover w-full" />
      </div>
      <div className="px-5 py-10">{children}</div>


      {/* CO-Host */}
      <div className="flex flex-col items-center mt-14">
        <TitleLine title="CO-HOST" />
        <div className="flex flex-wrap justify-evenly w-full items-center mt-10">
          {dataCohost.map((item) => (
            <CardHost key={item.id} img={item.img} />
          ))}
        </div>
      </div>


      {/* HOST */}
      <div className="flex flex-col items-center mt-14">
        <TitleLine title="HOST" />
        <div className="flex flex-wrap justify-evenly gap-5 items-center mt-10 mb-10">
          {dataHost.map((item) => (
            <CardHost key={item.id} img={item.img} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
