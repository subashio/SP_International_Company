import {
  CornellPumpImgArray,
  DewateringImgArray,
  ElectricalMechanicalSpares,
  FilterationSytemImgArray,
  GloblePumpImgArray,
  HoseImgArray,
  ModyPumpImgArray,
  PneumaticImgArray,
  PumpImgArray,
  tormacPumpArray,
  valvesImgArray,
} from "./images";

const productConfigs = {
  pumps: {
    img: "/pictures/background/products.png",
    imgArray: PumpImgArray,
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["Our Featured Products"],
    points: [
      { content: "Dewatering Pumps" },
      { content: "Manhole Pumps" },
      { content: " Wastewater Pumps" },
      { content: "Slurry Pumps" },
      { content: "Sand Pumps" },
      { content: "Marine Pumps" },
      { content: "Fire-Fighting Pumps" },
      { content: "Air-Operated Diaphragm Pumps" },
      { content: "Versatile Fluid Handling" },
    ],
  },
  modypumps: {
    img: "/pictures/background/modypump.png",
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: [
      "Dewatering,Slurry & Waste Water Markets",
      "Commercial Building Segments Pumps",
    ],
    imgArray: ModyPumpImgArray,
    points: [
      { content: "Dewatering Pumps" },
      { content: "Manhole Pumps" },
      { content: "Non -Chop Sludge Pumps" },
      { content: "Waste Water Pumps" },
      { content: "Slurry & Sand Pumps" },
      { content: "Diesel Driven Fire Fiphtinp pumps" },
    ],
    points2: [
      { content: "Sewage & Grinder Pumps " },
      { content: "Swimming Pool Cleaner " },
      { content: "Air operated Double diaphragm Pumps  " },
    ],
  },
  cornellpumps: {
    img: "/pictures/background/cornellBg.png",
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["Our Products"],
    imgArray: CornellPumpImgArray,
    points: [
      { content: "Hydro-Transport Food Pumps" },
      { content: "Hot Oil Pumps" },
      { content: "Refrigeration Pumps" },
      { content: "Cutter Pumps" },
      { content: "Hydraulic Submersibles" },
    ],
  },
  globalpumps: {
    img: "/pictures/background/globalBg.jpg",
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["Our Products"],
    imgArray: GloblePumpImgArray,
    points: [
      { content: "Standard Trash Pumps" },
      { content: "High Head Trash Pumps" },
    ],
  },
  tormacpumps: {
    img: "/pictures/background/tormacBg.jpg",
    imgArray: tormacPumpArray,
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["THE RACE TO THE TOP", "Product Range"],

    points: [
      {
        content:
          " Tormac, since inception, has always had its sights on the world at large. Fact is, when you have a good thing going, the world is for the taking. And with quality by our side, we took the world in our stride. Tormac has been in the forefront in taking the revolutionary, innovative pump technology the world over and has made it a household name in some of the toughest markets worldwide.",
      },
      {
        content:
          "After successfully making its presence felt in diverse markets worldwide, Tormac has since its launch in India, made its mark as one of the finest pumps in the market today.  Tormac in fact has established its presence in diverse markets across the globe. The Middle East, Africa, Europe and South East Asia, apart from India.",
      },
      {
        content:
          " In India, Tormac has made major inroads into the market. With branches across the length and breadth of the country, Tormac is fast emerging as the benchmark by which pump quality would be evaluated. ",
      },
    ],
    points2: [
      { content: "Fresh Water" },
      { content: "Aggressive Water" },
      { content: "Sea Water" },
      { content: "Hot & Cold Water" },
      { content: "waste Water" },
    ],
  },
  valvesandactuators: {
    img: "/pictures/background/valveBg.jpg",
    imgArray: valvesImgArray,
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["Valves Range", "Actuators Range"],

    points: [
      {
        content: "Size: 2/1'' to 72''",
      },
      {
        content: "Temperature: -196”C to 700”C",
      },
      {
        content: "Classes: 150 lbs up to 2500 lbs (Customized as per needs)",
      },
      {
        content:
          "Application: Cryogenic Service, Hiph Temperature Service, High Pressure Service, SpecialFluid Service Materials: Carbon Steels, Low Temperature Carbon Steel, Martensitic Steels, Austeniti Stainless Steel, Duplex Stainless Steels, Super Duplex Stainless Steels, Nickel Alloys, Nickel Aluminum Bronze, Hastelloy, lnconel, Titanium Alloy & Carbon Steel with Internal Corrosion Resistant Alloy (CRA) Overlay",
      },
    ],
    points2: [
      { content: "Double acting 1/4turn actuators " },
      { content: "Spring fail-safe units" },
      { content: "Limit switch boxes" },
      { content: "Pneumatic & Electropneumatic positioners" },
      { content: "I/P Controllers" },
      { content: "Manual Failsafe Handles" },
      { content: "Manual override gearboxes" },
    ],
  },
  Pneumatic: {
    img: "/pictures/background/pneuBg.jpg",
    imgArray: PneumaticImgArray,
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["Products", "Pneumatic Hose-Products"],

    points: [
      {
        content: "Repairing of Pneumatic Cylinder and seal replacement",
      },
      {
        content: "Design, Supply and installation of Pneumatic System.",
      },
      {
        content: "Design, Supply and Installation of Air network.",
      },
      {
        content: "Complete overhaul of Pneumatic actuators ",
      },
      {
        content: "Supply of Pneumatic tubing and hose ",
      },
      {
        content: "Service of Pneumatic tools ",
      },
    ],
    points2: [
      { content: "Non-cylindrical profile tube" },
      { content: "Protection" },
      { content: "Braided tube " },
      { content: "Sheathed tube " },
      { content: "Linear tubing " },
      { content: "Spiral coiled tubing" },
      { content: "Multi-core tubing" },
      { content: "Anti-Static Hose" },
    ],
  },
  Hosemanagement: {
    img: "/pictures/background/hoseBg.jpg",
    imgArray: HoseImgArray,
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["Our Services", "Products"],

    points: [
      {
        content: "Audit and Survey",
      },
      {
        content:
          "Hose Fabrication, Supply and Installation and certification inspection, Maintenance, and Recertification Services",
      },
      {
        content: "Pressure Testing & Flushing of Hydraulic pipe lines",
      },
      {
        content:
          "7/24 Mobile Van Onsite Hose Repair and Installation Services ",
      },
    ],
    points2: [
      { content: "Hydraulic Hose" },
      { content: "Thermoplastic Hose " },
      { content: "VHP Hose (l 1500 -8000 PSI) " },
      { content: "UHP Hose (58000 — 13000 PSI)" },
      { content: "Industrial Hose " },
      { content: "Chemical Hose " },
      { content: "LPG Hose  " },
      { content: "Multipurpose Hose " },
      { content: "PTFE Hose" },
      { content: " SS Braised Hose" },
      { content: "Jack Hose " },
      { content: "SS / CS Pipes " },
      { content: "Hose Protection " },
    ],
  },
  filterationsystem: {
    img: "/pictures/background/filterBg.png",
    imgArray: FilterationSytemImgArray,
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["Products"],

    points: [
      { content: "Cartridge Filter " },
      { content: "Filter Housing  " },
      { content: "Filteration System  " },
      { content: "Filter Media" },
      { content: "Filter Bag " },
      { content: "Respirators  " },
      { content: "Capsule Filter  " },
    ],
  },
  ElectricalMechanicalSpares: {
    img: "/pictures/background/spareBg.jpg",
    imgArray: ElectricalMechanicalSpares,
    className: "text-2xl  md:text-4xl xl:text-6xl",
    subTitles: ["Electrical Products", "Mechanical Products"],

    points: [
      { content: "LV & HV Cables" },
      { content: "Switchgear accessories" },
      { content: "Pendant" },
      { content: "lsolators" },
      { content: "Connectors" },
      { content: "Communication cables" },
      { content: "Cable tray, Pipes." },
    ],
    points2: [
      { content: "Bearing" },
      { content: "Mechanical seal" },
      { content: "V- Belt" },
      { content: "Conveyor Belt & assessories" },
      { content: "Mechanical Gear" },
      { content: "Pipe support " },
      { content: "Steel rope" },
      { content: "Mechanical tools" },
      { content: "Air tools" },
    ],
  },
  Dewatering: {
    img: "/pictures/background/dewaterBg.jpg",
    imgArray: DewateringImgArray,
    className: "text-4xl  md:text-4xl xl:text-6xl",
    subTitles: [
      "Common Groundwater Control Techniques by Pumping",
      "Less Common Dewatering Techniques",
    ],

    points: [
      {
        content:
          "Sump Pumping: A basic and widely-used method where water is collected in a sump and pumped out.",
      },
      {
        content:
          "Wellpoints: A more advanced method using a series of small-diameter wells to lower the water table.",
      },
      {
        content:
          "Deep Wells: Suitable for deeper excavations, where deep wells are drilled and equipped with submersible pumps.",
      },
    ],
    points2: [
      {
        content:
          "Eductor Wells: Uses a venturi effect to draw groundwater out, ideal for low-permeability soils.",
      },
      {
        content:
          "Electro-osmosis: Employs electrical currents to move water, often used in fine-grained soils.",
      },
      {
        content:
          "Horizontal Wellpoints and Relief Wells: Specialized systems for controlling water flow in challenging conditions.",
      },
    ],
  },
};
export const ProductDetails: TProductDetails[] = [
  {
    id: 1,
    title: "Pumps",
    description:
      "SP International Services (SP Co) offers a comprehensive range of high-performance pumps for industrial, domestic, and agricultural applications. Engineered for water management, irrigation, and heavy-duty industrial use, SP Co pumps are built for durability and efficiency, ensuring reliable performance and long-term customer satisfaction across all sectors.",
    ...productConfigs.pumps,
  },

  {
    id: 2,
    title: "modypumps",
    description:
      "SP International Services (SP Co) represents Mody Pumps, Inc., a rapidly growing submersible pump manufacturer with nearly 50 years of industry experience. Mody Pumps delivers superior quality, reliability, exceptional customer service, and strong after-sales support. They serve the dewatering, municipal, industrial, marine, rental, and wastewater management markets, offering a full range of dewatering and sewage pumps.",
    ...productConfigs.modypumps,
  },
  {
    id: 3,
    title: "cornellpumps",
    description: "",
    ...productConfigs.cornellpumps,
  },
  {
    id: 4,
    title: "tormacpumps",
    description:
      "The power to surge ahead.Break barriers. Take on challenges.Do the impossible. To put it succinctly, give you the winning edge.THAT'S THE TORMAC PROMISE",
    ...productConfigs.tormacpumps,
  },
  {
    id: 5,
    title: "globalpumps",
    description: "",
    ...productConfigs.globalpumps,
  },
  {
    id: 6,
    title: "Valves & Actuators",
    description:
      "We provide a wide range of valves and actuators designed to meet the most demanding industrial applications. Our products are engineered for precision, reliability, and durability, ensuring optimal performance even in extreme conditions",
    ...productConfigs.valvesandactuators,
  },
  {
    id: 7,
    title: "Pneumatics",
    description:
      "We offer a wide range Pneumatic components such as Cylinders, Directional Valves, Filters, Regulators, Lubricators,Fittings, Silencer, Spares & accessories. Our Pneumatic products are renown for their superior quality and high operational",
    ...productConfigs.Pneumatic,
  },
  {
    id: 8,
    title: "Hose Management",
    description:
      "We offer comprehensive hose services, including fabrication, supply, installation, and certification inspection, alongside maintenance and recertification. Our team conducts pressure testing and flushing of hydraulic pipelines to ensure optimal performance.",
    ...productConfigs.Hosemanagement,
  },
  {
    id: 9,
    title: "Filtration System",
    description:
      "We have widest range of	equipment and solutions for all types of filtration",
    ...productConfigs.filterationsystem,
  },
  {
    id: 10,
    title: "Electrical & Mechanical Spares",
    description:
      "We specialize in the supply, installation, maintenance, and servicing of electromechanical components. With a diverse range of high-quality products, a competent team of engineers, and modern servicing equipment, we ensure top-tier solutions. Our expertise spans across electrical works, blower and boiler servicing, conveyor maintenance, and shearing/bending machine services. Partnering with world-renowned principals, we deliver reliable and efficient services tailored to meet your operational needs.",
    ...productConfigs.ElectricalMechanicalSpares,
  },
  {
    id: 11,
    title: "Dewatering",
    description:
      "Dewatering and water management are essential aspects of many construction or quarry operations. SP International Services(SP co) takes a planned and integrated approach towards water management, incorporating the overall construction development strategy, operational requirements, and environmental considerations.",
    ...productConfigs.Dewatering,
  },
];
