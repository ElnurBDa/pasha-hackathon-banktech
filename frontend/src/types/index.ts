export interface MainInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  registration_date: string;
}

export interface Organization {
  voen_id: string;
  main_info: MainInfo;
  fin: string;
  owner: string;
  reason: string;
  score: number;
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  currency: string;
  status: string;
  type: string;
}