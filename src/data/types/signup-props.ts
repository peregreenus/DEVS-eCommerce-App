export interface SignupSuccessState {
  showSignupSuccess: boolean;
  // here we can add new parameters
}

export interface SignupSuccessProps {
  showSucceed: SignupSuccessState;
  setShowSucceed: React.Dispatch<React.SetStateAction<SignupSuccessState>>;
}
