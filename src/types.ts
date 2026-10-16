export type ServiceCategory = 'remote' | 'onsite' | 'network' | 'cloud';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tag: string;
  iconName: string;
  responseTime: string;
  startingPrice: string;
  features: string[];
}

export interface NerdExpert {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  specialties: string[];
  solvedTickets: number;
  rating: number;
  status: 'Online' | 'Dispatched' | 'Available in 10m';
}

export interface CityHub {
  name: string;
  province: string;
  areas: string[];
  avgOnSiteTime: string;
  activeNerds: number;
  status: 'High Availability' | 'Normal';
}

export interface TerminalOutputLine {
  id: string;
  text: string;
  type: 'system' | 'command' | 'success' | 'warning' | 'info' | 'nerd';
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
  tag: string;
  problemSolved: string;
}

export interface BookingFormData {
  serviceType: 'remote' | 'onsite';
  issueType: string;
  urgency: 'asap' | 'today' | 'scheduled';
  city: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}
