import React from 'react';
import { MemberProps } from './member-props';
import * as styles from './team.module.css';
import GitHubIcons from '../../common/icons/githubIcon';

export default function TeamMember({ ...props }: MemberProps) {
  const textb = '';
  return (
    <div className={styles.teamMember} key={props.key}>
      <h3 className={styles.memberName}>{props.name}</h3>
      <a href={props.gitHubLInk} className={styles.gitHubLInk}>
        <GitHubIcons width="1.7rem" height="1.7rem" />
        {textb}
      </a>
      <img src={props.photo} alt={`${props.name}`} className={styles.photoMember} />
      <h5 className={styles.roleMember}>{props.teamRole}</h5>
      <p className={styles.bioMember}>{props.bio}</p>
    </div>
  );
}
