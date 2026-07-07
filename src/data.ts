import { ValueItem, ServiceCategory, ProductCategory, SectorItem, ClientItem } from './types';

export const companyDetails = {
  name: "IMG Safe",
  fullName: "Incident Management Global",
  tagline: "Be safe with us",
  aboutSummary: "At IMG Safe, our best feature is our global team of highly professional and knowledgeable individuals, who, through their hard work, passion, dedication and perceptiveness, continuously drive our company forward. We are extremely proud to be able to advise our clients in the key process of managing all their operations in a safe way.",
  aboutLong: "We believe that IMG Safe is able to offer the best blend of in-depth sector expertise, a proven ability to quickly comprehend the client's core business and their needs, as well as promptness and agility in conceiving high-end tailor-made solutions. We put our client's interest ahead of our own, and we permanently keep in consideration their comments, expectations and critics, to adapt and improve our company accordingly. We are very much about building solid relationships over the years with world-renowned companies in a wide variety of sectors.",
  strategy: "Sustainable success requires the flexibility to adapt to a changing environment. Diversity shows the way for flexibility. Research and Development is the process that ensures an enterprise has the right information to make the right choices as its market evolves.",
  mission: "Our Mission is to be the most successful consulting company in a world, abiding by our principles that consist of the Knowledge, the Effectiveness, the Reliability and the Integrity.",
  missionPoints: [
    "Knowledge: Application of most modern technology for the development of pioneering services, optimal quality and capability of flexible adaptation and development of each need of customer.",
    "Effectiveness: Accompanies each project that we undertake, with the realization of the objectives of our customer.",
    "Reliability & Integrity: Constitute the main axes of our business culture."
  ],
  vision: "The growth and the operation of the company are found in the basic corporate principle: 'quality, effectiveness and adaptability to the needs of market and technological evolutions.'",
  sustainability: "IMG Safe recognises the importance of economic and social development, and we contribute to its realisation in many ways. In this context we have a responsibility to encourage and support development that can be sustained environmentally, socially and economically for the lasting benefit of those involved.",
  healthSafety: "We place the highest importance on safety and are committed to ensuring that all work by our staff is carried out in a safe manner and protects everything around us.",
  contact: {
    address: "Plot no. 4, Block no. 36, Kinondoni Biafra, Kawawa Road",
    cityCountry: "Dar Es Salaam, Tanzania",
    poBox: "P. O. Box 6504",
    phones: ["+255 786 205 254", "+255 762 695 044", "+255 766 950 077"],
    whatsapps: ["+255 786 205 254", "+255 713 904 813"],
    email: "imgsafeltd@gmail.com"
  }
};

export const coreValues: ValueItem[] = [
  {
    name: "Humility",
    description: "Listening before advising, placing clients' and safety needs above our own, and constantly adapting based on feedback.",
    iconName: "Compass"
  },
  {
    name: "Courage",
    description: "Taking bold steps to ensure safety standards, managing hazardous incidents with composure, and advising honestly even on hard truths.",
    iconName: "ShieldAlert"
  },
  {
    name: "Humour",
    description: "Maintaining a positive, friendly, and resilient work environment that fosters high morale and cohesive team communication.",
    iconName: "Smile"
  },
  {
    name: "Continue Learning",
    description: "Adapting to technological evolutions and market developments to constantly expand our specialized know-how and capabilities.",
    iconName: "GraduationCap"
  },
  {
    name: "Diversity",
    description: "Fostering flexibility and wide-ranging skills, drawing from diverse international backgrounds to enrich problem-solving.",
    iconName: "Users"
  },
  {
    name: "Sustainability",
    description: "Promoting social, environmental, and economic growth that is built to endure, ensuring a safe tomorrow.",
    iconName: "Leaf"
  }
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "consulting",
    title: "Consulting and Advice",
    description: "Unleash hidden organizational potential and empower a safe, creative, and highly resilient workforce.",
    iconName: "Briefcase",
    colorClass: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
    details: [
      "Strategic business safety consulting and gap analysis",
      "Incident investigation and hazard vulnerability assessments",
      "Custom compliance audits against national and international standards",
      "Executive level advisory for operational safety and risk management",
      "Empowerment strategies for technical and high-risk team performance"
    ]
  },
  {
    id: "training",
    title: "Training and Development",
    description: "Wide-range skills transfer and practical capacity building in oneself or others, focused on business subjects and safety.",
    iconName: "GraduationCap",
    colorClass: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    details: [
      "Health, Environment, and Safety (HES) certification training",
      "Incident command systems and crisis management programs",
      "Technical skills instruction for field operators and protective crews",
      "Continuous corporate learning plans and competency reviews",
      "Tailor-made programs designed around company specific hazards"
    ]
  },
  {
    id: "facilitation",
    title: "Facilitation and Workshop",
    description: "Interactive learning to introduce new processes, inspire collaboration, and allow teams to test new methods in a secure space.",
    iconName: "Presentation",
    colorClass: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    details: [
      "Interactive risk mapping and risk prioritization workshops",
      "Hands-on equipment simulation and incident responses",
      "Team alignment and safe failure exploration sessions",
      "Decision-making strategy workshops for management teams",
      "Process implementation workshops with customized material"
    ]
  },
  {
    id: "trading",
    title: "Trading & Equipment Provision",
    description: "Buying and selling a comprehensive range of premium-quality safety tools, protective gears, security systems, and hardware.",
    iconName: "ShoppingCart",
    colorClass: "from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30",
    details: [
      "Hiring or sourcing premium global certified equipment",
      "Dedicated client consultation on product selection",
      "Full technical support for setup, installation and device onboarding",
      "Supply chain fulfillment adhering to strict international standards",
      "Continuous tracking of equipment durability and warranty management"
    ]
  },
  {
    id: "logistics",
    title: "Logistics and Transport",
    description: "Reliable and high-safety transport of local goods, bulk fuel, specialized heavy machinery, and construction transport.",
    iconName: "Truck",
    colorClass: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
    details: [
      "Bulk fuel logistics and high-risk cargo transportation",
      "Heavy duty excavator work and site preparation logistics",
      "Onsite delivery of materials, safety kits, and equipment on demand",
      "Highly trained personnel specializing in secure hazardous transport",
      "Integrated fleet tracking, custom routing, and incident contingency"
    ]
  }
];

