import { createContext, useContext, ReactNode } from "react";

interface UserContextType {
  currentUser: {
    id: string;
    name: string;
    avatar: string;
    score: number;
    rank: number;
    treesPlanted: number;
  };
}

const defaultUserContext: UserContextType = {
  currentUser: {
    id: "current-user",
    name: "Me",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Me",
    score: 2500,
    rank: 1,
    treesPlanted: 15,
  },
};

const UserContext = createContext<UserContextType>(defaultUserContext);

export function UserProvider({ children }: { children: ReactNode }) {
  return (
    <UserContext.Provider value={defaultUserContext}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
