export interface PegaAddress {
  type: string;
  is_second: boolean;
  address1: string;
  address2?: string;
  city: string;
  zip: string;
  county: string;
  state: string;
  country: string;
}
