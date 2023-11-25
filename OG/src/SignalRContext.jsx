import React, { createContext, useContext } from 'react';

const SignalRContext = createContext();

export const SignalRProvider = ({ children, connection }) => {
  return (
    <SignalRContext.Provider value={connection}>
      {children}
    </SignalRContext.Provider>
  );
};

export const useSignalR = () => {
  return useContext(SignalRContext);
};