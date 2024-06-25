import React from 'react';
import * as classes from './call-to-action.module.css';
import * as classesMain from './main.module.css';

function CallToAction() {
  return (
    <section className={`${classes.callToAction} ${classesMain.mainSection}`}>
      <div className={classesMain.textContent}>
        <p className={classesMain.title}>Your exclusive space awaits!</p>
        <p className={classesMain.subTitle}>
          Browse our catalog and contact us today to take the first step towards realizing your
          cosmic dream. Let &quot;Galactic Exclusive&quot; be your guide to the world of cosmic
          possibilities!
        </p>
      </div>
    </section>
  );
}

export default CallToAction;
