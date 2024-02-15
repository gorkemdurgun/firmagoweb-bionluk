"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon, DiscordIcon, HeartFilledIcon, SearchIcon } from "@/components/icons";

import { Logo } from "@/components/icons";
import {
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  User,
} from "@nextui-org/react";

import {
  MdNotifications as NotificationsIcon,
  MdMessage as MessagesIcon,
  MdPersonOutline as AccountIcon,
  MdOutlineModeComment as MessageIcon,
  MdOutlineComment as CommentIcon,
  MdOutlineBookmarkBorder as FavoriteIcon,
  MdOutlineShoppingBag as FirmIcon,
  MdOutlineVerified as VerifiedIcon,
  MdOutlineDiamond as PlansIcon,
  MdOutlineStarOutline as ReviewsIcon,
  MdOutlineLogout as LogoutIcon,
} from "react-icons/md";

const userDropdownList = [
  {
    icon: AccountIcon,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: MessageIcon,
    label: "Messages",
    href: "/messages",
  },
  {
    icon: CommentIcon,
    label: "Comments",
    href: "/comments",
  },
  {
    icon: FavoriteIcon,
    label: "Favorites",
    href: "/favorites",
  },
  {
    icon: FirmIcon,
    label: "Firms",
    href: "/firms",
  },
  {
    icon: VerifiedIcon,
    label: "Verified",
    href: "/verified",
  },
  {
    icon: PlansIcon,
    label: "Plans",
    href: "/plans",
  },
  {
    icon: ReviewsIcon,
    label: "Reviews",
    href: "/reviews",
  },
  {
    icon: LogoutIcon,
    label: "Logout",
    href: "/logout",
  },
];

const dummyNotifications = [
  {
    title: "New comment on your post",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/comments",
  },
  {
    title: "New message from Orkun",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/messages",
  },
  {
    title: "New firm added",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/firms",
  },
  {
    title: "New review",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/reviews",
  },
];

