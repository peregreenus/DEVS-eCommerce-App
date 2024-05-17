export interface AppState {
  showMsg: boolean;
  userLoggedIn: boolean;
}

export interface MainProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}