export const productCategories: ProductCategory[] = [
  {
    id: "safety-gears",
    name: "Safety Tools & Protective Gears",
    iconName: "HardHat",
    items: [
      "Eye and Face Protection (High-impact goggles, face shields)",
      "Hand Protection (Chemical resistant, high-heat, heavy-duty gloves)",
      "Head Protection (Industrial hard hats, climbing helmets)",
      "Hearing Protection (Noise-canceling earmuffs, soft earplugs)",
      "Foot Protection (Steel-toe boots, slip-resistant footwear)",
      "Body Protection (Flame-retardant coveralls, high-visibility vests)",
      "Respiratory Protection (N95 respirators, gas masks, filters)",
      "Fall Protection (Full body harnesses, shock-absorbing lanyards)",
      "Fire Fighting Equipments (Extinguishers, fire blankets, hoses)",
      "First Aid Kit (Fully stocked trauma bags, commercial response cabinets)"
    ]
  },
  {
    id: "security-systems",
    name: "Security & Surveillance Systems",
    iconName: "Shield",
    items: [
      "High-Definition CCTV & IP Cameras (Night vision, wide angle)",
      "Intruder Alarm Systems (Motion sensors, window/door contacts)",
      "Fire Alarm Systems (Smoke/heat detectors, sirens, pull stations)",
      "Access Control (Biometrics, card readers, turnstiles, software)",
      "Electric Fences (Energizers, alarms, warning signposts)"
    ]
  },
  {
    id: "ict-hardware",
    name: "ICT Equipments & Software",
    iconName: "Cpu",
    items: [
      "Enterprise Computers, Laptops & secure accessories",
      "Heavy-duty Office Printers & multi-function devices",
      "Ink Jets & premium toner supplies",
      "High-speed Scanners & document managers",
      "Corporate & Custom Software Programs for management"
    ]
  },
  {
    id: "building-plumbing",
    name: "Hardware & Plumbing Equipments",
    iconName: "Wrench",
    items: [
      "Building Material Hardware (Saws, drills, hand/power tools)",
      "Plumbing Materials (High-grade pipes, valves, fittings)",
      "General Plumbing Equipments & installation assemblies"
    ]
  },
  {
    id: "fuel-special",
    name: "Fuel, Electrical & Solar Systems",
    iconName: "Sun",
    items: [
      "Electronic Line Lead Detectors & leak management",
      "Solenoid Valves for flow meters & pipeline control",
      "Heavy-duty Pump Nozzles & high-flow petroleum gear",
      "Deep-cycle Industrial Batteries & backup power systems",
      "Premium Solar Panels & grid controllers"
    ]
  },
  {
    id: "uniforms-apparel",
    name: "Professional Uniforms",
    iconName: "Shirt",
    items: [
      "Education Institutions (Clean, school-specific matching attire)",
      "Aviation & Aircrew (Elegant high-standard uniforms)",
      "Security Guards (Tactical, standard duty uniforms)",
      "Corporate (Sleek professional business wear)",
      "Safety Products (High visibility, durable industrial options)",
      "Sports, Healthcare (Scrubs, doctor coats), & Hospitality (Chef, server wear)"
    ]
  },
  {
    id: "decor-printing",
    name: "Office Decor, Design & Printing",
    iconName: "Printer",
    items: [
      "Home & Office Decor (Chairs, smart desks, custom organizers)",
      "High-impact Graphic Design and Large Format Printing",
      "Marketing Banners, brochures, business cards, and display stands"
    ]
  },
  {
    id: "heavy-machinery",
    name: "Machine, Industrial & Garage Tools",
    iconName: "Cog",
    items: [
      "Professional Hand & Power Tools",
      "Garage & Heavy Machinery equipment",
      "Car Wash Tools, pressure washers, and air systems",
      "Industrial generators & water pumps"
    ]
  }
];

