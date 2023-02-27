import { ServiceTypes } from "./serviceTypeSelector";

interface Services {
  id: string;
  name: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  serviceType: ServiceTypes
}

interface ServicesInit {
  loading: boolean,
  filter: {
    docs: Services[]
  },
  services: {
    docs: Services[],
    totalPages: number,
    totalDocs: number,
    page: number
  }
}

export const getServicesStore = (state: { services: ServicesInit }) => state.services;