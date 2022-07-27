import { ServiceTypes } from "./serviceTypeSelector";

interface Services {
  _id: string;
  name: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  serviceType: ServiceTypes
}

interface ServicesInit {
  loading: boolean,
  filter: Services[],
  services: Services[]
}

export const getServicesStore = (state: { services: ServicesInit }) => state.services;