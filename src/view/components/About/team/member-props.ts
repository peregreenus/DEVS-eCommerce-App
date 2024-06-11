export interface MemberProps {
  name: string;
  photo: string;
  gitHubLInk: string;
  teamRole: string;
  skills: string;
  bio: string;
  key: number;
}

export interface Members {
  members: MemberProps[];
}
