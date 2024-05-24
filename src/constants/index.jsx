import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

export const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Products",
    link: "#",
  },
  {
    id: 3,
    name: "Pricing",
    link: "#",
  },
  {
    id: 4,
    name: "Contact",
    link: "#",
  },
];

export const FeaturesData = [
  {
    name: "Captivating Videos",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Explore a world of stunning visuals and compelling stories.",
    aosDelay: "300",
  },
  {
    name: "Safe Transactions",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Experience peace of mind with our secure transaction system. ",
    aosDelay: "500",
  },
  {
    name: "Experience Reality",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Immerse yourself in the essence of life with our platform. .",
    aosDelay: "700",
  },
];

export const footerLinks = [
  { id: 1, title: "Home", link: "/#" },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/#blog",
  },
];
