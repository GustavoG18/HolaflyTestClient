import { PropsWithChildren, createContext, useContext, useState } from "react";
import { User, UserContextProps } from "../types";

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const storedData = JSON.parse(localStorage.getItem("userData") as string);
  const [state, setState] = useState<User>(storedData);

  return (
    <UserContext.Provider
      value={{
        user: { ...state },
        setUser: (user: User) => setState(user),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
