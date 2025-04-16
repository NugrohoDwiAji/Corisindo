import React from "react";
import LayoutKegiatan from "../layouts/LayoutKegiatan";
import PrimaryLayout from "../layouts/PrimaryLayout";
import TitleLine from "../components/TitleLine";
import CardTema from "../components/CardTema";
import { Database } from "lucide-react";
import { CodeXml } from "lucide-react";
import {
  Microchip,
  Library,
  Smartphone,
  DatabaseBackup,
  Image,
  Video,
  ChartNoAxesCombined,
  Presentation,
  Lightbulb,
  Landmark,
  Cpu,
  ShoppingBag,
  ChartColumn,
  ShieldAlert,
  Settings,
  SquareTerminal,
  Users,
} from "lucide-react";
import LinkBar from "../components/LinkBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const dataTema = [
  {
    id: 1,
    icon: <Database size={50} />,
    title: "Big Data & Data Warehouse",
  },
  {
    id: 2,
    icon: <Microchip size={50} />,
    title: "Kecerdasan Buatan",
  },
  {
    id: 3,
    icon: <CodeXml size={50} />,
    title: "Software Engineering",
  },
  {
    id: 4,
    icon: <Library size={50} />,
    title: "Information System",
  },
  {
    id: 5,
    icon: <Smartphone size={50} />,
    title: "Mobile Apps",
  },
  {
    id: 6,
    icon: <DatabaseBackup size={50} />,
    title: "Data Science",
  },
  {
    id: 7,
    icon: <Image size={50} />,
    title: "Digital Signal & Image Processing",
  },
  {
    id: 8,
    icon: <Video size={50} />,
    title: "Multimedia",
  },
  {
    id: 9,
    icon: <ChartNoAxesCombined size={50} />,
    title: "Branding",
  },
  {
    id: 10,
    icon: <Presentation size={50} />,
    title: "Innovation",
  },
  {
    id: 11,
    icon: <Lightbulb size={50} />,
    title: "Creative Design Management",
  },
  {
    id: 12,
    icon: <Landmark size={50} />,
    title: "E-Government",
  },
  {
    id: 13,
    icon: <Landmark size={50} />,
    title: "IT-Government",
  },
  {
    id: 14,
    icon: <Cpu size={50} />,
    title: "IT-Management",
  },
  {
    id: 15,
    icon: <ShoppingBag size={50} />,
    title: "E-Business & E-Commerce",
  },
  {
    id: 16,
    icon: <ChartColumn size={50} />,
    title: "ERP, SCM & SCM",
  },
  {
    id: 17,
    icon: <ShieldAlert size={50} />,
    title: "Cyber Scurity & Networking",
  },
  {
    id: 18,
    icon: <Settings size={50} />,
    title: "Otomasi Industri",
  },
  {
    id: 19,
    icon: <SquareTerminal size={50} />,
    title: "Area Aplikasi Teknologi Informasi",
  },
  {
    id: 19,
    icon: <Users size={50} />,
    title: "Hasil Dari Pengabdian Masyarakat",
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
    value: "Baiq Yulia Hasni Pratiwi, S.Si., M.Sc",
  },
  {
    id: 3,
    title: "Phone ",
    value: "+62 877-8067-0808",
  },
];

