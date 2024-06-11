import React from 'react';
import { Link } from 'react-router-dom';
import { MemberProps } from './member-props';
import * as styles from './team.module.css';
import GitHubIcons from '../../common/icons/githubIcon';
import zelenskiy from '../../../../assets/photo/zelenskiy.jpg';
import zmeevskiy from '../../../../assets/photo/zmeevskiy.jpg';
import andreichuk from '../../../../assets/photo/andreichuk.jpg';

export default function TeamMember({ ...props }: MemberProps) {
  return (
    <div className={styles.teamMember} key={props.key}>
      <h3 className={styles.memberName}>{props.name}</h3>
      <Link to={props.gitHubLInk} className={styles.gitHubLInk}>
        <GitHubIcons width="3rem" height="3rem" />
      </Link>
      {props.photo === 'zelenskiy' && (
        <img src={zelenskiy} alt={`${props.name}`} className={styles.photoMember} />
      )}
      {props.photo === 'zmeevskiy' && (
        <img src={zmeevskiy} alt={`${props.name}`} className={styles.photoMember} />
      )}
      {props.photo === 'andreichuk' && (
        <img src={andreichuk} alt={`${props.name}`} className={styles.photoMember} />
      )}
      <h5 className={styles.roleMember}>{props.teamRole}</h5>
      <p className={styles.skillsMember}>
        <span>Skills: </span> {props.skills}
      </p>
      <p className={styles.bioMember}>&quot;{props.bio}&quot;</p>
    </div>
  );
}
