"use client";

import {
  Accordion,
  AccordionItem,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  Divider,
  Pagination,
  Select,
  SelectItem,
  SelectSection,
} from "@nextui-org/react";
import { NextPage } from "next";
import { useState } from "react";
import { MdCheck as MatterIcon } from "react-icons/md";

import {
  PiStar as StarEmptyIcon,
  PiStarFill as StarFullIcon,
  PiGlobe as WebsiteIcon,
  PiMagnifyingGlass as ViewIcon,
  PiPaperPlane as MessageIcon,
} from "react-icons/pi";

const plans = [
  {
    cardClass: "bg-transparent",
    buttonClass: "bg-transparent",
    name: "Basic",
    description: "For small teams or office use. If you are a small team or a small office, this plan is for you.",
    price: 12,
    period: "month",
    features: ["10 users included", "2 GB of storage", "Email support", "Help center access"],
  },
  {
    cardClass: "bg-transparent",
    buttonClass: "bg-transparent",
    name: "Pro",
    description: "For medium-sized companies. If you are a medium-sized company, this plan is for you.",
    price: 24,
    period: "month",
    features: ["20 users included", "10 GB of storage", "Priority email support", "Help center access", "Phone support"],
  },
  {
    cardClass: "bg-gradient-to-b from-navy-400/20 via-navy-200/10 to-navy-100/10",
    buttonClass: "bg-navy-400 text-white",
    name: "Enterprise",
    description: "For large companies. If you are a large company, this plan is for you.",
    price: undefined,
    period: "month",
    features: ["50 users included", "30 GB of storage", "Phone and email support", "Help center access", "Phone support"],
  },
];

const PricingsPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white py-4">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-7xl gap-4 md:flex-row flex-col">
        <span className="cursor-pointer text-body text-md text-default-400 md:flex hidden">{`Ana Sayfa > Fiyatlandırmalar`}</span>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center justify-center w-full max-w-7xl gap-4 md:py-12 py-4 md:px-0 px-4">
        <span className="text-4xl font-bold text-default-900">Fiyatlandırmalar</span>
        <span className="texy-body text-md text-default-400">Hizmetlerimiz için fiyatlandırmalarımızı inceleyebilirsiniz.</span>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full md:pt-8 pt-2">
          {plans.map((plan, index) => (
            <Card
              key={index}
              shadow="sm"
              className={`flex flex-col items-start justify-center w-full gap-4 p-8 border-1 rounded-xl md:min-h-[640px] min-h-[540px] ${plan.cardClass}`}
            >
              <span className="text-md font-bold py-2 px-4 text-white bg-navy-400 rounded-xl">{plan.name}</span>
              <span className="text-body text-md text-default-500 text-start md:h-[100px] h-[60px]">{plan.description}</span>
              <span className="flex flex-row items-end justify-start w-full gap-2 py-4 border-b-2">
                <span className="text-4xl font-bold text-default-900">{plan.price ? `$${plan.price}` : "Konuşalım!"}</span>
                <span className="text-sm text-default-400 font-bold mb-1">{plan.price ? "/" + plan.period : ""}</span>
              </span>
              <div className="flex flex-col items-center justify-center w-full gap-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-start w-full gap-2">
                    <MatterIcon className="text-xl text-navy-400" />
                    <span className="text-body text-sm text-default-800 font-bold">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className={`w-full mt-auto mb-0 p-6 border-1 ${plan.buttonClass}`}>
                <span className="text-md font-bold">Paketi Seç</span>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingsPage;
