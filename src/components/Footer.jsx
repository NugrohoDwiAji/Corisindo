import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";

const menu = [
  { name: "Seminar Nasional", url: "/seminar", icon: <ChevronRight /> },
  { name: "Competition", url: "/competition", icon: <ChevronRight /> },
  { name: "Pendaftaran", url: "/pendaftaran", icon: <ChevronRight /> },
  { name: "Komite", url: "/komite", icon: <ChevronRight /> },
  { name: "Hubungi Kami", url: "/hubungikami", icon: <ChevronRight /> },
];

const kontak = [
  { name: "08xxxxxxxx", icon: <Phone size={17} />, url: "" },
  { name: "xxxxxxx", icon: <User size={17} />, url: "" },
  {
    name: "xxxxx@universitasbumigora.ac.id",
    icon: <Mail size={17} />,
    url: "",
  },
];

const icon = [
  { icon: <Twitter />, url: "" },
  { icon: <Facebook />, url: "" },
  { icon: <Youtube />, url: "" },
  { icon: <Instagram />, url: "" },
];

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-7 pt-5 md:pt-14 md:px-10 pb-10 lg:flex gap-28 lg:text-xl">
      <div className="md:flex justify-between lg:gap-28">
        <div>
          <h1 className="font-semibold text-xl mb-2">Quick Link</h1>
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
          <h1 className="mt-10 md:mt-0 mb-2 text-xl">Kontak</h1>
          <div>
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
          <div className="flex gap-2 mt-2">
            {icon.map((item, index) => (
              <a key={index} className="border p-2 rounded-full hover:text-blue-950 hover:bg-white">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl mb-2 mt-10 lg:mt-0">Alamat</h1>
        <p className="lg:w-48">
          Jl. Ismail Marzuki No.22, Cilinaya, Kec. Cakranegara, Kota Mataram,
          Nusa Tenggara Bar. 83127
        </p>
      </div>
    </footer>
  );
};

export default Footer;
