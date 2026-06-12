export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderData {
  logoUrl: string;
  logoAlt: string;
  links: NavLink[];
  buttonText: string;
  buttonHref: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  videoUrl: string;
  buttonText: string;
  buttonHref: string;
}

export interface SectionBlock {
  title: string;
  description: string;
  descriptionExtended?: string;
  buttonText: string;
  buttonHref: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ProductShowcaseData {
  title: string;
  description: string;
  specs: string[];
  buttonText: string;
  buttonHref: string;
  videoPlaceholderText: string;
  centerTitle: string;
  centerDescription: string;
  centerLinkText: string;
  centerLinkHref: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  logoUrl: string;
  logoAlt: string;
  description: string;
  quickLinks: FooterLink[];
  therapies: FooterLink[];
  products: FooterLink[];
  contact: {
    companyName: string;
    title: string;
    address: string[];
    phones: string[];
    email: string;
  };
  bottom: {
    revision: string;
    copyright: string;
    credits: string;
  };
}


export interface TherapyItem {
  title: string;
  imageUrl: string;
  imageAlt: string;
}

export interface TherapiesData {
  title: string;
  description: string;
  items: TherapyItem[];
}

export interface ParenteralNutritionData {
  title: string;
  paragraphs: string[];
  buttonText: string;
  buttonHref: string;
  videoPlaceholderText: string;
}

export interface MicrelCareFeature {
  title: string;
  description: string;
  iconName: "reporting" | "feedback" | "pressure" | "safety" | "infusion monitoring" | "patient portal" | "alarm" | "fleet" | "documenting";
}

export interface MicrelCareTab {
  id: string;
  label: string;
  title: string;
  items: MicrelCareFeature[];
  buttonText: string;
  buttonHref: string;
}

export interface AmbulatoryProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
  linkHref: string;
  category: "pumps" | "sets" | "syringe";
}

export interface AmbulatoryInfusionData {
  title: string;
  description: string;
  tabLabels: string[];
  products: AmbulatoryProduct[];
}

export interface PartnerCard {
  label: string;
  iconName: "pharmaceutical" | "healthcare" | "research" | "device" | "distribution";
}

export interface NewsCard {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  linkText: string;
  linkHref: string;
}

export interface NewsInsightsData {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  cards: NewsCard[];
}

