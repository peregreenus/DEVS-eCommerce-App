import React from 'react';
import * as styles from './contributions.module.css';

export default function Contributions() {
  return (
    <div className={styles.contributions}>
      <h5>Contributions</h5>
      <p>
        Our team&apos;s success was the result of effective collaboration. <br />
        We chatted bi-daily on Discord to discuss the project, plan collectively, and assign tasks
        to each member. Regular communication by voice helped to find solutions to any problems and
        discuss an action plan, motivated, and ensured a successful project outcome!
      </p>
    </div>
  );
}
