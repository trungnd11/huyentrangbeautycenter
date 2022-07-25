interface PhoneNumber {
  _id: string;
  phoneNumber: number;
  nameUser: string;
  position: string;
  createdAt: string;
  updatedAt: string;
}
interface PhoneNumberType {
  loading: boolean;
  phoneNumber: [PhoneNumber];
}

export const getPhoneStore = (state: { phoneNumber: PhoneNumberType }) =>
  state.phoneNumber;
