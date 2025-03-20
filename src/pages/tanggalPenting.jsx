import React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";
import LayoutKegiatan from "../layouts/LayoutKegiatan";
import TitleLine from "../components/TitleLine";

const dataTanggalSemnas = [
  {
    id: 1,
    title: "Submit Paper",
    tanggal: "1 April 2025",
  },
  {
    id: 2,
    title: "Batas Akhi Pengumpulan Makalah",
    tanggal: "15 Juli 2025",
  },
  {
    id: 3,
    title: "Extent",
    tanggal: "30 Juli 2025",
  },
  {
    id: 4,
    title: "Pengumuman Penerima Makalah",
    tanggal: "4 Agustus 2025",
  },
  {
    id: 5,
    title: "Final Manuscript",
    tanggal: "6 Agustus 2025",
  },
  {
    id: 6,
    title: "Batas Akhir Pembayaran",
    tanggal: "6 Agustus 2025",
  },
  {
    id: 7,
    title: "Pelaksanaan Seminar Nasional",
    tanggal: "12 September 2025",
  },
];

const dataTanggalCompetition = [
  {
    id: 1,
    title: "Batas Akhir Pendaftaran Lomba",
    tanggal: "30 Juli 2025",
  },
  {
    id: 2,
    title: "Pengumuman Pemenang Lomba",
    tanggal: "12 September 2025",
  },
];
export default function TanggalPenting() {
  return (
    <PrimaryLayout>
      <LayoutKegiatan title={"Tanggal Penting"}>
        {/* <hr className="my-10 text-gray-400" /> */}
        <div className="flex flex-col items-center">
          <TitleLine title={"Tanggal-Tanggal Penting Seminar Nasional "} />
          <div>
            <table className="border border-collapse border-gray-700 font-semibold mt-5 lg:text-lg">
                <thead className="text-xl">
                  <tr>
                    <th className="border border-collapse py-2 border-gray-700">Tanggal</th>
                    <th className="border border-collapse py-2 border-gray-700">Keterangan</th>
                  </tr>
                </thead>
              <tbody>
                {dataTanggalSemnas.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-collapse py-2 px-5 border-gray-700">{item.tanggal}</td>
                    <td className="border border-collapse py-2 px-5 border-gray-700">{item.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <hr className="my-10 text-gray-400" />
        <div className="flex flex-col items-center">
          <TitleLine title={"Tanggal-Tanggal Penting Competition"} />
          <div>
            <table className="border border-collapse border-gray-700 font-semibold mt-5 text-lg">
                <thead className="text-xl">
                  <tr>
                    <th className="border border-collapse py-2 border-gray-700">Tanggal</th>
                    <th className="border border-collapse py-2 border-gray-700">Keterangan</th>
                  </tr>
                </thead>
              <tbody>
                {dataTanggalCompetition.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-collapse py-2 px-5 border-gray-700">{item.tanggal}</td>
                    <td className="border border-collapse py-2 px-5 border-gray-700">{item.title}</td>
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
