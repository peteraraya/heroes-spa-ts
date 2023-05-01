

export  interface ProviderProps {
  children: React.ReactNode;
}


export interface AuthState {
  logged: boolean;
}

interface User {
  id: string;
  name: string;
}

export interface AuthAction {
  type: string;
  payload?: User;
}