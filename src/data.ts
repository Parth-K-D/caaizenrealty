import { Plot, Hotspot, TeamMember, Quote, Amenity } from "./types";

export const PLOTS_DATA: Plot[] = [
  {
    id: "plot-1",
    name: "Estate Plot 08 — Sunset Ridge",
    size: "1.5 Acres",
    facing: "West-Facing Panoramic",
    status: "Available",
    basePrice: 22000000, // ₹2.2 Cr
    features: ["Sunset view tier", "Ancient banyan circle", "100% organic fruit trees border", "High altitude edge"],
    altitude: "920m above sea level"
  },
  {
    id: "plot-2",
    name: "Estate Plot 12 — Lake Reserve",
    size: "2.2 Acres",
    facing: "North-Facing Lakefront",
    status: "Reserved",
    basePrice: 35000000, // ₹3.5 Cr
    features: ["Private stream access", "Gently sloping meadow", "Curated wild olive groves", "Zero noise perimeter"],
    altitude: "895m above sea level"
  },
  {
    id: "plot-3",
    name: "Estate Plot 15 — Orchard Sanctuary",
    size: "1.8 Acres",
    facing: "East-Facing Sunrise",
    status: "Available",
    basePrice: 27000000, // ₹2.7 Cr
    features: ["Pre-planted mango orchard", "Private rain bioswale", "Rammed-earth footing layout", "Direct trail access"],
    altitude: "905m above sea level"
  },
  {
    id: "plot-4",
    name: "Estate Plot 19 — Forest Canopy Dome",
    size: "3.2 Acres",
    facing: "360° Forest Enclave",
    status: "Premium Option",
    basePrice: 48000000, // ₹4.8 Cr
    features: ["Surrounded by dense reserve", "Natural spring pond corner", "Maximum security zone", "Bespoke off-grid setup"],
    altitude: "940m above sea level"
  }
];

