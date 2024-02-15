"use client";

import {
  Accordion,
  AccordionItem,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Pagination,
  Select,
  SelectItem,
  SelectSection,
} from "@nextui-org/react";
import { NextPage } from "next";
import { useState } from "react";
import {
  MdOutlineArrowRightAlt as ArrowRightIcon,
  MdVerified as VerifiedIcon,
  MdPersonOutline as EmployeeIcon,
  MdOutlineHome as CalendarIcon,
  MdOutlineLocationOn as LocationIcon,
  MdAddCircleOutline as AddIcon,
} from "react-icons/md";

import {
  PiStar as StarEmptyIcon,
  PiStarFill as StarFullIcon,
  PiGlobe as WebsiteIcon,
  PiMagnifyingGlass as ViewIcon,
  PiPaperPlane as MessageIcon,
} from "react-icons/pi";

const dummy10Cities = [
  {
    id: 1,
    name: "Adana",
    districts: ["Merkez", "Seyhan", "Yüreğir", "Sarıçam", "Çukurova", "Aladağ", "Ceyhan", "Feke", "İmamoğlu", "Karaisalı"],
  },
  {
    id: 2,
    name: "Adıyaman",
    districts: ["Merkez", "Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Samsat", "Sincik", "Tut"],
  },
  {
    id: 3,
    name: "Afyonkarahisar",
    districts: ["Merkez", "Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler"],
  },
  {
    id: 4,
    name: "Ağrı",
    districts: ["Merkez", "Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur", "Patnos", "Taşlıçay", "Tutak"],
  },
  {
    id: 5,
    name: "Amasya",
    districts: ["Merkez", "Göynücek", "Gümüşhacıköy", "Hamamözü", "Merzifon", "Suluova", "Taşova"],
  },
  {
    id: 6,
    name: "Ankara",
    districts: ["Merkez", "Akyurt", "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ"],
  },
  {
    id: 7,
    name: "Antalya",
    districts: ["Merkez", "Akseki", "Aksu", "Alanya", "Demre", "Döşemealtı", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş"],
  },
  {
    id: 8,
    name: "Artvin",
    districts: ["Merkez", "Ardanuç", "Arhavi", "Borçka", "Hopa", "Murgul", "Şavşat", "Yusufeli"],
  },
  {
    id: 9,
    name: "Aydın",
    districts: ["Merkez", "Bozdoğan", "Buharkent", "Çine", "Didim", "Efeler", "Germencik", "İncirliova", "Karacasu", "Karpuzlu"],
  },
  {
    id: 10,
    name: "Balıkesir",
    districts: ["Merkez", "Altıeylül", "Ayvalık", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek"],
  },
];
const dummyStars = ["1", "2", "3", "4", "5"];
const dummyPrices = ["0-100", "100-200", "200-300", "300-400", "400-500"];
const dummySorts = ["En Yüksek Puan", "En Düşük Puan", "En Yüksek Fiyat", "En Düşük Fiyat"];

const dummyFirms = [
  {
    image:
      "https://images.unsplash.com/photo-1612810806546-ebbf22b53496?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Firma 1",
    category: "Web Tasarım ve SEO",
    isVerified: true,
    stars: 5.0,
    reviewCount: 48,
    employees: "1 - 10",
    location: "Adana, Seyhan",
    founded: 2018,
    averagePrice: "₺2500",
    services: [
      {
        name: "Web Tasarım",
        percentage: 70,
      },
      {
        name: "SEO",
        percentage: 20,
      },
      {
        name: "E-Ticaret",
        percentage: 10,
      },
    ],
  },
];

const ServicesPage: NextPage = () => {
  const [selectedFilters, setSelectedFilters] = useState<{
    city: string[];
    district: string[];
    star: string[];
    price: string[];
    sort: string[];
  }>({
    city: [],
    district: [],
    star: [],
    price: [],
    sort: [],
  });

  const handleMultipleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, filter: string) => {
    const values = new Set(e.target.value.split(","));
    const valuesArray = Array.from(values);
    setSelectedFilters({ ...selectedFilters, [filter]: valuesArray });
  };

  const handleSingleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, filter: string) => {
    setSelectedFilters({ ...selectedFilters, [filter]: [e.target.value] });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-center w-full bg-navy-700 py-8 md:py-16">
        <div className="flex items-center justify-between w-full max-w-7xl gap-4 md:flex-row flex-col">
          <div className="flex flex-col items-start justify-center gap-4">
            <span className="text-body font-normal text-white md:text-5xl text-xl">En İyi Web Tasarım Hizmetleri</span>
            <span className="cursor-pointer text-body text-xs text-white md:flex hidden">{`Ana Sayfa > Hizmetler > Web Tasarım`}</span>
          </div>
          <div className="flex flex-col items-center justify-center  gap-4">
            <div className="flex border-2 border-red-600 rounded-sm px-12 py-4">
              <span className="text-body font-bold text-white md:text-lg text-sm">2024 incelemeleri</span>
            </div>
            <p className="text-body text-white md:text-sm text-xs">Son güncelleme: 1 gün önce</p>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center justify-center w-full max-w-7xl gap-4 py-4 md:px-0 px-4">
        {/* Content - Description */}
        <span className="text-body text-justify font-normal text-gray-800 md:text-sm text-xs">
          Web tasarım hizmetleri, web sitenizin görünümünü ve kullanılabilirliğini iyileştirmek için tasarlanmıştır. Web tasarım hizmetleri, web
          sitenizin görünümünü ve kullanılabilirliğini iyileştirmek için tasarlanmıştır. Web tasarım hizmetleri, web sitenizin görünümünü ve
          kullanılabilirliğini iyileştirmek için tasarlanmıştır. Web tasarım hizmetleri, web sitenizin görünümünü ve kullanılabilirliğini
          iyileştirmek için tasarlanmıştır. Web tasarım hizmetleri, web sitenizin görünümünü ve kullanılabilirliğini iyileştirmek için
          tasarlanmıştır. Web tasarım hizmetleri, web sitenizin görünümünü ve kullanılabilirliğini iyileştirmek için tasarlanmıştır.
        </span>
        {/* Content - Header */}
        <div className="flex flex-row items-center justify-start w-full my-2 md:gap-4 gap-2">
          <span className="px-4 py-2 bg-navy-700 text-body text-white md:text-md text-xs">3500 Firma</span>
          <span className="text-body text-navy-900 md:text-2xl text-sm">Web Geliştirici Firma Listesi</span>
          <ArrowRightIcon className="text-navy-400 md:text-4xl md:flex xhidden" />
        </div>
        {/* Content - Filter */}
        <div className="flex w-full flex-wrap">
          <div className="flex flex-col w-1/2  md:w-1/6 md:gap-4 gap-2 md:pb-0 pb-2">
            <Select
              radius="none"
              selectionMode="multiple"
              placeholder="Şehir"
              className="w-full border-1"
              classNames={{
                popoverContent: "rounded-none",
              }}
              onChange={(e) => handleMultipleSelectChange(e, "city")}
            >
              {dummy10Cities.map((animal) => (
                <SelectItem key={animal.id} value={animal.name}>
                  {animal.name}
                </SelectItem>
              ))}
            </Select>
            <span className="flex flex-row flex-wrap gap-2">
              {selectedFilters.city.map((city, index) => (
                <span key={index} className="flex flex-row items-center bg-gray-100 px-4 py-2 gap-2 p-0 rounded-full">
                  <span className="text-body text-black text-xs">{city}</span>
                </span>
              ))}
            </span>
          </div>
          <div className="flex flex-col w-1/2  md:w-1/6 md:gap-4 gap-2 md:pb-0 pb-2">
            <Select
              radius="none"
              selectionMode="multiple"
              placeholder="İlçe"
              className="w-full border-1"
              classNames={{
                popoverContent: "rounded-none",
              }}
              onChange={(e) => handleMultipleSelectChange(e, "district")}
            >
              {dummy10Cities[0].districts.map((district, index) => (
                <SelectItem key={index} value={district}>
                  {district}
                </SelectItem>
              ))}
            </Select>
            <span className="flex flex-row flex-wrap gap-2">
              {selectedFilters.district.map((district, index) => (
                <span key={index} className="flex flex-row items-center bg-gray-100 px-4 py-2 gap-2 p-0 rounded-full">
                  <span className="text-body text-black text-xs">{district}</span>
                </span>
              ))}
            </span>
          </div>
          <div className="flex flex-col w-1/2  md:w-1/6 md:gap-4 gap-2 md:pb-0 pb-2">
            <Select
              radius="none"
              selectionMode="multiple"
              placeholder="Yıldız"
              className="w-full border-1"
              classNames={{
                popoverContent: "rounded-none",
              }}
              onChange={(e) => handleMultipleSelectChange(e, "star")}
            >
              {dummyStars.map((star, index) => (
                <SelectItem key={index} value={star}>
                  {star}
                </SelectItem>
              ))}
            </Select>
            <span className="flex flex-row flex-wrap gap-2">
              {selectedFilters.star.map((star, index) => (
                <span key={index} className="flex flex-row items-center bg-gray-100 px-4 py-2 gap-2 p-0 rounded-full">
                  <span className="text-body text-black text-xs">{star}</span>
                </span>
              ))}
            </span>
          </div>
          <div className="flex flex-col w-1/2  md:w-1/6 md:gap-4 gap-2 md:pb-0 pb-2">
            <Select
              radius="none"
              selectionMode="multiple"
              placeholder="Fiyat"
              className="w-full border-1"
              classNames={{
                popoverContent: "rounded-none",
              }}
              onChange={(e) => handleMultipleSelectChange(e, "price")}
            >
              {dummyPrices.map((price, index) => (
                <SelectItem key={index} value={price}>
                  {price}
                </SelectItem>
              ))}
            </Select>
            <span className="flex flex-row flex-wrap gap-2">
              {selectedFilters.price.map((price, index) => (
                <span key={index} className="flex flex-row items-center bg-gray-100 px-4 py-2 gap-2 p-0 rounded-full">
                  <span className="text-body text-black text-xs">{price}</span>
                </span>
              ))}
            </span>
          </div>
          <div className="flex flex-col w-1/2  md:w-1/6 md:gap-4 gap-2 md:pb-0 pb-2">
            <Select
              radius="none"
              placeholder="Sıralama"
              className="w-full border-1"
              classNames={{
                popoverContent: "rounded-none",
              }}
              onChange={(e) => handleSingleSelectChange(e, "sort")}
            >
              {dummySorts.map((sort, index) => (
                <SelectItem key={index} value={sort}>
                  {sort}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Button radius="none" className="w-1/2 h-100 max-h-[57px] md:w-1/6" onClick={() => console.log("filters", selectedFilters)}>
            Temizle
          </Button>
        </div>
        {/* Content - Firm List */}
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <div className="grid w-full gap-4  pb-0 border-1 border-gray-500 md:grid-cols-[5fr,1fr] grid-cols-1 md:p-6 p-4">
            <div className="flex flex-col items-start justify-center gap-4">
              <div className="flex flex-row items-center justify-start w-full gap-4 pb-4 border-b-2 ">
                <img src={dummyFirms[0].image} alt="Firma 1" className="w-16 h-16 rounded-full object-cover" />
                <div className="flex flex-col items-start justify-center gap-1">
                  <span className="flex justify-start gap-2 md:flex-row flex-col md:items-center items-start">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <span className="text-body text-xl font-bold text-navy-900">{dummyFirms[0].name}</span>
                      {dummyFirms[0].isVerified ? (
                        <VerifiedIcon className="text-green-600 text-lg" />
                      ) : (
                        <VerifiedIcon className="text-red-600 text-lg" />
                      )}
                    </div>
                    <span className="text-body text-sm text-gray-800">{dummyFirms[0].category}</span>
                  </span>
                  <span className="text-body text-sm text-gray-800">{dummyFirms[0].location}</span>
                </div>
              </div>
              <div className="grid w-full gap-4 md:grid-cols-[1fr,3fr,1fr] grid-cols-1">
                {/* Firm - Firm Informations */}
                <div className="flex flex-col items-start justify-center gap-4 md:border-r-2 border-r-0 md:border-b-0 border-b-2 md:pb-0 pb-4">
                  <div className="flex flex-row items-center justify-start gap-2">
                    <EmployeeIcon className="text-gray-800 text-lg" />
                    <span className="text-body text-sm text-gray-800">{dummyFirms[0].employees}</span>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <CalendarIcon className="text-gray-800 text-lg" />
                    <span className="text-body text-sm text-gray-800">{dummyFirms[0].founded}</span>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <LocationIcon className="text-gray-800 text-lg" />
                    <span className="text-body text-sm text-gray-800">{dummyFirms[0].location}</span>
                  </div>
                </div>
                {/* Firm - Firm Services */}
                <div className="flex flex-col items-start justify-center gap-4 mb-8">
                  <span className="text-body text-md text-gray-800">Verilen Hizmetler</span>
                  <div className="flex flex-row h-8 w-full">
                    {dummyFirms[0].services.map((service, index) => {
                      let colorGenerator = Math.floor(Math.random() * 16777215).toString(16);
                      return (
                        <div
                          key={index}
                          style={{ width: `${service.percentage}%`, backgroundColor: `#${colorGenerator}` }}
                          className="flex flex-row items-center justify-center h-full bg-gray-100 rounded-none"
                        />
                      );
                    })}
                  </div>
                  <span className="text-body text-md text-black font-bold">%70 Web Tasarım</span>
                </div>
                {/* Firm - Firm Actions */}
                <div className="flex flex-col items-center justify-center gap-2 pb-4 md:px-4 px-2 md:border-l-2 border-l-0">
                  <Button className="grid w-full gap-4 py-1 bg-transparent rounded-none md:grid-cols-[1fr,5fr] grid-cols-[auto,max-content] md:border-b-2 border-b-1">
                    <ViewIcon className="text-gray-800 text-lg" />
                    <span className="text-body text-sm text-gray-800">İncele</span>
                  </Button>
                  <Button className="grid w-full gap-4 py-1 bg-transparent rounded-none md:grid-cols-[1fr,5fr] grid-cols-[auto,max-content] md:border-b-2 border-b-1">
                    <MessageIcon className="text-gray-800 text-lg" />
                    <span className="text-body text-sm text-gray-800">Mesaj</span>
                  </Button>
                  <Button className="grid w-full gap-4 py-1 bg-transparent rounded-none md:grid-cols-[1fr,5fr] grid-cols-[auto,max-content] md:border-b-2 border-b-1">
                    <WebsiteIcon className="text-gray-800 text-lg" />
                    <span className="text-body text-sm text-gray-800">Web Sitesi</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 py-4 md:border-l-2 border-l-0">
              <span className="text-body text-4xl font-bold text-navy-900">330</span>
              <div className="flex flex-row items-center justify-center gap-2">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <StarFullIcon key={index} className="text-orange-600 text-lg" />
                  ))}
              </div>
              <span className="text-body text-sm text-gray-800">48 inceleme</span>
            </div>
          </div>
        </div>
        {/* Content - Pagination */}
        <div className="flex flex-row items-center w-full my-4 md:justify-end justify-center">
          <Pagination
            showControls
            classNames={{
              cursor: "!bg-navy-500 text-body text-md text-white rounded-full outline-2 outline outline-offset-2 outline-navy-500  ",
              item: "bg-navy-400 text-body text-sm text-white rounded-full hover:!bg-navy-500",
              prev: "bg-navy-400 text-body text-sm text-white rounded-full hover:!bg-navy-500",
              next: "bg-navy-400 text-body text-sm text-white rounded-full hover:!bg-navy-500",
              wrapper: "flex flex-row items-center justify-center gap-2",
            }}
            total={5}
            initialPage={1}
          />
        </div>
        {/* Content - SSS */}
        <div className="flex flex-col items-start justify-center w-full gap-4 p-8 mt-8 border-2">
          <span className="flex flex-col justify-center gap-2 md:items-start items-center">
            <span className="text-body text-2xl font-bold text-black">Sıkça Sorulan Sorular</span>
            <span className="text-body text-sm text-gray-600">Web tasarım hizmetleri hakkında sıkça sorulan sorular</span>
          </span>
          <Accordion>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <AccordionItem
                  key={index}
                  indicator={<AddIcon className="text-navy-500 text-lg" />}
                  classNames={{
                    title: "text-body text-md text-gray-800 font-semibold",
                    content: "text-body text-sm text-gray-900 text-justify",
                    indicator: "!text-navy-500 font-bold",
                  }}
                  aria-label={`Soru ${index + 1}`}
                  title={`Soru ${index + 1}`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
