export interface UserContextProps {
  user: User;
  setUser: (user: User) => void;
}
export interface NavContextProps {
  nav: string;
  setNav: (nav: string) => void;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  cards: Card[];
  token: string;
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

export interface CardDataTypes {
  cardData: {
    status: string;
    dateStart: string;
    dateEnd: string;
    comsuption: Comsuption;
    flag: string;
    country: string;
    plan: string;
  };
}

export interface GridPropsType {
  cards: {
    status: string;
    dateStart: string;
    dateEnd: string;
    comsuption: Comsuption;
    flag: string;
    country: string;
    plan: string;
  }[];
}

export interface LoaderPropsType {
  loading: boolean;
}

export interface NotificationPropsType {
  notificationData: NotificationType;
  setNotificationData: () => void;
}

export interface NotificationType {
  show: boolean;
  title: string;
  description: string;
  icon: string;
}

export interface DataComsuptionType {
  dataComsuption: {
    status: string;
    plan: string;
    comsuption:
      | {
          totalComsumption: number;
        }
      | undefined;
  };
}

export interface ProtectedRouteType {
  isAllowed: boolean;
  redirectTo: string;
  children: React.ReactNode;
}
