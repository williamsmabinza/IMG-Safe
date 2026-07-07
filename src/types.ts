export interface ValueItem {
  name: string;
  description: string;
  iconName: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
  colorClass: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  iconName: string;
  items: string[];
}

export interface SectorItem {
  name: string;
  iconName: string;
  description: string;
}

export interface ClientItem {
  name: string;
  logoText: string;
  bgColor: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  serviceType: string;
  message: string;
  date: string;
  status: 'new' | 'replied' | 'archived';
}
