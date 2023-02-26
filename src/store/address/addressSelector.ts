interface Address {
  id: string;
  apartmentNumber: string;
  commune: string;
  district: string;
  conscious: string;
  createdAt: string;
  updatedAt: string;
}
interface AddressType {
  loading: boolean;
  address: [Address];
}

export const getAddressStore = (state: { address: AddressType }) =>
  state.address;
