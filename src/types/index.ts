export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: number; // in m² or ft²
  imageUrl: string;
  badge?: string;
};

export type NavLink = {
  label: string;
  href: string;
};