export default function Seminar() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <PrimaryLayout>
      <LayoutKegiatan title={"Seminar Nasional"}>
        <div className="flex justify-center my-5">
          <a href="/img/banner.png" download={"Poster-Seminar.png"} className="bg-blue-950 text-white py-4 px-7 rounded-lg font-semibold hover:scale-110 hover:border-blue-950 hover:bg-white hover:text-blue-950 transition duration-300 ease-in-out hover:border-2">
            Download Poster
          </a>
        </div>
        <div id="tentang">
          <p className="indent-7 text-justify mb-5 text-gray-800">
            Perguruan tinggi sebagai penyedia sumber daya manusia industri harus
            beradaptasi untuk memenuhi kebutuhan kompetensi transformasi digital
            di berbagai sektor, khususnya karya ilmiah. Berbagai inovasi harus
            dilakukan untuk meningkatkan sumber daya manusia yang sesuai dengan
            kebutuhan industri 4.0. Hal mendasar yang perlu dilakukan perguruan
            tinggi adalah mereview dan mendesain ulang kurikulum, mendorong
            program mobilitas bagi talenta asing, bekerjasama dengan
            stakeholders termasuk industri dan pemerintah sebagai pengguna
            lulusan perguruan tinggi.
          </p>
          <p className="indent-7 text-justify mb-5 text-gray-800">
            Konferensi ini bertujuan untuk menyediakan forum utama bagi dunia
            karya ilmiah untuk diskusi dan debat tentang Potensi Transformasi
            Digital, Interdisipliner, standardisasi teknologi terkait, dan
            dampak teknologi tersebut terhadap masyarakat dan budaya selama
            pandemi ini. Konferensi tersebut mempertemukan para peneliti,
            pembuat kebijakan, pengembang, pengguna, dan perusahaan komersial,
            siapa pun yang tertarik dengan Web dan apa yang ditawarkannya.
          </p>
          <p className="indent-7 text-justify mb-5 text-gray-800">
            <span className="font-semibold">SEMNAS CORISINDO 2025</span>{" "}
            merupakan platform Seminar Nasional yang menampilkan artikel asli
            dari berbagai peneliti, akademisi, praktisi, dan pengusaha bisnis
            untuk menciptakan peluang penelitian yang berorientasi global di era
            pandemi dengan memanfaatkan teknologi transformasi digital.
          </p>
          <p className="indent-7 text-justify mb-5 text-gray-800">
            Pagelaran SEMNAS Corisindo 2025 oleh Universitas Bumigora,{" "}
            <span className="font-semibold">CORIS</span>
            dan <span className="font-semibold">INDOCEISS</span> pada tanggal{" "}
            <span className="font-semibold">12 September 2025,</span> bertempat
            di Mataram Lombok, Indonesia, bertema{" "}
            <span className="font-semibold">
              “Optimalisasi Artificial Intelligence (AI) dan Big Data Dalam
              Pengambilan Keputusan”.
            </span>{" "}
            Tahun ini,{" "}
            <span className="font-semibold">SEMNAS CORISINDO 2025</span> akan
            diselenggarakan dalam Virtual Conference dimana akan ada presentasi
            online dari 3 keynote speaker yang fantastis, dilanjutkan dengan
            presentasi makalah peserta. Paper yang dinyatakan diterima dan
            dipresentasikan akan diterbitkan pada prosiding, dan beberapa paper
            yang terpilih (selected paper) akan diterbitkan pada Jurnal
            terakreditasi SINTA.
          </p>
        </div>

        {/* Tema dan ruang lingkup */}
        <div className="justify-center flex flex-col items-center mt-10">
          <TitleLine title="Tema dan Ruang Lingkup" />
          <p className="indent-7 text-justify mt-5 text-gray-800">
            Kami sangat menghargai dan menyambut baik makalah berkualitas tinggi
            yang menggambarkan penelitian otentik dan tidak dipublikasikan yang
            membahas masalah nyata, tantangan, metode, transformasi digital, dan
            inovasi untuk area pasca pandemi, tetapi tidak terbatas pada:
          </p>
          <div className="flex flex-wrap justify-center hover:cursor-pointer gap-7 mt-5">
            {dataTema.map((item) => (
              <CardTema key={item.id} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>

        {/* Format Penulisan */}
        <div></div>

        <hr className="my-10 text-gray-400" />

        {/* Benefit */}
        <div
          id="daftar"
          className="justify-center flex flex-col items-center mt-10"
        >
          <TitleLine title="Benefit" />
          <div>
            <ul className="list-disc mt-5 ml-5 font-semibold  md:text-xl lg:text-2xl">
              <li>E-Certificate</li>
              <li>Paper terpilih akan terbit di Jurnal Terindeks SINTA</li>
              <li>Best Paper dan Best Presenter</li>
            </ul>
          </div>
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
                      <td className="py-1 w-3 max">{item.title}</td>
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
          <div  id="daftarseminar"  className="flex flex-col items-center">
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

        {/* submission and template */}
        <hr className="my-10 text-gray-400" />
        <div className="justify-center flex flex-col items-center mt-10">
          <TitleLine title="Submission and Template" />
          <div className="flex mt-5 md:gap-10 lg:gap-16 flex-wrap gap-3 justify-center">
            <LinkBar
              url="\file\Template-Penelitian-Semnas-Corisindo.docx"
              title="Template Artikel"
            />
            <LinkBar
              url="https://bit.ly/CORISINDO2025"
              title="Submission Artikel"
            />
          </div>
        </div>
      </LayoutKegiatan>
    </PrimaryLayout>
  );
}
