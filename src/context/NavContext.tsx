import { PropsWithChildren, createContext, useContext, useState } from "react";
import { NavContextProps } from "../types";

const NavContext = createContext<NavContextProps>({} as NavContextProps);

export const NavProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState("active&pending");

  return (
    <NavContext.Provider
      value={{
        nav: state,
        setNav: (nav: string) => setState(nav),
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
