/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { MainProps } from '../../../data/types/main-props';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import * as styles from './profile.module.css';
import ProfileTabContent from '../../components/profile/profile-content';
import getCustomerProfile from '../../../data/api/customerProfile';
import { CustomerProfileResponse } from '../../../data/types/interfaces/customer.interface';
import ShippingTabContent from '../../components/profile/profile-shipping';
import BillingTabContent from '../../components/profile/profile-billing';

const initialStateProfile = {
  firstName: '',
  lastName: '',
  email: '',
  addresses: [
    {
      key: '',
      country: '',
      streetName: '',
      postalCode: '',
      city: ''
    }
  ],
  shippingAddressIds: [''],
  billingAddressIds: [''],
  password: ''
};

export default function Profile({ state, setState }: MainProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [profileData, setProfileData] = useState<CustomerProfileResponse>(initialStateProfile);

  function tabsToggle(index: number) {
    setActiveTab(index);
  }

  useEffect(() => {
    async function getCustomerInfo() {
      const fetchedInfo = await getCustomerProfile(`${localStorage.getItem('bearerToken')}`);
      console.log(fetchedInfo);
      setProfileData({ ...fetchedInfo });
    }
    getCustomerInfo();
  }, []);
  return (
    <>
      <Header state={state} setState={setState} />
      <div className={styles.profilePage}>
        <h3>Profiles</h3>
        <div className={styles.container}>
          <div className={styles.menu}>
            <button
              type="button"
              key="Profile"
              className={`${styles.tabsItem} ${activeTab === 0 ? styles.tabActive : ''}`}
              onClick={() => tabsToggle(0)}>
              Profile
            </button>
            <button
              type="button"
              key="Shipping Addresses"
              className={`${styles.tabsItem} ${activeTab === 1 ? styles.tabActive : ''}`}
              onClick={() => tabsToggle(1)}>
              Shipping Addresses
            </button>
            <button
              type="button"
              key="Billing Addresses"
              className={`${styles.tabsItem} ${activeTab === 2 ? styles.tabActive : ''}`}
              onClick={() => tabsToggle(2)}>
              Billing Addresses
            </button>
          </div>
          <div className={styles.content}>
            {activeTab === 0 && (
              <ProfileTabContent
                firstName={profileData?.firstName}
                dateOfBirth={profileData?.dateOfBirth}
                lastName={profileData?.lastName}
                email={profileData?.email}
                password={profileData?.password}
              />
            )}
            {activeTab === 1 && (
              <ShippingTabContent
                addresses={profileData?.addresses}
                shippingAddressIds={profileData?.shippingAddressIds}
                defaultShippingAddressId={profileData?.defaultShippingAddressId}
              />
            )}
            {activeTab === 2 && (
              <BillingTabContent
                addresses={profileData?.addresses}
                billingAddressIds={profileData?.billingAddressIds}
                defaultBillingAddressId={profileData?.defaultBillingAddressId}
              />
            )}
          </div>
        </div>
      </div>

      {/* <ProfileTabContent activeTab={activeTab} profileData={profileData} /> */}
      <Footer />
    </>
  );
}
