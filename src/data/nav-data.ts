import { FaNotesMedical, FaVirusCovid } from "react-icons/fa6";
import { GiMedicalThermometer, GiMedicines, GiStomach, GiThreeLeaves } from "react-icons/gi";
import { MdMonitorHeart } from "react-icons/md";
import { IoHome } from "react-icons/io5";

export const navData = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: IoHome,
    },
    {
      title: "Covid Essentials",
      url: "/covid-essentials",
      icon: FaVirusCovid,
    },
    {
      title: "Diabetes",
      url: "#",
      icon: GiMedicines,
    },
    {
      title: "Cardiac Care",
      url: "#",
      icon: MdMonitorHeart,
    },
    {
      title: "Stomach Care",
      url: "#",
      icon: GiStomach,
    },
    {
      title: "Ayurvedic",
      url: "#",
      icon: GiThreeLeaves,
    },
    {
      title: "Devices",
      url: "#",
      icon: GiMedicalThermometer,
    },
    {
      title: "Prescription",
      url: "#",
      icon: FaNotesMedical,
    },
  ],
};
