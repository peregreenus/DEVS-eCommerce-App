export type RegistrationFieldsType = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  country: string;
  city: string;
  postalCode: string;
  street: string;
  password: string;
  confirmPassword: string;
};

export interface CustomerAddresses {
  country: string;
  streetName: string;
  postalCode: string;
  city: string;
}

export interface CustomerRegistration {
  // key?: string;
  // customerNumber: string;
  // externalId: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  // middleName: string;
  // title: string;
  // anonymousCart: string;
  // anonymousId: string;
  dateOfBirth?: string;
  // companyName: string;
  // vatId: string;
  addresses?: CustomerAddresses[];
  // defaultShippingAddress: number;
  // shippingAddresses: Array<number>;
  // defaultBillingAddress: number;
  // billingAddresses: Array<number>;
  // isEmailVerified: boolean;
  // customerGroup: Array<string>;
  // locale: string;
  // salutation: string;
  // stores: Array<string>;
  // authenticationMode: string;
  // createdAt: Date;
  // lastModifiedAt: Date;
}

export enum Country {
  AT = 'Austria',
  BY = 'Belarus',
  DE = 'Germany',
  RU = 'Russia',
  UA = 'Ukraine',
  US = 'United States'
}
