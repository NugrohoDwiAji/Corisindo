import React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";
import LayoutKegiatan from "../layouts/LayoutKegiatan";
import TitleLine from "../components/TitleLine";

const informasiPendaftaranSeminar = [
  {
    id: 1,
    title: "Email ",
    value: "corisindo2025@universitasbumigora.ac.id",
  },
  {
    id: 2,
    title: "Contact Person ",
    value: "Baiq Yulia Hasni Pratiwi, S.Si., M.Sc",
  },
  {
    id: 3,
    title: "Phone ",
    value: "+62 8810-3839-1415",
  },
];

const informasiPendaftaranLomba = [
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
];

export default function HubungiKami() {
  return (
    <PrimaryLayout>
      <LayoutKegiatan title={"Hubungi Kami"}>
        {/* informasi Pendaftaran seminar nasional */}
        <hr className="my-10 text-gray-400" />
        <div className="flex flex-col items-center">
          <TitleLine title={"Informsi Pendaftaran Seminar Nasional"} />

          <div className="font-semibold mt-2 lg:mt-5 md:text-xl">
            <table className=" w-full text-wrap">
              <tbody>
                {informasiPendaftaranSeminar.map((item) => (
                  <tr key={item.id}>
                    <td className="py-1 w-3 max">{item.title}</td>
                    <td className="px-1">:</td>
                    <td className="text-wrap w-20 ">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Informasi pendaftaran competition */}
        <hr className="my-10 text-gray-400" />
        <div className="flex flex-col items-center">
          <TitleLine title={"Informasi Pendaftaran Competition"} />
          <div className="font-semibold mt-2 md:text-xl lg:mt-5">
            <table className="text-wrap w-full ">
              <tbody className="">
                {informasiPendaftaranLomba.map((item) => (
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
      </LayoutKegiatan>
    </PrimaryLayout>
  );
}
