import React, { createContext, useState, ReactNode } from 'react';

interface RefreshType {
  refresh: boolean;
  handleRefresh: () => void
}

export const RefreshContext = createContext<RefreshType>(
  { refresh: false, handleRefresh: () => {}}
); // valores iniciales de los estados dentro del contexto

export const RefreshProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => setRefresh(!refresh);

  return <RefreshContext.Provider value={{ refresh, handleRefresh }}>{children}</RefreshContext.Provider>;
};