import React from 'react';
import { MainProps } from '../../../data/types/main-props';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import * as styles from './about.module.css';
import Team from '../../components/About/team/team';
import membersJson from '../../../data/contains/members.json';
import { Members } from '../../components/About/team/member-props';
import Loader from '../../components/Loader/Loader';
import Contributions from '../../components/About/contributions/contributions';
import Specials from '../../components/About/specials/specials';

export default function About({ state, setState }: MainProps) {
  const data: Members = membersJson;
  return data ? (
    <>
      <Header state={state} setState={setState} />
      <div className={styles.about}>
        {data && (
          <div className={styles.aboutPage}>
            <h2>About us</h2>
            <Team members={data.members} />
            <Contributions />
            <Specials />
          </div>
        )}
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
