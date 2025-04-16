import React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";
import LayoutKegiatan from "../layouts/LayoutKegiatan";
import TitleLine from "../components/TitleLine";
import { Link } from "react-router-dom";

const dataPembayaranPemakalah = [
  { id: 1, name: "Anggota CORIS/IndoCEISS", nominal: "Rp.300.000,-" },
  { id: 2, name: "Umum", nominal: "Rp.400.000,-" },
  { id: 3, name: "Mahasiswa UBG", nominal: "Rp.150.000,-" },
];

const dataPembayaranNonPemakalah = [
  { id: 1, name: "Anggota CORIS/IndoCEISS", nominal: "Rp.75.000,-" },
  { id: 2, name: "Umum", nominal: "Rp.100.000,-" },
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
      value: "Baiq Yulia Hasni Pratiwi, S.Si., M.Sc",
    },
    {
      id: 3,
      title: "Phone ",
      value: "+62 877-8067-0808",
    },
  ];

export default function Pendaftaran() {
  return (
    <PrimaryLayout>
      <LayoutKegiatan title={"Pendaftaran"}>
        <div className="flex flex-col gap-5 items-center lg:text-lg">
          <TitleLine title={"Pendaftaran"} />
          <ul className="list-disc">
            <li>
              Pendaftaran SEMNAS CORISINDOO (Peserta Pemakalah dan
              Non-Pemakalah) dapat dilakukan pada link berikut:{" "}
              <Link to={"/kegiatan/seminar/#daftarseminar"} className="text-blue-600 font-semibold">
                Klik Di Sini
              </Link>
            </li>
            <li>
              Biaya Pendaftaran peserta bisa ditransfer pada rekening yang
              tercantum di informasi pembayaran
            </li>
          </ul>
        </div>

        <hr className="my-10 text-gray-400" />

        <div className="flex flex-col gap-5 items-center">
          <TitleLine title={"Biaya Pendaftaran"} />
          <table className="border-collapse w-full border border-gray-500 font-semibold">
            <thead className="lg:text-xl">
              <tr>
                <th colSpan={2} className="border border-gray-500 py-2">
                  Peserta
                </th>
                <th className="border border-gray-500 py-2">Biaya</th>
              </tr>
              <tr>
                <th colSpan={3} className="border border-gray-500 py-2">
                  Peserta Dengan Makalah
                </th>
              </tr>
            </thead>
            <tbody className="lg:text-lg">
              {dataPembayaranPemakalah.map((item, index) => (
                <tr key={item.id}>
                  <td className="border border-gray-500 text-center px-2 md:px-0 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-500 pl-2">{item.name}</td>
                  <td className="border border-gray-500 pl-2">
                    {item.nominal}
                  </td>
                </tr>
              ))}
              <tr className="lg:text-xl">
                <th colSpan={3} className="py-2">
                  Peserta Non Makalah
                </th>
              </tr>
              {dataPembayaranNonPemakalah.map((item, index) => (
                <tr key={item.id} className="lg:text-lg">
                  <td className="border border-gray-500 text-center py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-500 pl-2">{item.name}</td>
                  <td className="border border-gray-500 pl-2">
                    {item.nominal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-10 text-gray-400" />

        {/* informasi pendaftaran */}
        <div className="lg:flex justify-between">
          <div className="flex flex-col items-center ">
            <TitleLine title="Informasi Pendaftaran" />
            <div className="font-semibold mt-2 text-sm md:text-xl">
              <table className=" w-full text-wrap">
                <tbody>
                  {informasiPendaftaran.map((item) => (
                    <tr key={item.id}>
                      <td className="py-1 w-3">{item.title}</td>
                      <td className="px-1">:</td>
                      <td className="text-wrap w-20 ">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <hr className="my-10 text-gray-400 lg:hidden" />
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
                <h2 className="border-l-1 px-2">
                  An. LPPM UNIVERSITAS BUMIGORA
                </h2>
              </div>
            </div>
          </div>
        </div>
      </LayoutKegiatan>
    </PrimaryLayout>
  );
}
