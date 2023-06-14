import React, { useEffect, useState } from "react";

interface IProviderProps {
  children: React.Component;
}

export const WalletContext: any = React.createContext({});

export const WalletProvider: any = ({ children }: IProviderProps) => {
  const [walletAddress, setWalletAddress] = useState();

  useEffect(() => {
    console.log(`Connected to ${walletAddress}`);
  }, [walletAddress])
  
  return <WalletContext.Provider value={{walletAddress, setWalletAddress}}>{children}</WalletContext.Provider>;
};
