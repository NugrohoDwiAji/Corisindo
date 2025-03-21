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
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <PrimaryLayout>
      {/* Speaker */}
      <div className="flex flex-col items-center gap-10">
        <TitleLine title="NARASUMBER" />
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
              <center key={item.id}>
                <CardCarousel img={item.img} />
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
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">
              SEMNAS Corisindo
            </h1>
            <p className="text-justify  mb-5">
              Pagelaran SEMNAS Corisindo 2025 oleh Universitas Bumigora,{" "}
              <span className="font-semibold">CORIS</span>
              dan <span className="font-semibold">INDOCEISS</span> pada tanggal{" "}
              <span className="font-semibold">12 September 2025,</span>{" "}
              bertempat di Mataram Lombok, Indonesia, bertema{" "}
              <span className="font-semibold">
                “Optimalisasi Artificial Intelligence (AI) dan Big Data Dalam
                Pengambilan Keputusan”.
              </span>{" "}
              Tahun ini, <span className="font-semibold">SEMNAS CORISINDO 2025</span> akan diselenggarakan dalam
              Virtual Conference dimana akan ada presentasi online dari 3
              keynote speaker yang fantastis, dilanjutkan dengan presentasi
              makalah peserta. Paper yang dinyatakan diterima dan
              dipresentasikan akan diterbitkan pada prosiding, dan beberapa
              paper yang terpilih (selected paper) akan diterbitkan pada Jurnal
              terakreditasi SINTA.
            </p>
            <Link
              to={"/kegiatan/seminar#tentang"}
              className="flex items-center gap-2 text-blue-950 w-fit border rounded-lg font-semibold px-4 py-2 hover:bg-blue-950 hover:text-white hover:scale-110 transition duration-300 ease-in-out "
            >
              Selengkapnya <ArrowRightFromLine />
            </Link>
          </div>
        </div>
      </div>

      {/* Pnedaftaran */}
      <div className="flex flex-col  items-center gap-10 mt-16">
        <TitleLine title="PENDAFTARAN" />
        <div className=" flex flex-col md:flex-row md:justify-evenly md:w-full gap-8">
          <CardPendaftaran
            img={"/img/ilustrasi-seminar.jpg"}
            title={"Seminar Nasional"}
            url={"/kegiatan/seminar"}
          />
          <CardPendaftaran
            img={"/img/ilustrasi-competition.jpg"}
            title={"Competition"}
            url={"/kegiatan/competition"}
          />
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Dashboard;
