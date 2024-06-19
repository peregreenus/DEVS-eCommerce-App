export interface AppState {
  showMsg: boolean;
  userLoggedIn: boolean;
  productsAmount: number;
  // here we can add new parameters
}

export interface MainProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}
