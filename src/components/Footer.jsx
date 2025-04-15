import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
import { Facebook } from "lucide-react";

import { Instagram } from "lucide-react";


const menu = [
  { name: "Seminar Nasional", url: "/kegiatan/seminar", icon: <ChevronRight /> },
  { name: "Competition", url: "/kegiatan/competition", icon: <ChevronRight /> },
  { name: "Pendaftaran", url: "/informasipeserta/pendaftaran", icon: <ChevronRight /> },
  // { name: "Komite", url: "/komite", icon: <ChevronRight /> },
  { name: "Hubungi Kami", url: "/hubungikami", icon: <ChevronRight /> },
];

const kontak = [
  { name: "+62 877-8067-0808", icon: <Phone size={17} />, url: "https://wa.me/+6287780670808" },
  { name: "Baiq Yulia Hasni Pratiwi, S.Si., M.Sc", icon: <User size={17} />, url: "" },
  {
    name: "corisindo2025@universitasbumigora.ac.id",
    icon: <Mail size={17} />,
    url: "",
  },
];

const icon = [
  { icon: <Globe />, url: "https://universitasbumigora.ac.id/" },
  { icon: <Facebook />, url: "https://facebook.com/universitasbumigora/" },
  { icon: <Instagram />, url: "https://instagram.com/universitasbumigora/" },
];

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-7 pt-5 md:pt-14 md:px-10 pb-10 lg:flex gap-28 lg:text-xl">
      <div className="md:flex justify-between lg:gap-38">
        <div>
          <h1 className="font-bold text-xl mb-2">Quick Link</h1>
          <div>
            {menu.map((item, index) => (
              <Link to={item.url} className="flex" key={index}>
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="mt-10 md:mt-0 mb-2 text-xl font-bold">Kontak</h1>
          <div className="flex flex-col gap-2">
            {kontak.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                className="flex gap-1 items-center"
              >
                {item.icon}
                <h1>{item.name}</h1>
              </Link>
            ))}
          </div>
          <div className="flex gap-2 lg:gap-4 mt-2">
            {icon.map((item, index) => (
              <a key={index} href={item.url} className="border p-2 rounded-full hover:text-blue-950 hover:bg-white hover:cursor-pointer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl mb-2 mt-10 lg:mt-0 font-bold">Alamat</h1>
        <p className="lg:w-96">
          Jl. Ismail Marzuki No.22, Cilinaya, Kec. Cakranegara, Kota Mataram,
          Nusa Tenggara Bar. 83127
        </p>
      </div>
    </footer>
  );
};

export default Footer;
