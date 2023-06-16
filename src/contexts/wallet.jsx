import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const WalletContext = React.createContext({});

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Connected to ${walletAddress}`);
    if (!walletAddress) {
      navigate('/connect');
    }
  }, [walletAddress])
  
  return <WalletContext.Provider value={{walletAddress, setWalletAddress}}>{children}</WalletContext.Provider>;
};
