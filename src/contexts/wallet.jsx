import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { ContractABI, ContractAddress } from '../config/contractInfo';

export const WalletContext = React.createContext({});

let provider;
let signer;

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState();
  const [balance, setBalance] = useState();
  const [contract, setContract] = useState();
  const navigate = useNavigate();

  const connectToEthers = async () => {
    if (window.ethereum) {
      provider = new ethers.BrowserProvider(window.ethereum)
      signer = await provider.getSigner();

      const address = await signer.getAddress();         
      setWalletAddress(address);

      const weiBalance = await provider.getBalance(address)
      const balance = ethers.formatUnits(weiBalance, 'ether')
      setBalance(balance);
      
      const contract = new ethers.Contract( ContractAddress, ContractABI, signer );
      setContract(contract);
    }
    else {
      console.log("MetaMask not installed; using read-only defaults")
      provider = ethers.getDefaultProvider()
    }
  }

  useEffect(() => {
    connectToEthers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(`Connected to ${walletAddress}`);
    if (!walletAddress) {
      navigate('/connect');
    }
    else {
      navigate('/m');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletAddress]);

  useEffect(() => {
    console.log('contract', contract)
  }, [contract])

  return (
    <WalletContext.Provider value={{ walletAddress, balance, contract }}>
      {children}
    </WalletContext.Provider>
  );
};
