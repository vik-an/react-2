import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("LogedUser", null);

  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
