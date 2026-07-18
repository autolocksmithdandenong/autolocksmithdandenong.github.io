export type FAQ = {
  question: string;
  answer: string;
};

export type IconKey =
  | 'key'
  | 'car'
  | 'car-key'
  | 'lost-key'
  | 'mobile'
  | 'siren'
  | 'clock'
  | 'chip'
  | 'remote'
  | 'fob'
  | 'spare-key'
  | 'duplicate'
  | 'lockout'
  | 'broken-key'
  | 'ignition'
  | 'motorcycle'
  | 'map-pin'
  | 'shield'
  | 'phone'
  | 'mail';

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  icon: IconKey;
  imageAlt: string;
  situations: string[];
  process: string[];
  callerInfo: string[];
  relatedServices: string[];
  relatedAreas: string[];
  relatedArticles: string[];
  faqs: FAQ[];
  category: 'car' | 'motorcycle' | 'general';
  featured?: boolean;
};

export type ServiceArea = {
  slug: string;
  name: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  carKeyReplacement: string;
  lostCarKeys: string;
  vehicleLockout: string;
  motorcycleLocksmith: string;
  nearby: string[];
  relatedServices: string[];
  relatedArticles: string[];
  faqs: FAQ[];
  featured?: boolean;
};
