export interface UserContextProps {
  user: User;
  setUser: (user: User) => void;
}

export interface User {
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
    cards: Card[];
    token: string;
  };
}

export interface Card {
  status: string;
  dateStart: string;
  dateEnd: string;
  comsuption: Comsuption;
  flag: string;
  country: string;
  plan: string;
}

export interface Comsuption {
  totalComsumption: number;
}
