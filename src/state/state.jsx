import { createContext, useState } from "react";

export const AppContext = createContext({
  user: {},
  reposUrl: "",
  getUser: () => {},
});

// eslint-disable-next-line react/prop-types
export default function AppContexProvider({ children }) {
  const [user, setUser] = useState({
    user: {},
    reposUrl: "",
  });

  function handleUserChange(user) {
    setUser({...user });
  }

  const ctxtValue = {
    user: user.user,
    resposUrl: user.reposUrl,
    getUser: handleUserChange,
  };

  return (
    <AppContext.Provider value={ctxtValue}>{children}</AppContext.Provider>
  );
}
