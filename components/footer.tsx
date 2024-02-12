import { Divider } from "@nextui-org/react";

import {
  PiArrowRight as RightIcon,
  PiTwitterLogoFill as TwitterIcon,
  PiFacebookLogoFill as FacebookIcon,
  PiInstagramLogoFill as InstagramIcon,
  PiYoutubeLogoFill as YoutubeIcon,
  PiLinkedinLogoFill as LinkedinIcon,
} from "react-icons/pi";

const footerLinks: {
  title: string;
  links: { name: string; href: string }[];
}[] = [
  {
    title: "Hızlı Erişim",
    links: [
      { name: "Anasayfa", href: "/" },
      { name: "Hizmetler", href: "/hizmetler" },
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "İletişim", href: "/iletisim" },
    ],
  },
  {
    title: "Hakkımızda",
    links: [
      { name: "Biz Kimiz?", href: "/biz-kimiz" },
      { name: "Neler Yaparız?", href: "/neler-yapariz" },
      { name: "Nasıl Çalışırız?", href: "/nasil-calisiriz" },
    ],
  },
  {
    title: "Hizmetler",
    links: [
      { name: "FirmaGO", href: "/firmago" },
      { name: "FirmaGO Pro", href: "/firmago-pro" },
      { name: "FirmaGO Enterprise", href: "/firmago-enterprise" },
    ],
  },
  {
    title: "Yardım",
    links: [
      { name: "Sıkça Sorulan Sorular", href: "/ssk" },
      { name: "Destek", href: "/destek" },
      { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
      { name: "Kullanım Şartları", href: "/kullanim-sartlari" },
      { name: "Çerez Politikası", href: "/cerez-politikasi" },
    ],
  },
  {
    title: "İletişim",
    links: [
      { name: "Destek", href: "/destek" },
      { name: "Satış", href: "/satis" },
      { name: "Genel", href: "/genel" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 bg-white pt-24 pb-12">
      <div className="flex flex-row items-center justify-start w-full max-w-7xl">
        <span className="text-body font-medium md:text-5xl text-xl md:pl-0 pl-4">FirmaGO</span>
        <RightIcon className="ml-4 text-navy-400 md:w-12 w-6 md:h-12 h-6" />
        <span className="text-body text-gray-500 ml-auto md:text-xl text-sm md:pr-0 pr-4">Bizimle İletişime Geçin</span>
      </div>
      <Divider className="bg-gray-300 my-4" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-cols-2 md:gap-4 gap-2 w-full max-w-7xl md:px-0 px-4">
        {footerLinks.map((group, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-body font-semibold md:text-lg text-sm">{group.title}</h3>
            <ul className="flex flex-col md:gap-2 gap-0">
              {group.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-body text-gray-500 md:text-md text-xs hover:text-navy-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Divider className="bg-gray-300 my-4" />
      <div className="flex items-center justify-between w-full max-w-7xl md:flex-row flex-col-reverse md:gap-0 gap-4">
        <p className="text-center text-base text-gray-400">&copy; Copyright 2024 FirmaGO - Tüm Hakları Saklıdır</p>
        <div className="flex flex-row gap-4">
          <a href="#" className="text-navy-500 p-2 bg-navy-100/25 rounded-full transition-all hover:bg-navy-100">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-navy-500 p-2 bg-navy-100/25 rounded-full transition-all hover:bg-navy-100">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-navy-500 p-2 bg-navy-100/25 rounded-full transition-all hover:bg-navy-100">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-navy-500 p-2 bg-navy-100/25 rounded-full transition-all hover:bg-navy-100">
            <YoutubeIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-navy-500 p-2 bg-navy-100/25 rounded-full transition-all hover:bg-navy-100">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
