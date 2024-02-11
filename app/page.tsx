"use client";

import { Autocomplete, AutocompleteItem, Button, Card } from "@nextui-org/react";
import { useRef, useState } from "react";

import {
  PiMagnifyingGlassDuotone as SearchIcon,
  PiMapPinDuotone as LocationIcon,
  PiArrowRightLight as ArrowRightIcon,
  PiNumberCircleOne as TemporaryNeedIcon,
} from "react-icons/pi";

import { MdVerified as VerifiedIcon, MdArrowBack as BlogLeftArrowIcon, MdArrowForward as BlogRightArrowIcon } from "react-icons/md";

const dummyServices = [
  {
    id: 1,
    name: "Web Development",
  },
  {
    id: 2,
    name: "Mobile Development",
  },
  {
    id: 3,
    name: "UI/UX Design",
  },
  {
    id: 4,
    name: "Graphic Design",
  },
  {
    id: 5,
    name: "Video Editing",
  },
  {
    id: 6,
    name: "Digital Marketing",
  },
  {
    id: 7,
    name: "SEO",
  },
  {
    id: 8,
    name: "Social Media Marketing",
  },
  {
    id: 9,
    name: "Content Writing",
  },
  {
    id: 10,
    name: "Copywriting",
  },
  {
    id: 11,
    name: "Photography",
  },
  {
    id: 12,
    name: "Videography",
  },
  {
    id: 13,
    name: "3D Modeling",
  },
  {
    id: 14,
    name: "Animation",
  },
  {
    id: 15,
    name: "Game Development",
  },
  {
    id: 16,
    name: "AR/VR",
  },
  {
    id: 17,
    name: "Blockchain",
  },
  {
    id: 18,
    name: "AI/ML",
  },
  {
    id: 19,
    name: "Data Science",
  },
  {
    id: 20,
    name: "Cloud Computing",
  },
];

const dummyLocations = [
  {
    id: 1,
    name: "Adana",
  },
  {
    id: 2,
    name: "Adıyaman",
  },
  {
    id: 3,
    name: "Afyonkarahisar",
  },
  {
    id: 4,
    name: "Ağrı",
  },
  {
    id: 5,
    name: "Amasya",
  },
  {
    id: 6,
    name: "Ankara",
  },
  {
    id: 7,
    name: "Antalya",
  },
  {
    id: 8,
    name: "Artvin",
  },
  {
    id: 9,
    name: "Aydın",
  },
  {
    id: 10,
    name: "Balıkesir",
  },
  {
    id: 11,
    name: "Bilecik",
  },
  {
    id: 12,
    name: "Bingöl",
  },
  {
    id: 13,
    name: "Bitlis",
  },
  {
    id: 14,
    name: "Bolu",
  },
  {
    id: 15,
    name: "Burdur",
  },
  {
    id: 16,
    name: "Bursa",
  },
  {
    id: 17,
    name: "Çanakkale",
  },
  {
    id: 18,
    name: "Çankırı",
  },
  {
    id: 19,
    name: "Çorum",
  },
  {
    id: 20,
    name: "Denizli",
  },
  {
    id: 21,
    name: "Diyarbakır",
  },
  {
    id: 22,
    name: "Edirne",
  },
];

const dummyPopularSearches = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Graphic Design",
  "Video Editing",
  "Digital Marketing",
  "SEO",
];

const dummyNeeds = [
  "Emlak",
  "Otomobil",
  "İkinci El",
  "İş İlanları",
  "Yedek Parça",
  "İş Makineleri",
  "Sanayi",
  "Tarım",
  "Hizmetler",
  "Yedek Parça",
  "İş Makineleri",
  "Sanayi",
  "Tarım",
  "Hizmetler",
  "Lojistik",
  "Gıda",
];

const dummyMatters = [
  "Güvenilir işletmelerle çalışın, işletmenizi büyütün.",
  "Tüm ihtiyaçlarınızı tek bir platformda bulun.",
  "Farklı sektörlerden işletmelerle çalışın, en uygun fiyatları alın ve karşılaştırın.",
];

