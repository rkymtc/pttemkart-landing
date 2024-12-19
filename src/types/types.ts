
export interface BrandsSectionProps {
  title?: string;
  description?: { text: string; highlight?: boolean }[]; // Dinamik description parçaları
  brands: { imageUrl: string }[];
  bgColor?: string; id?:string;
}

export interface DarkSectionProps {
  text: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export interface FeaturesSectionProps {
  title?: string; id?:string;
  description?: { text: string; highlight?: boolean }[];
  features: { icon: string; title: string; description: string }[];
}
export interface FaqSectionProps {
  title?: string; 
  description?: { text: string; highlight?: boolean }[];
}

export interface DownloadSectionProps {
  title?: string;
  description?: { text: string; highlight?: boolean }[];
}

export interface CampaignSectionProps {
  title?: string;
  description?: { text: string; highlight?: boolean }[];
  campaigns: { imageUrl: string; title: string; description: string }[];
  bgColor?: string; 
}

export interface ReusableSectionProps {
  title?: string;
  description?: { text: string; highlight?: boolean }[];
  bgColor?: string;
  children: React.ReactNode;
}

export interface CardSectionProps {
  title: string;
  description: string;
  points: { icon: string; text: string }[];
  imageUrl: string; id:string
}