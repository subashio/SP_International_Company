import {
  chemicalandProccessImgArray,
  envImgArray,
  HydraulicsImgArray,
  oilandgasImgArray,
  PipelineFlusingImgArray,
  waterandwasteImgArray,
  WeldingImgArray,
} from "./images";

const servicesConfig = {
  hydraulics: {
    img: "/pictures/background/hydroBg.png",
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
    img: "/pictures/background/weldingBg.jpg",
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["Welding", "Coating"],

    imgArray: WeldingImgArray,

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
  PipelineFlusing: {
    img: "/pictures/background/pipeBg.png",
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: [
      "Importance of Pipeline Flushing",
      " Flushing Process and Techniques",
    ],

    imgArray: PipelineFlusingImgArray,

    points: [
      {
        content:
          "Preventing System Contamination: Removes debris and particles that can damage equipment or affect product quality.",
      },
      {
        content:
          "Extending Equipment Life: Reduces wear and tear on permanent pumps by avoiding strain during initial operation",
      },
      {
        content:
          "Cost Savings: Lowers maintenance costs by preventing early breakdowns and malfunctions.",
      },
    ],
    points2: [
      {
        content:
          "High-Volume Circulation Pumps: Temporary pumps are used to flush the system with water or cleaning solutions at high flow rates.",
      },
      {
        content:
          "Debris Removal: Targets typical construction debris, sand, and particles that accumulate inside the pipelines.",
      },
      {
        content:
          "Client Specifications: Flushing is customized according to client operational requirements and specifications to ensure system integrity.",
      },
    ],
  },
  EnvServices: {
    img: "/pictures/background/envBg.jpg",
    className: "text-3xl  md:text-5xl xl:text-6xl",
    subTitles: ["Industrial Waste Management Systems"],

    imgArray: envImgArray,

    points: [
      {
        content:
          "Comprehensive Solutions: SP International Services provides treatment plants for managing industrial waste, including clarifiers, reverse osmosis, and air scrubbers, designed to minimize environmental impact.",
      },
      {
        content:
          "Customized Services: Tailored waste management solutions cater to industries such as oil & gas, construction, and municipalities, ensuring regulatory compliance and environmental sustainability.",
      },
      {
        content:
          "Flexible Equipment Availability: Equipment is available for both lease and sale, allowing clients to choose the most cost-effective option based on their specific requirements",
      },
    ],
  },
  oilandgasServices: {
    img: "/pictures/background/oilBg.jpeg",
    className: "text-4xl  md:text-5xl xl:text-6xl",
    subTitles: ["High-Efficiency Lube Oil System Flushing", "Benefits"],

    imgArray: oilandgasImgArray,

    points: [
      {
        content:
          "Advanced microfiltration down to one micron ensures superior cleanliness.",
      },
      {
        content:
          "High-velocity flushing techniques reduce downtime and save costs.",
      },
      {
        content:
          "Recyclable service oil makes the process environmentally friendly and cost-effective.",
      },
    ],
    points2: [
      {
        content: "Micro filtration down to one micron",
      },
      {
        content:
          " Much quicker compared to using the system pump and filtration",
      },
      { content: " Saves time and money" },
      { content: " The flushing media (service oil) can be recycled" },
      { content: " Always exceeds particle count criteria" },
    ],
  },
  chemicalServices: {
    img: "/pictures/background/chemicalBg.jpg",
    className: "text-3xl  md:text-5xl xl:text-6xl",
    subTitles: [
      "Chemical Decontamination Process",
      "Effective Use of Chemical Cleaning",
    ],

    imgArray: chemicalandProccessImgArray,

    points: [
      {
        content:
          "Hydrocarbon System Cleaning: The chemical decontamination process effectively cleans and degasses hydrocarbon systems by de-oiling and degreasing, eliminating hazards like LEL (Lower Explosive Limit), H2S, and pyrophoric materials.",
      },
      {
        content:
          "Environmentally Friendly and Safe: The process and chemicals used are designed to be environmentally friendly and safe for the system's metallurgy, posing no corrosion risks.",
      },
      {
        content:
          "Strategic Partnership with REDA: SP Internationals (SP CO) has a strategic alliance with REDA, a local chemical processing and manufacturing company, providing a biodegradable solvent with a neutral pH for the decontamination process.",
      },
      {
        content:
          "Efficient and Time-Saving: The process reduces the steaming duration by half, making man entry possible within 12-24 hours. It allows workers to proceed with mechanical tasks immediately after, improving overall efficiency.",
      },
    ],
    points2: [
      {
        content:
          "Pre-Operational and Operational Cleaning: Chemical cleaning is widely used for both pre-operational and operational cleaning requirements across various systems, offering a safer and more efficient alternative to labor-intensive mechanical methods.",
      },
      {
        content:
          " Improving Equipment Performance: Cleaning industrial equipment with chemical methods helps enhance operational efficiency, prevent mechanical failures, and reduce startup problems, ultimately improving the overall performance of the system.",
      },
      {
        content:
          " Removal of Contaminants: The chemical cleaning process effectively removes inorganic and organic contaminants, mill scale, corrosion, and various types of scale deposits, leaving the system in a passive state.",
      },
      {
        content:
          " Versatility in Cleaning Solutions: A range of solvents and solutions are available for chemical cleaning, tailored to the specific type of fouling and the system's metallurgy. Fin Fan foam cleaning is one such method under the scope of chemical cleaning.",
      },
    ],
  },
  waterandWasteServices: {
    img: "/pictures/background/waterBg.jpeg",
    className: "text-3xl  md:text-5xl xl:text-6xl",
    subTitles: [
      "High-Pressure Water Jetting (HPWJ) for Industrial Cleaning",
      "Benefits",
    ],

    imgArray: waterandwasteImgArray,

    points: [
      {
        content:
          "High-pressure water jetting (HPWJ) is a faster and more economical cleaning method compared to chemical cleaning, making it a preferred solution for various industrial applications.",
      },
      {
        content:
          "HPWJ can be applied to remove a variety of contaminants such as coke, tar, asphalt, fiberglass, and polymers. It is also effective in cases where tubes are fully blocked.",
      },
      {
        content:
          "Since HPWJ does not involve chemicals, it eliminates the need for chemical waste disposal, offering a safer alternative for both personnel and the environment.",
      },
    ],
    points2: [
      { content: "Economical and faster" },
      { content: "No chemical waste disposal issues" },
      { content: " Wide range of applications" },
      { content: "Can be used even if the tube is fully blocked" },
      {
        content:
          "Can be used in conjunction with other cleaning methodology to shorten the overall cleaning duration",
      },
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
  {
    id: 3,
    title: "Pipeline Flushing",
    description:
      "Pipeline flushing is a crucial pre-commissioning activity that involves cleaning the internal surfaces of pipelines to remove construction debris, sand, and other particles. It is carried out using high-volume temporary circulation pumps that deliver flow rates exceeding the design velocity by up to 110%. Proper flushing helps prevent damage to the permanent system pumps and reduces long-term maintenance costs by ensuring that the pipeline is free of contaminants before commissioning.", // "We provide Hydraulic solutions, services, trading, and supplies of German quality products specifically for Industrial, Oil & Gas, Offshore /Onshore, Mobile, Power Generation, Marine, Manufacturing, Process, and other hydraulic applications.",
    ...servicesConfig.PipelineFlusing,
  },
  {
    id: 4,
    title: "Environment Services",
    description:
      "SP International Services' ENV division provides water, soil, and air treatment solutions for industrial, oil & gas, construction, and municipal sectors. They design, install, and operate treatment plants, including clarifiers, reverse osmosis, and air scrubbers. Equipment is available for lease or sale, tailored to client needs.",
    ...servicesConfig.EnvServices,
  },
  {
    id: 5,
    title: "Refiners Oil & Gas",
    description:
      "SP International Services uses advanced flushing methods to clean piping systems and reservoir tanks in compressors, turbines, pumps, and generators. High-velocity, turbulent flow flushing with microfiltration effectively removes contaminated lubricating oil, a major cause of bearing damage. Stainless steel systems are degreased before flushing, while carbon steel systems receive chemical cleaning. Techniques like pneumatic vibrators and nitrogen injection aid debris removal, ensuring the system meets strict particle count standards for lubricating, seal, and hydraulic oils.",
    ...servicesConfig.oilandgasServices,
  },
  {
    id: 6,
    title: "Chemical & Process",
    description:
      "SP International Services uses advanced flushing methods to clean piping systems and reservoir tanks in compressors, turbines, pumps, and generators. High-velocity, turbulent flow flushing with microfiltration effectively removes contaminated lubricating oil, a major cause of bearing damage. Stainless steel systems are degreased before flushing, while carbon steel systems receive chemical cleaning. Techniques like pneumatic vibrators and nitrogen injection aid debris removal, ensuring the system meets strict particle count standards for lubricating, seal, and hydraulic oils.",
    ...servicesConfig.chemicalServices,
  },
  {
    id: 7,
    title: "Water & Waste Water",
    description:
      "Water and wastewater services play a vital role in managing the treatment and disposal of water resources in industrial operations. These services help industries comply with environmental regulations, protect ecosystems, and ensure the efficient reuse or disposal of wastewater, all while minimizing operational downtime and environmental impact.",
    ...servicesConfig.waterandWasteServices,
  },
];
