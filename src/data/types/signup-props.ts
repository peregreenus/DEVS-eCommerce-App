export interface SignupState {
  showSignupSuccess: boolean;
  showSignupError: boolean;
}

export interface SignupProps {
  showSignupState: SignupState;
  setShowSignupState: React.Dispatch<React.SetStateAction<SignupState>>;
}
