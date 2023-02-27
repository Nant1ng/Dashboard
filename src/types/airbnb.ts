export interface NewAirbnbType {
  title?: string;
  description?: string;
  feature?: string;
  location?: string;
  stars?: string;
  country?: string;
  region?: string;
  review?: string;
  totalPrice?: string;
  perNight?: string;
  id?: string;
}

export interface AddAirbnbType {
  title: string;
  description: string;
  feature: string;
  location: string;
  stars: string;
  country: string;
  region: string;
  review: string;
  totalPrice: string;
  perNight: string;
}
