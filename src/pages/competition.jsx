import React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";
import {
  Laptop,
  Smartphone,
  SquarePen,
  Book,
  Camera,
  BriefcaseBusiness,
  Clapperboard,
  Gamepad2,
  NotebookPen,
  NotepadText,
  MicVocal,
  Video,
  FilePen,
} from "lucide-react";
import LayoutKegiatan from "../layouts/LayoutKegiatan";
import CardCompetition from "../components/CardCompetition";
import TitleLine from "../components/TitleLine";
import LinkBar from "../components/LinkBar";

const dataJuara = [
  {
    id: 1,
    name: "Juara 1",
    benefit1: "Rp. 1.000.000,-",
    benefit2: "e-certificate",
    benefit3: "Plakat",
  },
  {
    id: 2,
    name: "Juara 2",
    benefit1: "Rp. 750.000,-",  
    benefit2: "e-certificate",
    benefit3: "Plakat",
  },
  {
    id: 3,
    name: "Juara 3",
    benefit1: "Rp. 500.000,-",
    benefit2: "e-certificate",
    benefit3: "Plakat",
  },
];

const informasiPendaftaran = [
  {
    id: 1,
    title: "Email ",
    value: "corisindo2025@universitasbumigora.ac.id",
  },
  {
    id: 2,
    title: "Contact Person ",
    value: "Lilik Widyawati, M.Kom.",
  },
  {
    id: 3,
    title: "Phone ",
    value: "+62 819-1660-8880",
  },
  {
    id: 4,
    title: "Biaya Pendaftaran ",
    value: "Rp.300.000,- per jenis lomba",
  },
];

const dataInformasidanFile = [
  {
    id: 1,
    title: "Surat Pernyataan Keaslian Karya",
    url: "/file/SURAT-PERNYATAAN-KEASLIAN-KARYA.docx",
  },
  {
    id: 2,
    title: "Surat Rekomendasi",
    url: "/file/SURAT-REKOMENDASI.docx",
  },
  {
    id: 3,
    title: "Link Pendaftaran Lomba",
    url: "https://bit.ly/CorisIndoUBG2025",
  },
];

const competition = [
  {
    id: 1,
    title: "Web Design Competition",
    icon: <Laptop size={35} />,
  },
  {
    id: 2,
    title: "Mobile Apps Competition",
    icon: <Smartphone size={35} />,
  },
  {
    id: 3,
    title: "Animation Competition",
    icon: <SquarePen size={35} />,
  },
  {
    id: 4,
    title: "Poster Design Competition",
    icon: <Book size={35} />,
  },
  {
    id: 5,
    title: "Photography Competition",
    icon: <Camera size={35} />,
  },
  {
    id: 6,
    title: "Business Plan Competition",
    icon: <BriefcaseBusiness size={35} />,
  },
  {
    id: 7,
    title: "Short Movie Competition",
    icon: <Clapperboard size={35} />,
  },
  {
    id: 8,
    title: "Game Development Competition",
    icon: <Gamepad2 size={35} />,
  },
  {
    id: 9,
    title: "Short Story Writing Competition",
    icon: <NotebookPen size={35} />,
  },
  {
    id: 10,
    title: "Poetry Reading Competition",
    icon: <NotepadText size={35} />,
  },
  {
    id: 11,
    title: "Pop Competition",
    icon: <MicVocal size={35} />,
  },
  {
    id: 12,
    title: "Vlog Competition",
    icon: <Video size={35} />,
  },
  {
    id: 13,
    title: "Poetry Writing Competition",
    icon: <FilePen size={35} />,
  },
];

function Competition() {
  return (
    <PrimaryLayout>
      <LayoutKegiatan title="Corisindo Competition 2025">
        {/* Competition Subject */}
        <div className="flex flex-col items-center ">
          <TitleLine title="Competition Subject" />
          <div className="mt-5 flex flex-wrap gap-5 justify-center">
            {competition.map((item) => (
              <CardCompetition
                key={item.id}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        {/* <hr className="my-10 text-gray-400" /> */}

        {/* Biaya Pendaftaran */}
        {/* <div className="flex flex-col gap-5 items-center">
          <TitleLine title="Biaya Pendaftaran" />
          <table className="w-full text-lg">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="border py-3
                "
                >
                  Peserta
                </th>
                <th className="border ">Biaya</th>
              </tr>
            </thead>
            <tbody>
              {dataBiaya.map((item, index) => (
                <tr key={item.id}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.biaya}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        <hr className="my-10 text-gray-400" />

        {/* informasi pendaftaran dan biaya pendaftaran*/}

        <div className="flex flex-col items-center w-full ">
          <TitleLine title="Informasi Pendaftaran" />
          <div className="font-semibold mt-2 md:text-xl w-full">
            <table className="text-wrap w-full ">
              <tbody className="">
                {informasiPendaftaran.map((item) => (
                  <tr key={item.id}>
                    <td className="py-1 ">{item.title}</td>
                    <td className="px-1 w-20">:</td>
                    <td className="text-wrap ">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <hr className="my-10 text-gray-400" />
        <div className="hidden lg:block  border-l-2 border-gray-300"></div>

        {/* Informasi Pembayaran*/}
        <div className="flex flex-col items-center">
          <TitleLine title="Informasi Pembayaran" />
          <div className="w-full flex flex-col items-center">
            <h1 className="font-semibold text-lg my-2 md:text-2xl">
              Tranfer Bank
            </h1>
            <div className="flex gap-2 items-center font-semibold md:text-xl md:mt-2 ">
              <h2 className="">5055566690</h2>
              <h2 className="border-l-1 px-2">Bank BNI</h2>
              <h2 className="border-l-1 px-2">An. LPPM UNIVERSITAS BUMIGORA</h2>
            </div>
          </div>
        </div>

        <hr className="my-10 text-gray-400" />

        {/* Benefit Pemenang Corisindo Competition*/}
        <div className="flex flex-col items-center">
          <TitleLine title="Biaya Pembinaan Pemenang Corisindo Competition" />
          <div className="w-full md:flex justify-evenly mt-5">
            {dataJuara.map((item) => (
              <div>
                <h1 className="font-bold text-xl mt-2">{item.name}</h1>
                <ul className="list-disc pl-5 font-semibold md:mt-2">
                  <li className="text-lg">{item.benefit1}</li>
                  <li className="text-lg">{item.benefit2}</li>
                  <li className="text-lg">{item.benefit3}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* <hr className="my-10 text-gray-400" /> */}

        {/* Ketentuan & Teknis Lomba */}
        {/* <div className="flex flex-col items-center">
          <TitleLine title="Ketentuan & Teknis Lomba" />
        </div> */}

        <hr className="my-10 text-gray-400" />

        {/* Informasi dan file */}
        <div className="flex flex-col items-center gap-5">
          <TitleLine title="Informasi dan File" />
          <div className="flex flex-wrap lg:gap-5 gap-3 justify-center ">
            {dataInformasidanFile.map((item, index) => (
              <LinkBar key={index} url={item.url} title={item.title} />
            ))}
          </div>
        </div>
      </LayoutKegiatan>
    </PrimaryLayout>
  );
}

export default Competition;
