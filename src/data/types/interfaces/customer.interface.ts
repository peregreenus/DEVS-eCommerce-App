export interface CustomerAddresses {
  id?: string;
  key: string;
  country: string;
  streetName: string;
  postalCode: string;
  city: string;
}

export interface Customer {
  key?: string;
  customerNumber?: string;
  externalId?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  title?: string;
  anonymousCart?: string;
  anonymousId?: string;
  dateOfBirth?: string;
  companyName?: string;
  vatId?: string;
  addresses?: CustomerAddresses[];
  defaultShippingAddress?: number;
  shippingAddresses?: Array<number>;
  defaultBillingAddress?: number;
  billingAddresses?: Array<number>;
  isEmailVerified?: boolean;
  customerGroup?: Array<string>;
  locale?: string;
  salutation?: string;
  stores?: Array<string>;
  authenticationMode?: string;
  createdAt?: Date;
  lastModifiedAt?: Date;
}

export interface CustomerResponse {
  customer?: Customer;
  errors?: [];
  message?: string;
  statusCode?: number;
}

export interface CustomerProfileResponse {
  id?: string;
  version?: number;
  createdAt?: Date;
  lastModifiedAt?: Date;
  lastModifiedBy?: {
    clientId?: string;
    isPlatformClient?: boolean;
  };
  createdBy?: {
    clientId?: string;
    isPlatformClient?: boolean;
  };
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  addresses?: CustomerAddresses[];
  shippingAddressIds?: string[];
  billingAddressIds?: string[];
  isEmailVerified?: boolean;
  stores?: Array<string>;
  authenticationMode?: string;
}
