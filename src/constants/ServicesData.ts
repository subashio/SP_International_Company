import { HydraulicsImgArray } from "./images";

const servicesConfig = {
  hydraulics: {
    img: "/pictures/hydroBg.png",
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["Our Services"],

    imgArray: HydraulicsImgArray,

    points: [
      {
        content:
          "Repairing of Hydraulic Cylinder, Pumps and Motors, Accumulator, Valves and Hydraulic Equipments,etc.,",
      },
      {
        content:
          "Trouble shooting of Hydraulic Systems and Construction Machinery.",
      },
      { content: "Design and Manufacturing of Hydraulic Power unit." },
      { content: "Overhauling / Refurbishment of Hydraulic Power units" },
      { content: "Design and fabrication of Hydraulic Cylinder " },
      { content: "Accumulator Gas pressure Filling & Testing." },
      { content: "Flushing of Hydraulic Systems" },
      { content: "Offshore Crane servicing " },
      { content: "Piping , Pressure Testing" },
      { content: "Condition based Maintenance Annual Maintenance Contract" },
    ],
  },
  WeldingSolution: {
    img: "/pictures/weldingBg.jpg",
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["Welding", "Coating"],

    imgArray: HydraulicsImgArray,

    points: [
      { content: "PTA Welding" },
      { content: "MMA Welding" },
      { content: "MIG/MAG Welding" },
      { content: "Open ARC Welding" },
      { content: "TIG Welding" },
      { content: "Plasma Cutting" },
    ],
    points2: [
      { content: "Laser Cladding" },
      { content: "Cold flame spraying" },
      { content: "Arc Wire Spraying" },
      { content: "Hot Flame Spraying" },
      { content: "HVOF Spraying" },
      { content: "Polymer Coatings" },
    ],
  },
};

export const ServicesDetails: TServicesDetails[] = [
  {
    id: 1,
    title: "Hydraulics",
    description:
      "We provide Hydraulic solutions, services, trading, and supplies of German quality products specifically for Industrial, Oil & Gas, Offshore /Onshore, Mobile, Power Generation, Marine, Manufacturing, Process, and other hydraulic applications.",
    ...servicesConfig.hydraulics,
  },
  {
    id: 2,
    title: "Welding Solution",
    description:
      "We provide Hydraulic solutions, services, trading, and supplies of German quality products specifically for Industrial, Oil & Gas, Offshore /Onshore, Mobile, Power Generation, Marine, Manufacturing, Process, and other hydraulic applications.",
    ...servicesConfig.WeldingSolution,
  },
];
