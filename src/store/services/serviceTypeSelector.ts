export interface ServiceTypes {
  id: string;
  serviceType: string;
  image: string;
  description: string;
}

interface ServiceTypeInit {
  loading: boolean;
  serviceType: ServiceTypes[];
}

export const getServiceTypeStore = (state: { serviceType: ServiceTypeInit }) => state.serviceType;