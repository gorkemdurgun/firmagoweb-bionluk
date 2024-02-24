"use client";

import { Autocomplete, AutocompleteItem, Button, Card } from "@nextui-org/react";
import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useScroll, useInView } from "framer-motion";

import {
  PiMagnifyingGlassDuotone as SearchIcon,
  PiMapPinDuotone as LocationIcon,
  PiArrowRightLight as ArrowRightIcon,
  PiXSquareDuotone as TemporaryNeedIcon,
} from "react-icons/pi";

import {
  MdVerified as VerifiedIcon,
  MdArrowBack as BlogLeftArrowIcon,
  MdArrowForward as BlogRightArrowIcon,
  MdStar as StarIcon,
} from "react-icons/md";

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
  {
    id: 21,
    name: "SEO Auditing",
  },
  {
    id: 22,
    name: "3D Character Design",
  },
  {
    id: 23,
    name: "Wedding Photography",
  },
  {
    id: 24,
    name: "App Marketing",
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

const dummyPopularSearches = ["Development", "SEO", "Marketing", "Design", "Photography", "Writing", "Media"];

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

const dummyTestimonials = [
  {
    image: "https://placehold.co/24x24",
    name: "John Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
  {
    image: "https://placehold.co/24x24",
    name: "Jane Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
  {
    image: "https://placehold.co/24x24",
    name: "John Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
  {
    image: "https://placehold.co/24x24",
    name: "Jane Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
  {
    image: "https://placehold.co/24x24",
    name: "John Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
  {
    image: "https://placehold.co/24x24",
    name: "Jane Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
  {
    image: "https://placehold.co/24x24",
    name: "John Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
  {
    image: "https://placehold.co/24x24",
    name: "Jane Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
  {
    image: "https://placehold.co/24x24",
    name: "John Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
  {
    image: "https://placehold.co/24x24",
    name: "Jane Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
  {
    image: "https://placehold.co/24x24",
    name: "John Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
  {
    image: "https://placehold.co/24x24",
    name: "Jane Doe",
    title: "CEO of Company",
    message: "I found the best service for my company. I'm so happy with it. I recommend it to everyone.",
  },
];

export default function Home() {
  const serviceSearchRef = useRef(null);
  const blogRef = useRef(null);

  const [searchService, setSearchService] = useState("");

  const { scrollYProgress } = useScroll();

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
      className="
      w-full
      flex flex-col items-center justify-center md:gap-12 gap-4
     md:py-8 py-4 md:px-8 px-4 bg-gradient-to-b from-white via-navy-100/20 to-white"
    >
      {/* Launch Section */}
      <motion.div
        className="max-w-7xl grid w-full gap-8 rounded-xl bg-navy-700 md:px-8  md:grid-cols-[3fr,2fr] grid-cols-1 md:py-16 py-12 md:px-6 px-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 150,
          damping: 10,
        }}
      >
        <div className="flex flex-col items-start justify-center gap-0">
          {/* Title and Description */}
          <h1 className="font-bold text-white md:text-4xl text-xl">Binlerce firma arasından seçin!</h1>
          <p className="font-normal text-white md:text-xl text-sm">Aradığın bizde yoksa hiçbir yerde yoktur</p>
          {/* Search Inputs */}
          <div className="grid items-center gap-4 mt-8 mb-12 w-full md:grid-cols-[2fr,2fr,1fr] grid-cols-1">
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
            <Button className="h-full p-4 bg-navy-100">
              <span className="text-lg text-body text-black font-bold">Ara</span>
            </Button>
          </div>
          {/* Popular Searches */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            <span className="text-lg text-body font-bold text-white">Popüler Aramalar</span>
            {dummyPopularSearches.map((search, index) => (
              <Button
                key={index}
                className="bg-navy-100/20 border-2 border-transparent hover:scale-105 hover:border-navy-100"
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
        <div className="items-center justify-center w-full md:flex hidden">
          <img src="https://placehold.co/150x100" alt="NextUI" className="w-32 h-32 md:w-full md:h-full" />
        </div>
      </motion.div>
      {/* We Have Your Needs Section */}
      <div className="max-w-7xl flex flex-col w-full align-center justify-center md:gap-8 gap-4 md:py-10 py-8">
        <span className="flex items-center justify-start gap-4 font-bold text-gray-900">
          <span className="text-body uppercase text-gray-900 md:text-3xl text-xl">İHTİYACIN BİZDE VAR</span>
          <ArrowRightIcon className="text-gray-900 w-8 h-8" />
        </span>
        <div className="grid md:gap-4 gap-2 md:grid-cols-8 grid-cols-2">
          {dummyNeeds.map((need, index) => (
            <div
              key={index}
              className="cursor-pointer grid grid-rows-2 justify-start min-h-[120px] p-4 border-2 border-gray-100 shadow-lg rounded-xl transition-all bg-white hover:scale-105 hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/10 from-55% via-white to-white"
            >
              <TemporaryNeedIcon className="text-4xl text-gray-600 -ml-2 pb-2 border-b-1" />
              <span className="text-body text-lg font-bold text-gray-600">{need}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-4 mt-4">
          <span className="text-lg text-body text-gray-900">Daha fazla ihtiyacın mı var? Hemen incele, aradığın her şeyi bul.</span>
          <Button className="p-6 bg-gray-900 md:w-1/2 w-full">
            <span className="text-lg text-body text-white font-bold">Daha fazlasını keşfet</span>
          </Button>
        </div>
      </div>
      {/* Trust Our Community Section */}
      <Card
        className="max-w-7xl flex flex-col w-full align-center justify-center gap-4 bg-white shadow-inner md:py-10 md:p-8 p-4 "
        shadow="none"
      >
        <span className="flex items-center mb-8 gap-4 text-4xl font-bold text-gray-900 md:justify-start justify-between">
          <span className="text-body uppercase text-gray-900 md:text-3xl text-lg">GÜVENİLİR TOPLULUĞUMUZ</span>
          <VerifiedIcon className="text-navy-400 bg-navy-100 p-2 rounded-full md:w-12 w-8 md:h-12 h-8" />
        </span>
        {/* // scrolled testimonials by scrollYProgress, half of comments in top and rightly animated, other half in bottom and leftly animated */}
        <motion.div
          className="flex flex-row items-center justify-center md:gap-8 gap-4"
          style={{
            x: useTransform(scrollYProgress, [0, 2], ["100%", "-240%"]),
          }}
        >
          {dummyTestimonials.slice(0, 6).map((testimonial, index) => (
            <Card
              key={index}
              className="flex md:flex-row flex-col items-center justify-center gap-4 p-4 rounded-xl shadow-md bg-transparent rounded-3xl border-4 border-navy-500 bg-white md:min-w-[600px] min-w-[180px]"
            >
              <img src={testimonial.image} alt="NextUI" className="md:w-24 md:h-24 h-12 w-12 rounded-md" />
              {/* <span className="text-lg text-body font-bold text-gray-900">{testimonial.name}</span> */}
              {/* <span className="text-lg text-body font-normal text-gray-900">{testimonial.title}</span> */}
              <div className="flex flex-col md:items-start items-center justify-start gap-2">
                <span className="flex flex-row items-center justify-start gap-0">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <StarIcon key={index} className=" text-yellow-400 md:text-2xl text-lg" />
                    ))}
                </span>
                <span className="text-body font-normal text-gray-900 md:text-start text-center md:text-[14px] text-[10px]">
                  {testimonial.message}
                </span>
              </div>
            </Card>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-row items-center justify-center md:gap-8 gap-4"
          style={{
            x: useTransform(scrollYProgress, [0, 2], ["-100%", "240%"]),
          }}
        >
          {dummyTestimonials.slice(6, 12).map((testimonial, index) => (
            <Card
              key={index}
              className="flex md:flex-row flex-col items-center justify-center gap-4 p-4 rounded-xl shadow-md bg-transparent rounded-3xl border-4 border-navy-500 bg-white md:min-w-[600px] min-w-[180px]"
            >
              <img src={testimonial.image} alt="NextUI" className="md:w-24 md:h-24 h-12 w-12 rounded-md" />
              {/* <span className="text-lg text-body font-bold text-gray-900">{testimonial.name}</span> */}
              {/* <span className="text-lg text-body font-normal text-gray-900">{testimonial.title}</span> */}
              <div className="flex flex-col md:items-start items-center justify-start gap-2">
                <span className="flex flex-row items-center justify-start gap-0">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <StarIcon key={index} className=" text-yellow-400 md:text-2xl text-lg" />
                    ))}
                </span>
                <span className="text-body font-normal text-gray-900 md:text-start text-center md:text-[14px] text-[10px]">
                  {testimonial.message}
                </span>
              </div>
            </Card>
          ))}
        </motion.div>
      </Card>
      {/* Roadmap Section */}
      <div></div>
      {/* For Business Section */}
      <Card className="max-w-7xl grid grid-cols-1 p-8 gap-8 w-full bg-navy-700 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center md:gap-12 gap-8">
          <span className="text-body font-medium text-white max-w-[500px] md:text-4xl text-2xl">
            İşletmeler için gelişmiş çözümler ve hizmetler
          </span>
          <div className="flex flex-col items-start justify-start w-full gap-4">
            {dummyMatters.map((matter, index) => (
              <span key={index} className="grid gap-4 items-start justify-start grid-cols-[1fr,20fr] w-full">
                <VerifiedIcon className="text-navy-100 w-8 h-8" />
                <span className="text-body font-normal text-white md:text-lg text-sm">{matter}</span>
              </span>
            ))}
          </div>
          <Button className=" p-6 bg-gray-100/10 md:w-1/2 w-full">
            <span className="text-lg text-body text-white font-bold">Daha fazlasını keşfet</span>
            <ArrowRightIcon className="text-white w-6 h-6" />
          </Button>
        </div>
        <div className="flex items-center justify-center w-full">
          <img src="https://placehold.co/150x100" alt="NextUI" className="w-full md:h-full" />
        </div>
      </Card>
      {/* Blogs Section */}
      <div className="max-w-7xl relative flex flex-col w-full align-center justify-center gap-8 py-8 md:py-10">
        <span className="flex items-center justify-start gap-4 text-4xl font-bold text-gray-900 md:pl-8">
          <span className="text-body uppercase text-gray-900 md:text-3xl text-xl">BLOG</span>
          <ArrowRightIcon className="text-gray-900 w-8 h-8" />
        </span>
        <Button
          className="absolute top-[55%] left-0 transform -translate-y-1/2 bg-gray-900 z-10 md:flex hidden"
          onClick={() => onScrollBlog("left")}
        >
          <BlogLeftArrowIcon className="text-white w-8 h-8" />
        </Button>
        <Button
          className="absolute top-[55%] right-0 transform -translate-y-1/2 bg-gray-900 z-10 md:flex hidden"
          onClick={() => onScrollBlog("right")}
        >
          <BlogRightArrowIcon className="text-white w-8 h-8" />
        </Button>
        <div className="relative flex overflow-x-scroll scrollbar-hide scroll-smooth md:px-8 px-0 max-w-[98%]" ref={blogRef}>
          <div className="flex flex-nowrap gap-4">
            {dummyBlogs.map((blog, index) => (
              <div key={index} className="inline-block">
                <div
                  className="cursor-pointer w-[280px] h-96 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-95"
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
