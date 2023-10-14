import { PropsWithChildren, createContext, useContext, useState } from "react";

const NavContext = createContext("");

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
