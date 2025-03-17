import React from "react";

import PrimaryLayout from "../layouts/PrimaryLayout";
import TitleLine from "../components/TitleLine";
import CardSpeaker from "../components/CardSpeaker";
import dataSpeaker from "../datas/dataSpeaker.json";


const Dashboard = () => {
  return (
    <PrimaryLayout>
      <div className="flex flex-col items-center gap-10">
        <TitleLine title="KEYNOTE SPEAKER" />
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-14 gap-10">
        {dataSpeaker.map((item) => (
          <CardSpeaker key={item.id} name={item.name} jabatan={item.title} img={item.image} />
        ))}
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Dashboard;
