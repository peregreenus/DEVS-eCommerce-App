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
      <h3>Profiles</h3>
      <div className={styles.profilePage}>
        <div className={styles.profileMenu}>
          <div
            role="presentation"
            key="Profile"
            className={`${styles.profileTabsItem} ${activeTab === 0 ? styles.profileTabActive : ''}`}
            onClick={() => tabsToggle(0)}>
            Profile
          </div>
          <div
            role="presentation"
            key="Shipping Addresses"
            className={`${styles.profileTabsItem} ${activeTab === 1 ? styles.profileTabActive : ''}`}
            onClick={() => tabsToggle(1)}>
            Shipping Addresses
          </div>
          <div
            role="presentation"
            key="Billing Addresses"
            className={`${styles.profileTabsItem} ${activeTab === 2 ? styles.profileTabActive : ''}`}
            onClick={() => tabsToggle(2)}>
            Billing Addresses
          </div>
        </div>
        <div className={styles.contentProfile}>
          {activeTab === 0 && (
            <ProfileTabContent
              firstName={profileData?.firstName}
              lastName={profileData?.lastName}
              email={profileData?.email}
              password={profileData?.password}
            />
          )}
          {activeTab === 1 && (
            <ShippingTabContent
              addresses={profileData?.addresses}
              shippingAddressIds={profileData?.shippingAddressIds}
            />
          )}
          {activeTab === 2 && (
            <BillingTabContent
              addresses={profileData?.addresses}
              billingAddressIds={profileData?.billingAddressIds}
            />
          )}
        </div>
      </div>

      {/* <ProfileTabContent activeTab={activeTab} profileData={profileData} /> */}
      <Footer />
    </>
  );
}
