import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export function useLoading() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
