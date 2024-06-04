export interface CustomerAddresses {
  id?: string;
  key?: string;
  country: string;
  streetName: string;
  postalCode: string;
  city: string;
}

export interface CostumerUpdatePassword {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface CustomerActions {
  email?: string;
  action?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  addressId?: string;
  address?: CustomerAddresses;
}

export interface Customer {
  version?: number;
  key?: string;
  customerNumber?: string;
  externalId?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
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
  actions?: CustomerActions[];
  currentPassword?: string;
  newPassword?: string;
}

export interface CustomerResponse {
  email?: string;
  customer?: Customer;
  errors?: [];
  message?: string;
  statusCode?: number;
  version?: string;
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
  dateOfBirth?: string;
  isEmailVerified?: boolean;
  stores?: Array<string>;
  authenticationMode?: string;
  defaultBillingAddressId?: string;
  defaultShippingAddressId?: string;
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
  dateOfBirth?: string;
  isEmailVerified?: boolean;
  stores?: Array<string>;
  authenticationMode?: string;
  defaultBillingAddressId?: string;
  defaultShippingAddressId?: string;
}
