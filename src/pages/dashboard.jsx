import React from "react";

import PrimaryLayout from "../layouts/PrimaryLayout";
import TitleLine from "../components/TitleLine";
import CardSpeaker from "../components/CardSpeaker";
import dataSpeaker from "../datas/dataSpeaker.json";
import dataSambutan from "../datas/dataSambutan.json";
import CardCarousel from "../components/CardCarousel";
import Carousel from "../components/elements/Carousel";
import dataCarousel from "../datas/dataCarousel.json";
import Line from "../components/elements/Line";
import { ArrowRightFromLine } from "lucide-react";
import CardPendaftaran from "../components/CardPendaftaran";

const Dashboard = () => {
  return (
    <PrimaryLayout>
      {/* Speaker */}
      <div className="flex flex-col items-center gap-10">
        <TitleLine title="KEYNOTE SPEAKER" />
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-14 gap-10">
          {dataSpeaker.map((item) => (
            <CardSpeaker
              key={item.id}
              name={item.name}
              jabatan={item.title}
              img={item.image}
            />
          ))}
        </div>
      </div>

      {/* Sambutan */}
      <div className="flex flex-col items-center gap-10 mt-10">
        <TitleLine title="SAMBUTAN" />
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-14 gap-10">
          {dataSambutan.map((item) => (
            <CardSpeaker
              key={item.id}
              name={item.name}
              jabatan={item.title}
              img={item.image}
            />
          ))}
        </div>
      </div>

      {/* Tentang */}
      <div className="mt-10 md:flex md:justify-center md:gap-10 ">
        <div className="mb-10">
          <Carousel>
            {dataCarousel.map((item) => (
              <center>
                <CardCarousel key={item.id} img={item.img} />
              </center>
            ))}
          </Carousel>
        </div>
        <div className="flex flex-col w-full lg:h-[22rem] lg:w-[40rem] ">
          <div className="flex items-center justify-start ">
            <h1 className="px-4 font-semibold md:text-lg lg:text-xl lg:font-bold text-blue-950 ">
              TENTANG
            </h1>
            <Line className="items-start" />
          </div>
          <div className="px-5 flex flex-col justify-between h-full">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">SEMNAS Corisindo</h1>
            <p className="text-justify  mb-5">
              SEMNAS CORISINDO merupakan platform Seminar Nasional Penelitian
              dan Pengabdian Masyarakat yang menampilkan artikel asli dari
              berbagai peneliti, akademisi, praktisi, dan pengusaha bisnis untuk
              menciptakan peluang penelitian dan pengabdian masyarakat bagi
              perkembangan dunia industri. Pagelaran SEMNAS Corisindo oleh
              Universitas Teknologi Bandung, CORIS dan INDOCEISS pada hari Sabtu
              tanggal <span className="text-blue-900">31 Agustus 2024</span>, bertempat di Harris Hotel & Conventions
              Festival Citylink Bandung, Indonesia, bertemakan <span className="text-blue-900">“Pengembangan
              Dunia Industri Memanfaatkan Teknologi Artificial Intellegence”</span>
            </p>
            <button className="flex items-center gap-2 text-blue-950 w-fit border rounded-lg font-semibold px-4 py-2 hover:bg-blue-950 hover:text-white hover:scale-110 transition duration-300 ease-in-out ">
              Selengkapnya <ArrowRightFromLine />
            </button>
          </div>
        </div>
      </div>

      {/* Pnedaftaran */}
      <div className="flex flex-col  items-center gap-10 mt-16">
        <TitleLine title="PENDAFTARAN" />
        <div className=" flex flex-col md:flex-row md:justify-evenly md:w-full gap-8">
          <CardPendaftaran img={"/ilustrasi-seminar.jpg"} title={"Seminar Nasional"} />
          <CardPendaftaran img={"/ilustrasi-competition.jpg"} title={"Competition"} />
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Dashboard;