export const RETREAT_HOTSPOTS: Hotspot[] = [
  {
    id: "hotspot-lake",
    name: "The Bio-Retention Lake",
    x: 25,
    y: 40,
    description: "Central freshwater reservoir feeding the micro-irrigation systems.",
    icon: "droplet",
    details: "Using natural reed-beds and clay lining, this lake stores up to 4 million liters of monsoon runoff and maintains a thriving aquatic ecosystem."
  },
  {
    id: "hotspot-clubhouse",
    name: "The Wellness Clubhouse",
    x: 48,
    y: 52,
    description: "Constructed with low-carbon rammed earth and reclaimed timber.",
    icon: "home",
    details: "Features a clean thermal geothermal air system, active solar grid, negative-edge natural pool, and curated yoga and wellness decks overlooking the hills."
  },
  {
    id: "hotspot-orchard",
    name: "Regenerative Agroforestry Orchard",
    x: 72,
    y: 28,
    description: "Multi-layered organic food forest with native fruit species.",
    icon: "leaf",
    details: "Home to over 800 premium varieties of Alphonso mangoes, avocados, figs, and sandalwood managed using natural permaculture and zero dry-run pesticide protocols."
  },
  {
    id: "hotspot-cabins",
    name: "Eco-Cabin Retreat Enclaves",
    x: 82,
    y: 68,
    description: "Suspended low-impact timber pods for trial stays.",
    icon: "shield",
    details: "Equipped with fully self-contained gray-water cycling, dry bio-toilets, and integrated off-grid solar generators to simulate full off-grid estate ownership."
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: "am-1",
    title: "Eco-Design Wellness Club",
    description: "Constructed with sustainable rammed earth, offering wellness therapy, natural pools, and sunset decks.",
    details: "Our central facility showcases sustainable construction, absolute thermal balance, active solar systems, and 100% zero-waste management.",
    bgClass: "from-emerald-950/80 to-stone-900/90"
  },
  {
    id: "am-2",
    title: "Curated Agroforestry",
    description: "Over 20+ varieties of hand-planted organic fruit orchards managed by expert resident permaculturists.",
    details: "Your estate comes pre-integrated with a portion of our shared food forest, featuring mango, avocado, lemon, and jackfruit trees tailored for soil optimization.",
    bgClass: "from-stone-950/80 to-emerald-950/90"
  },
  {
    id: "am-3",
    title: "Off-Grid Smart Solutions",
    description: "Integrated state-of-the-art micro-grids, storm-water bio-swales, and bio-gas systems.",
    details: "Our estates operate seamlessly with zero pressure on external civic grids, combining high-yield lithium backup arrays with rainwater harvest technology.",
    bgClass: "from-teal-950/80 to-stone-900/90"
  },
  {
    id: "am-4",
    title: "Nature Trails & Wildlife Corridor",
    description: "Dedicated re-wilded zones for forest bathing, continuous flora buffers, and zero motorized vehicle paths.",
    details: "We maintain 45% of our project area as a strictly protected conservancy. This fosters clean bird nesting grounds and continuous safe corridors for resident wildlife.",
    bgClass: "from-stone-900/80 to-neutral-900/90"
  }
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: "team-1",
    name: "Kailash Dubal",
    role: "Founder & Principal Visionary",
    bio: "",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAnNK9FZFLqhxfLeslJQd5RwyiFWfRkDmgfS3MlnEU-PyiAy9E3n3P8Y_hCc93mZSiNNheV4mgndLA8vbyDiKDP6Gb59SJJlZwhnoNjvuKMvIZIRYhIOnZnh-i4k5pUumRY5LCbqtsfXUbaLHycmfF_fIwjuxrmXq1A1tJpMB4Y-gs7_Cu7db-KH-Zd2a7u2mwcEwJ0JngxiKPJIcyM8KrKUYk0fW0bROS8nhLnJ_W9Ggex_6b5dwU-j7IBU8n0KHO2igkQWL_Rw4",
    specialty: "Low-impact design & biomimicry",
    quote: "True luxury is not about excess. It is the privilege of listening to pure silence inside a space that regenerates the ground beneath it."
  },
  {
    id: "team-2",
    name: "Suresh G",
    role: "Partner & Chief Engineer",
    bio: "Suresh G coordinates bespoke investment consultations, ensuring transparency in agricultural land conversions, multi-generational security, and clean legal transfers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX7qCBvoeWy84hYgkPUx90qMHVOvr7rmdHHj0DMQjNul_9_xYebiEZG4mjP9wGJ2mBXqKt_NxuZ33FKQT8V1AmD_d577oDYXPQsHgCuiihqFt_76dLpyQ63jUOZgY_aE0B7raSOhGDmtIL3HKiL7OTQMkQIxSkqqQ7CFeqG-gb0NYU9ZrdKjLaTSuYLMyAvil5BQ_TE5PwMWTuOYaVTjowlxn-bDLAdZDNqD80ehRBwzDvf1ZtnVgWs6jAldZeq2r-RspaKptdQLw",
    specialty: "Legal security & asset integration",
    quote: "Securing an estate at Caaizen is a legacy acquisition. It is a bulletproof wealth reserve that secures both your family and the natural ecosystem."
  },
  {
    id: "team-3",
    name: "Vadiraj",
    role: "Senior Advisor & Sales Head",
    bio: "",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX7qCBvoeWy84hYgkPUx90qMHVOvr7rmdHHj0DMQjNul_9_xYebiEZG4mjP9wGJ2mBXqKt_NxuZ33FKQT8V1AmD_d577oDYXPQsHgCuiihqFt_76dLpyQ63jUOZgY_aE0B7raSOhGDmtIL3HKiL7OTQMkQIxSkqqQ7CFeqG-gb0NYU9ZrdKjLaTSuYLMyAvil5BQ_TE5PwMWTuOYaVTjowlxn-bDLAdZDNqD80ehRBwzDvf1ZtnVgWs6jAldZeq2r-RspaKptdQLw",
    specialty: "Legal security & asset integration",
    quote: "Securing an estate at Caaizen is a legacy acquisition. It is a bulletproof wealth reserve that secures both your family and the natural ecosystem."
  },
    {
    id: "team-4",
    name: "Gnanesh",
    role: "Chief Architect",
    bio: "A native of Bangalore, Gnanesh has curated diverse native forest-replanting programs. He focuses on organic soil life micro-diversity and microclimate design.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsBs2Gmv85UI9uGyBxQeyst2vGedfZgWjVIlMSCbeSBpOiYMNUlRtrHUUduhK6jxlIfnfpzvYwyzXTXOaC-5R0pt-z_ATkkHd0S0j2JMraoxYXRxPzukCwQ5tNeF4cj7yqyCzpxx2cabB958INpi5_cTuLltOxaRhpNAmCUeWd49-q6mDA4NhGCSOFNttcbVmK-tMNa2tSIt_QCLP3dSxZ4AnjA-A1jBqpTDNDNDh1cWCoKB169aOylJ3f8Z0_e14cNUFF2c8P0TM",
    specialty: "Permaculture & Native Forest Re-wilding",
    quote: "We do not clear land. We consult the trees, observe the hydrological basins, and gracefully slip our dwellings between the forest lines."
  }
];

export const PHILOSOPHY_QUOTES: Quote[] = [
  {
    id: "q-1",
    text: "Architecture is not just building boxes. It is the respectful choreography of wood, stone, water, and sun in response to the native earth.",
    author: "Elias Thorne",
    role: "Founder, Caaizen Realty"
  },
  {
    id: "q-2",
    text: "Soil micro-diversity is the silent anchor of premium living. When you breathe in a clean agroforest estate, you are breathing in centuries of vitality.",
    author: "Amara Desai",
    role: "Chief Hydrologist & Designer"
  },
  {
    id: "q-3",
    text: "True sustainability cannot survive if it is an uncomfortable sacrifice. It must be an elevation of our sensory experience.",
    author: "Julian Reed",
    role: "Bespoke Land Integrator"
  }
];