const dummyBlogs = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1670871853702-ad91bbc2a3ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hc3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    prefix: "Building",
    title: "How to find carpenter for your house",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGRldnxlbnwwfHwwfHx8MA%3D%3D",
    prefix: "Web Development",
    title: "How to create a website with Next.js",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601902572612-3c850fab3ad8?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prefix: "Photography",
    title: "How to take a perfect photo with camera",
  },
  {
    image:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prefix: "Law Services",
    title: "How to find a good lawyer for your case",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1677087121940-8ec58a497a38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D",
    prefix: "Casting",
    title: "How to find a good casting agency",
  },
  {
    image:
      "https://images.unsplash.com/photo-1597207077833-9cfdb90c9fb8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHJlY29yZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    prefix: "Recording",
    title: "How to record a perfect song",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D",
    prefix: "Engineering",
    title: "How to find a good engineer for your project",
  },
];

export default function Home() {
  const serviceSearchRef = useRef(null);
  const blogRef = useRef(null);

  const [searchService, setSearchService] = useState("");

  function onScrollBlog(direction: "left" | "right") {
    if (direction === "left") {
      // @ts-ignore
      blogRef.current.scrollLeft -= 400;
    } else {
      // @ts-ignore
      blogRef.current.scrollLeft += 400;
    }
  }

  return (
    <section
      className="flex flex-col items-center justify-center gap-12 py-8
     md:py-10 "
    >
      {/* Launch Section */}
      <Card className="grid grid-cols-[3fr,2fr] w-full gap-8 p-6 rounded-xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 md:px-8 py-16">
        <div className="flex flex-col items-start justify-center gap-0">
          {/* Title and Description */}
          <h1 className="text-4xl font-bold text-white">Binlerce firma arasından seçin</h1>
          <p className="text-lg font-normal text-white">Aradığın bizde yoksa hiçbir yerde yoktur!</p>
          {/* Search Inputs */}
          <div className="grid grid-cols-[2fr,2fr,1fr] items-center gap-4 mt-4 mb-12">
            <Autocomplete
              ref={serviceSearchRef}
              className="max-w-xs"
              placeholder="Ne aramıştınız?"
              startContent={<SearchIcon className="text-gray-500 w-8 h-8" />}
              defaultItems={dummyServices}
              inputValue={searchService}
              onInputChange={(value) => setSearchService(value)}
              clearButtonProps={{ onClick: () => setSearchService("") }}
            >
              {(service) => <AutocompleteItem key={service.id}>{service.name}</AutocompleteItem>}
            </Autocomplete>
            <Autocomplete
              className="max-w-xs"
              placeholder="Nerede aramıştınız?"
              startContent={<LocationIcon className="text-gray-500 w-8 h-8" />}
              defaultItems={dummyLocations}
            >
              {(location) => <AutocompleteItem key={location.id}>{location.name}</AutocompleteItem>}
            </Autocomplete>
            <Button className="h-full p-4 bg-gray-900">
              <span className="text-lg text-body text-white font-bold">Ara</span>
            </Button>
          </div>
          {/* Popular Searches */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            <span className="text-lg text-body font-bold text-white">Popüler Aramalar</span>
            {dummyPopularSearches.map((search, index) => (
              <Button
                key={index}
                className="bg-indigo-100/20 border-2 border-transparent hover:scale-105 hover:border-indigo-100"
                onClick={() => {
                  setSearchService(search);
                  // @ts-ignore
                  serviceSearchRef?.current?.focus();
                }}
              >
                <span className="text-body text-sm text-white">{search}</span>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <img src="https://placehold.co/150x100" alt="NextUI" className="w-32 h-32 md:w-full md:h-full" />
        </div>
      </Card>
      {/* We Have Your Needs Section */}
      <div className="flex flex-col w-full align-center justify-center gap-8 py-8 md:py-10">
        <span className="flex items-center justify-start gap-4 text-4xl font-bold text-gray-900">
          <span className="text-3xl text-body uppercase text-gray-900">İHTİYACIN BİZDE VAR</span>
          <ArrowRightIcon className="text-gray-900 w-8 h-8" />
        </span>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-8">
          {dummyNeeds.map((need, index) => (
            <Card
              key={index}
              className="cursor-pointer grid grid-rows-2 justify-start min-h-[120px] p-4 rounded-xl hover:scale-105 hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/5 from-65% via-white to-white"
            >
              <TemporaryNeedIcon className="text-4xl text-gray-600 -ml-2 pb-2 border-b-1" />
              <span className="text-body text-lg font-bold text-gray-600">{need}</span>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <span className="text-lg text-body text-gray-900">Daha fazla ihtiyacın mı var? Hemen incele, aradığın her şeyi bul.</span>
          <Button className="w-1/2 p-6 bg-gray-900">
            <span className="text-lg text-body text-white font-bold">Daha fazlasını keşfet</span>
          </Button>
        </div>
      </div>
      {/* Trust Our Community Section */}
      <div></div>
      {/* Roadmap Section */}
      <div></div>
      {/* For Business Section */}
      <Card className="grid grid-cols-1 p-8 gap-8 w-full bg-indigo-900 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-12">
          <span className="text-body text-4xl font-medium text-white max-w-[500px]">İşletmeler için gelişmiş çözümler ve hizmetler</span>
          <div className="flex flex-col items-start justify-start gap-4">
            {dummyMatters.map((matter, index) => (
              <span key={index} className="flex items-center justify-start gap-4 text-lg font-bold text-gray-900">
                <VerifiedIcon className="text-4xl text-white" />
                <span className="text-lg text-body text-white">{matter}</span>
              </span>
            ))}
          </div>
          <Button className="w-1/2 p-6 bg-gray-900">
            <span className="text-lg text-body text-white font-bold">Daha fazlasını keşfet</span>
            <ArrowRightIcon className="text-white w-6 h-6" />
          </Button>
        </div>
        <div className="flex items-center justify-center w-full">
          <img src="https://placehold.co/150x100" alt="NextUI" className="w-32 h-32 md:w-full md:h-full" />
        </div>
      </Card>
      {/* Blogs Section */}
      <div className="relative flex flex-col w-full align-center justify-center gap-8 py-8  md:py-10">
        <span className="flex items-center justify-start gap-4 text-4xl font-bold text-gray-900 pl-8">
          <span className="text-3xl text-body uppercase text-gray-900">BLOG</span>
          <ArrowRightIcon className="text-gray-900 w-8 h-8" />
        </span>
        <Button className="absolute top-[55%] left-0 transform -translate-y-1/2 bg-gray-900 z-10" onClick={() => onScrollBlog("left")}>
          <BlogLeftArrowIcon className="text-white w-8 h-8" />
        </Button>
        <Button className="absolute top-[55%] right-0 transform -translate-y-1/2 bg-gray-900 z-10" onClick={() => onScrollBlog("right")}>
          <BlogRightArrowIcon className="text-white w-8 h-8" />
        </Button>
        <div className="relative flex overflow-x-scroll scrollbar-hide scroll-smooth px-8 max-w-[98%]" ref={blogRef}>
          <div className="flex flex-nowrap gap-4">
            {dummyBlogs.map((blog, index) => (
              <div key={index} className="inline-block">
                <div
                  className="w-[280px] h-96 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-95"
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${blog.image})`,
                  }}
                >
                  <div className="flex flex-col items-start justify-start gap-4 p-4 h-full bg-gray-900/25 rounded-md p-2 h-full">
                    <span className="text-md text-body text-gray-900 bg-white px-2 rounded-lg shadow-sm">{blog.prefix}</span>
                    <span className="text-xl text-body text-white font-extrabold shadow-lg rounded-lg p-2">{blog.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