export const keySectors: SectorItem[] = [
  { name: "Power, Energy & Utilities", iconName: "Zap", description: "Securing power plants, substations, and local utility distribution grids." },
  { name: "Financial Institutions", iconName: "Building2", description: "Risk advisory and critical infrastructure security for banks and trading hubs." },
  { name: "Mining and Resources", iconName: "Gem", description: "Providing robust safety gear, training, and heavy-cargo logistics for mines." },
  { name: "Industrial Manufacturing", iconName: "Factory", description: "Facilitating worker safety, supply chains, and emergency response plans." },
  { name: "Infrastructure & Construction", iconName: "Hammer", description: "On-site protective safety tools, building hardware, and secure deliveries." },
  { name: "Telecommunications", iconName: "Wifi", description: "Securing signal towers, network gear, and technical software installation." },
  { name: "Engineering & Technical", iconName: "Cpu", description: "Agile consulting, state-of-the-art tools, and mechanical troubleshooting." },
  { name: "Transportation & Logistics", iconName: "Truck", description: "Managing hazardous cargo, bulk fuel transport, and fleet compliance." },
  { name: "Education & Schools", iconName: "School", description: "Supplying student uniforms, safety audits, and emergency preparation." },
  { name: "Health & Healthcare", iconName: "HeartPulse", description: "Hospitality uniforms, clinical protection gear, and bio-safety programs." },
  { name: "Hotels & Hospitality", iconName: "Hotel", description: "Uniforms, event safety management, and secure access systems." },
  { name: "Agriculture", iconName: "Leaf", description: "Sourcing utility tools, safety wear, and remote farm transportation." },
  { name: "Government & NGOs", iconName: "Landmark", description: "Skills transfer, public safety initiatives, and policy advisory." },
  { name: "Real Estate", iconName: "Home", description: "CCTV, intruder alerts, smart security fencing, and maintenance." }
];

export const clientList: ClientItem[] = [
  { name: "Tristar", logoText: "TRISTAR", bgColor: "bg-red-950/40 text-red-400 border-red-500/20" },
  { name: "Primefuels", logoText: "PRIMEFUELS", bgColor: "bg-blue-950/40 text-blue-400 border-blue-500/20" },
  { name: "Bakhresa Group", logoText: "BAKHRESA GROUP", bgColor: "bg-orange-950/40 text-orange-400 border-orange-500/20" },
  { name: "TPC Limited", logoText: "TPC LIMITED", bgColor: "bg-emerald-950/40 text-emerald-400 border-emerald-500/20" },
  { name: "Tanzania Polisi", logoText: "POLISI TZ", bgColor: "bg-indigo-950/40 text-indigo-400 border-indigo-500/20" },
  { name: "Bank of Tanzania", logoText: "BANK OF TZ", bgColor: "bg-yellow-950/40 text-yellow-500 border-yellow-500/20" },
  { name: "Tanesco", logoText: "TANESCO", bgColor: "bg-green-950/40 text-green-400 border-green-500/20" },
  { name: "AngloGold Ashanti", logoText: "ANGLOGOLD", bgColor: "bg-amber-950/40 text-amber-400 border-amber-500/20" },
  { name: "Simba Logistics", logoText: "SIMBA LOGISTICS", bgColor: "bg-red-950/40 text-red-400 border-red-500/20" },
  { name: "Puma Energy", logoText: "PUMA ENERGY", bgColor: "bg-emerald-950/40 text-emerald-300 border-emerald-500/20" },
  { name: "Jambo", logoText: "JAMBO GROUP", bgColor: "bg-rose-950/40 text-rose-400 border-rose-500/20" },
  { name: "Siginon Group", logoText: "SIGINON GROUP", bgColor: "bg-sky-950/40 text-sky-400 border-sky-500/20" },
  { name: "Bhanji Transport", logoText: "BHANJI", bgColor: "bg-slate-950/40 text-slate-300 border-slate-500/20" },
  { name: "CSI Electrical", logoText: "CSI ELECTRICAL", bgColor: "bg-cyan-950/40 text-cyan-400 border-cyan-500/20" },
  { name: "Ukod International", logoText: "UKOD INT", bgColor: "bg-violet-950/40 text-violet-400 border-violet-500/20" },
  { name: "Panafrican Energy", logoText: "PANAFRICAN", bgColor: "bg-teal-950/40 text-teal-400 border-teal-500/20" },
  { name: "Mbezi Garden Hotel", logoText: "MBEZI GARDEN", bgColor: "bg-lime-950/40 text-lime-400 border-lime-500/20" },
  { name: "APC Hotel & Conference", logoText: "APC HOTEL", bgColor: "bg-fuchsia-950/40 text-fuchsia-400 border-fuchsia-500/20" }
];
