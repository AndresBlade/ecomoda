import React, { createContext, useState, ReactNode } from 'react';

interface RefreshType {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RefreshContext = createContext<RefreshType>(
  { refresh: false, setRefresh: () => {} }
); // valores iniciales de los estados dentro del contexto

export const RefreshProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [refresh, setRefresh] = useState(false);

  return <RefreshContext.Provider value={{ refresh, setRefresh }}>{children}</RefreshContext.Provider>;
};