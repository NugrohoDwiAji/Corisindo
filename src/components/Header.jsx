import { useState, useEffect,useRef } from "react";
import { PanelTopOpen } from "lucide-react";
import { NavLink, Route, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { ArrowRightToLine } from "lucide-react";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [subActive, setsubActive] = useState(null);
  const menuRef = useRef(null);
  const subMenuRef = useRef(null);
  const subMenuRefMd = useRef(null);
  
  const toggleSubMenu = (menu) => {
    setsubActive(subActive === menu ? null : menu);
  };

  const navigate = useNavigate();

  const menu = [
    {
      name: "Dashboard",
      url: "/",
      icon: "",
      action: () => navigate("/"),
      subMenu: [],
    },
    {
      name: "Kegiatan",
      icon: <ChevronDown />,
      action: () => toggleSubMenu("Kegiatan"),
      subMenu: [
        { nama: "Seminas Nasional", url: "/kegiatan/seminar" },
        { nama: "Competition", url: "/kegiatan/competition" },
        { nama: "Bimtek PS dan PT", url: "/kegiatan/bimtek" },
        { nama: "Bakernas Indoceiss", url: "/kegiatan/rakernas" },
      ],
    },
    {
      name: "Informasi Peserta",
      icon: <ChevronDown />,
      action: () => toggleSubMenu("Informasi Peserta"),
      subMenu: [
        { nama: "Pendaftaran", url: "/informasipeserta/pendaftaran" },
        { nama: "Tanggal Penting", url: "/informasipeserta/tanggalPeting" },
        { nama: "Daftar Hotel", url: "/informasipeserta/daftarHotel" },
      ],
    },
    {
      name: "Komite",
      icon: <ChevronDown />,
      action: () => toggleSubMenu("Komite"),
      subMenu: [
        { nama: "Komite", url: "/komite/komite" },
        { nama: "Tim Bidang Lomba", url: "/komite/timBidangLomba" },
      ],
    },
    {
      name: "Hubungi Kami",
      icon: "",
      action: () => navigate("/hubingiKami"),
      subMenu: [],
    },
  ];

  // useEffect(() => {
  //   const handleClickOutside = () => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setisOpen(false) // Tutup menu jika klik di luar
  //     }
  //   };
  //   const handleClickOutsideSub = () => {
  //     if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
  //       setsubActive(null) // Tutup menu jika klik di luar
  //     }
  //   };
  //   const handleClickOutsideSubmd = () => {
  //     if (subMenuRefMd.current && !subMenuRefMd.current.contains(event.target)) {
  //       setsubActive(null) // Tutup menu jika klik di luar
  //     }
  //   };
    
  //   document.addEventListener("click", handleClickOutside);
  //   document.addEventListener("click", handleClickOutsideSub);
  //   document.addEventListener("click", handleClickOutsideSubmd);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //     document.removeEventListener("click", handleClickOutsideSub);
  //     document.removeEventListener("click", handleClickOutsideSubmd);
  //   };
  // }, []);

  return (
    <header className="flex w-ful h-16 justify-between items-center  px-5 ">
      <img src="/logo_corisindo.png" alt="" className="w-20" />
      <nav className="md:flex items-center h-full w-full hidden gap-4 justify-end relative ">
        {menu.map((item, index) => (
          <div>
            <NavLink
              key={index}
              onClick={item.action}
              className={
                "flex gap-2 relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 before:bg-blue-950"
              }
              to={item.url}
            >
              {item.name}
              {item.icon}
            </NavLink>
            {subActive === item.name && (
              <div
                className={`ml-3 py-4 px-2 rounded-md bg-gray-100 flex flex-col gap-2 absolute top-16`}
              >
                {item.subMenu.map((submenu, index) => (
                  <NavLink to={submenu.url}  key={index} className="bg-gray-200 py-1 px-2 rounded-md hover:scale-110 trantition ease-in-out duration-300 hover:bg-white hover:border hover:border-blue-950 hover:rounded-md">
                    {submenu.nama}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
        <button className="flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-md hover:scale-105 trantition ease-in-out duration-300 hover:bg-white hover:border hover:border-blue-950 hover:rounded-md hover:text-blue-950">
          Daftar
          <ArrowRightToLine />
        </button>
      </nav>
      <div className="md:hidden">
        <button  className="hover:scale-90" onClick={() => setisOpen(!isOpen)}>
          <PanelTopOpen size={35} color="gray" />
        </button>
        <nav
          className={` shadow-2xl
           absolute ${
             isOpen ? "flex" : "hidden"
           }  flex-col gap-2 top-16 right-5 rounded-xl py-4 px-3 w-52 bg-white`}
        >
          {menu.map((item, index) => (
            <div>
              <NavLink
                key={index}
                className={
                  "flex justify-between bg-gray-100 py-1 px-2 rounded-md w-full hover:scale-105 trantition ease-in-out duration-300 hover:bg-white hover:border hover:border-blue-950 hover:rounded-md"
                }
                onClick={item.action}
              >
                {item.name}
                {item.icon}
              </NavLink>
              {subActive === item.name && (
                <div
                  className={`ml-3 py-1 px-2 rounded-b-md bg-gray-100 flex flex-col gap-2`}
                >
                  {item.subMenu.map((submenu, index) => (
                    <NavLink to={submenu.url} key={index} className="bg-gray-200 py-1 px-2 rounded-md hover:scale-110 trantition ease-in-out duration-300 hover:bg-white hover:border hover:border-blue-950 hover:rounded-md">
                      {submenu.nama}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-md hover:scale-105 trantition ease-in-out duration-300 hover:bg-white hover:border hover:border-blue-950 hover:rounded-md hover:text-blue-950">
            Daftar
            <ArrowRightToLine />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
