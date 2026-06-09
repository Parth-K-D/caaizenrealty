export interface Plot {
  id: string;
  name: string;
  size: string; // e.g. "1.5 Acres"
  facing: string; // e.g. "East-Facing"
  status: "Available" | "Reserved" | "Premium Option";
  basePrice: number; // e.g. 18500000 (INR or USD/converted equivalent)
  features: string[];
  altitude: string;
}

export interface Hotspot {
  id: string;
  name: string;
  x: number; // percentage from left (0-100)
  y: number; // percentage from top (0-100)
  description: string;
  icon: string;
  details?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
  quote: string;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  role: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  details: string;
  bgClass: string;
}
