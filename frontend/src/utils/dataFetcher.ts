// src/utils/dataFetcher.ts
import mockData from "../mock.json";
import { Organization } from "../types";

export const fetchOrganizationByVoen = (voen: string): Organization | null => {
  const org = (mockData as Organization[]).find((o) => o.voen_id === voen);
  return org || null;
};

export const fetchOrganizationsByFin = (fin: string): Organization[] => {
  return (mockData as Organization[]).filter((o) => o.fin === fin);
};