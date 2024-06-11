import React from 'react';
import * as styles from './team.module.css';
import TeamMember from './member';
import { MemberProps, Members } from './member-props';

export default function Team(members: Members) {
  const teamMember: MemberProps[] = members?.members.sort(() => Math.random() - 0.5);
  return (
    <div className={styles.team}>
      <h5>Our Team</h5>
      {teamMember.map((member) => (
        <TeamMember
          key={member.key}
          name={member.name}
          bio={member.bio}
          gitHubLInk={member.gitHubLInk}
          photo={member.photo}
          teamRole={member.teamRole}
          skills={member.skills}
        />
      ))}
    </div>
  );
}