const dummyCategories: {
  label: string;
  items: { label: string; href: string }[];
}[] = [
  {
    label: "Development",
    items: [
      {
        label: "Web Development",
        href: "/web-development",
      },
      {
        label: "Mobile Development",
        href: "/mobile-development",
      },
      {
        label: "Game Development",
        href: "/game-development",
      },
      {
        label: "Desktop Development",
        href: "/desktop-development",
      },
      {
        label: "Software Development",
        href: "/software-development",
      },
      {
        label: "Embedded Development",
        href: "/embedded-development",
      },
      {
        label: "DevOps",
        href: "/devops",
      },
    ],
  },
  {
    label: "Design",
    items: [
      {
        label: "Web Design",
        href: "/web-design",
      },
      {
        label: "Mobile Design",
        href: "/mobile-design",
      },
      {
        label: "Game Design",
        href: "/game-design",
      },
      {
        label: "Desktop Design",
        href: "/desktop-design",
      },
      {
        label: "UI/UX Design",
        href: "/ui-ux-design",
      },
    ],
  },
  {
    label: "Business",
    items: [
      {
        label: "Marketing",
        href: "/marketing",
      },
      {
        label: "Sales",
        href: "/sales",
      },
      {
        label: "Finance",
        href: "/finance",
      },
      {
        label: "Human Resources",
        href: "/human-resources",
      },
      {
        label: "Management",
        href: "/management",
      },
    ],
  },
  {
    label: "Education",
    items: [
      {
        label: "Schools",
        href: "/schools",
      },
      {
        label: "Courses",
        href: "/courses",
      },
      {
        label: "Books",
        href: "/books",
      },
      {
        label: "Tutorials",
        href: "/tutorials",
      },
      {
        label: "Exams",
        href: "/exams",
      },
      {
        label: "Certificates",
        href: "/certificates",
      },
      {
        label: "Diplomas",
        href: "/diplomas",
      },
    ],
  },
  {
    label: "Health",
    items: [
      {
        label: "Hospitals",
        href: "/hospitals",
      },
      {
        label: "Pharmacies",
        href: "/pharmacies",
      },
      {
        label: "Doctors",
        href: "/doctors",
      },
      {
        label: "Nurses",
        href: "/nurses",
      },
    ],
  },
  {
    label: "Entertainment",
    items: [
      {
        label: "Movies",
        href: "/movies",
      },
      {
        label: "Music",
        href: "/music",
      },
      {
        label: "Games",
        href: "/games",
      },
      {
        label: "Books",
        href: "/books",
      },
      {
        label: "Tutorials",
        href: "/tutorials",
      },
    ],
  },
  {
    label: "Other",
    items: [
      {
        label: "Other 1",
        href: "/other-1",
      },
      {
        label: "Other 2",
        href: "/other-2",
      },
      {
        label: "Other 3",
        href: "/other-3",
      },
      { label: "Other 4", href: "/other-4" },
      { label: "Other 5", href: "/other-5" },
      { label: "Other 6", href: "/other-6" },
    ],
  },
];

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100 w-[300px] lg:w-[400px] rounded-full",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
      type="search"
    />
  );
  const userPopoverContent = (
    <PopoverContent className="w-[300px] p-0">
      {(titleProps) => (
        <div className="py-8 w-full">
          <p className="px-4 text-small font-bold text-navy-500" {...titleProps}>
            Merhaba, Orkun
          </p>
          <p className="px-4 text-small text-default-500">orwysoftware@gmail.com</p>
          <Divider className="bg-navy-500 my-4" />
          <div className="px-4 mt-2 flex flex-col gap-0 w-full">
            {userDropdownList.map((item, index) => (
              <Button key={index} className="flex items-center justify-start gap-2 bg-transparent">
                <item.icon className="w-5 h-5 text-default-500" />
                <span className="text-body text-md text-default-500">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      )}
    </PopoverContent>
  );
  const notificationsPopoverContent = (
    <PopoverContent className="w-[300px] p-0">
      {(titleProps) => (
        <div className="py-8 w-full">
          <p className="px-4 text-small font-bold text-navy-500" {...titleProps}>
            Bildirimler
          </p>
          <Divider className="bg-navy-500 my-4" />
          <div className="flex gap-2 px-4 mt-2 flex flex-col gap-0 w-full">
            {dummyNotifications.map((item, index) => (
              <Button disableAnimation key={index} className="cursor-pointer flex items-center justify-start p-0 gap-2 bg-transparent">
                <NotificationsIcon className="w-5 h-5 text-white bg-navy-600 rounded-full p-1" />
                <span className="text-body text-md text-default-500">{item.title}</span>
              </Button>
            ))}
          </div>
        </div>
      )}
    </PopoverContent>
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="py-6">
      <div className="flex flex-col items-center w-full gap-2 ">
        <NavbarContent className="basis-1/5 sm:basis-full w-full mt-4">
          <NavbarContent className="basis-1/5 sm:basis-full max-w-7xl" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <NextLink className="flex justify-start items-center gap-0" href="/">
                <Logo />
                <p className="text-2xl font-bold text-inherit">FİRMAGO</p>
              </NextLink>
            </NavbarBrand>
            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
              <NavbarMenuToggle />
            </NavbarContent>
          </NavbarContent>
          <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
            <NavbarItem className="hidden lg:flex lg:-mr-4">{searchInput}</NavbarItem>
            <NavbarItem className="cursor-pointer hidden lg:flex lg:-mr-4">
              <Button className="flex items-center gap-1 bg-transparent">
                <FirmIcon className="text-gray-800 w-6 h-6" />
                <span className="text-gray-800">Add Firm</span>
              </Button>
            </NavbarItem>
            <NavbarItem className="cursor-pointer hidden lg:flex lg:mr-4">
              <Button className="flex items-center gap-1 bg-transparent">
                <ReviewsIcon className="text-gray-800 w-6 h-6" />
                <span className="text-gray-800">Add Review</span>
              </Button>
            </NavbarItem>
            <NavbarItem className="cursor-pointer hidden lg:flex">
              <Link className="bg-transparent">
                <MessagesIcon className="text-navy-500 w-8 h-8" />
              </Link>
            </NavbarItem>
            <NavbarItem className="cursor-pointer hidden lg:flex">
              <Popover triggerScaleOnOpen={false} placement="bottom">
                <PopoverTrigger>
                  <Link className="bg-transparent">
                    <NotificationsIcon className="text-navy-500 w-8 h-8" />
                  </Link>
                </PopoverTrigger>
                {notificationsPopoverContent}
              </Popover>
            </NavbarItem>
            <NavbarItem className="cursor-pointer hidden lg:flex">
              <Popover triggerScaleOnOpen={false} placement="bottom">
                <PopoverTrigger>
                  <User
                    name="Orkun Akbaş"
                    description="Software Developer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=orkun",
                    }}
                  />
                </PopoverTrigger>
                {userPopoverContent}
              </Popover>
            </NavbarItem>
            {/* <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem> */}
          </NavbarContent>
        </NavbarContent>
        <Divider className="w-[100vw] bg-gray-200 md:flex hidden" />
        <NavbarContent className="basis-1/5 sm:basis-full w-full">
          <div className="w-full whitespace-nowrap md:grid flex md:grid-cols-7 flex-row md:gap-2 gap-4 overflow-scroll scrollbar-hide">
            {dummyCategories.map((category, index) => (
              <Tooltip
                key={index}
                className="shadow-xl border-2 border-t-0 rounded-none rounded-b-xl md:flex hidden"
                offset={9}
                content={
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-4">
                    {category.items.map((item, index) => (
                      <NextLink key={index} href={item.href} className="text-default-500 hover:text-default-900">
                        <span className="font-bold text-body text-md ">{item.label}</span>
                      </NextLink>
                    ))}
                  </div>
                }
              >
                <span className="flex justify-self-center text-default-700 text-md cursor-pointer md:flex hidden">{category.label}</span>
              </Tooltip>
            ))}
            {dummyCategories.map((category, index) => (
              <Dropdown key={index} closeOnSelect={false} className="md:hidden flex">
                <DropdownTrigger>
                  <span className="flex justify-self-center text-navy-700 text-md font-normal md:hidden flex">{category.label}</span>
                </DropdownTrigger>
                <DropdownMenu>
                  {category.items.map((item, index) => (
                    <DropdownItem key={index} className="flex justify-start mt-1 border-b-1">
                      <NextLink href={item.href} className="text-default-500 hover:text-default-900">
                        <span className="font-bold text-body text-md ">{item.label}</span>
                      </NextLink>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ))}
          </div>
        </NavbarContent>
        <Divider className="w-[100vw] bg-gray-200 md:flex hidden" />
      </div>

      <NavbarMenu className="px-4">
        {/* {searchInput} */}
        <div className="mx-4 mt-12 flex flex-col items-start gap-2">
          {/* {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={index === 2 ? "primary" : index === siteConfig.navMenuItems.length - 1 ? "danger" : "foreground"} href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))} */}
          <NavbarMenuItem className="w-full bg-navy-700/10 rounded-xl pt-4 pb-2 pl-4 my-2">
            <User
              classNames={{
                name: "text-body text-navy-900",
                description: "text-body text-navy-500",
              }}
              name="Orkun Akbaş"
              description="Software Developer"
              avatarProps={{ src: "https://i.pravatar.cc/150?u=orkun" }}
            />
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="#" size="lg">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="#" size="lg">
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="#" size="lg">
              Services
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="#" size="lg">
              Contact
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="#" size="lg">
              Blog
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link color="primary" href="#" size="lg">
              Sign In
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="primary" href="#" size="lg">
              Sign Up
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="danger" href="#" size="lg">
              Sign Out
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
