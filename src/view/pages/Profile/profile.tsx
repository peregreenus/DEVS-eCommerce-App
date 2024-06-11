/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { MainProps } from '../../../data/types/main-props';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import * as styles from './profile.module.css';
import ProfileTabContent from '../../components/profile/profile-content/profile-content';
import getCustomerProfile from '../../../data/api/profile/getProfile';
import { CustomerProfileResponse } from '../../../data/types/interfaces/customer.interface';
import AddressesTabContent from '../../components/profile/profile-addresses/profile-addresses';
import ChangePasswordTabContent from '../../components/profile/profile-password/profile-password';
import { setLSVersionProfileCustomer } from '../../../data/utils/setLS';
import Loader from '../../components/Loader/Loader';

export default function Profile({ state, setState }: MainProps) {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [profileData, setProfileData] = useState<CustomerProfileResponse>();
  const [update, setUpdate] = useState(false);

  function tabsToggle(index: number) {
    setActiveTab(index);
  }

  useEffect(() => {
    async function getCustomerInfo() {
      await getCustomerProfile(`${localStorage.getItem('bearerToken')}`)
        .then((res) => {
          setLSVersionProfileCustomer(`${res.version}`);
          setProfileData(res);
        })
        .then(() => setIsDataLoaded(true));
    }
    getCustomerInfo();
  }, [update]);
  return isDataLoaded ? (
    <>
      <Header state={state} setState={setState} />
      <div className={styles.profilePage}>
        <h2>Profile</h2>
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
              Addresses
            </button>
            <button
              type="button"
              key="Change Password"
              className={`${styles.tabsItem} ${activeTab === 2 ? styles.tabActive : ''}`}
              onClick={() => tabsToggle(2)}>
              Change Password
            </button>
          </div>
          <div className={styles.content}>
            {activeTab === 0 && (
              <ProfileTabContent
                firstName={profileData?.firstName}
                dateOfBirth={profileData?.dateOfBirth}
                lastName={profileData?.lastName}
                email={profileData?.email}
                setUpdate={setUpdate}
              />
            )}
            {activeTab === 1 && (
              <AddressesTabContent
                addresses={profileData?.addresses}
                shippingAddressIds={profileData?.shippingAddressIds}
                defaultShippingAddressId={profileData?.defaultShippingAddressId}
                billingAddressIds={profileData?.billingAddressIds}
                defaultBillingAddressId={profileData?.defaultBillingAddressId}
                setUpdate={setUpdate}
              />
            )}
            {activeTab === 2 && <ChangePasswordTabContent state={state} setState={setState} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <Header state={state} setState={setState} />
      <Loader />
      <Footer />
    </>
  );
}
