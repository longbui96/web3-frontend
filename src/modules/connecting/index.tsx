import {Button} from 'antd';
import MetaMaskSDK from '@metamask/sdk';
import { ReactNode, useContext } from 'react';
import { WalletContext } from '../../contexts/wallet';
import MetamaskLogo from './../../assets/MetaMask_Fox.svg';

const MMSDK = new MetaMaskSDK();
const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum

const Connecting: any = (): any => {
    const walletContext = useContext<any>(WalletContext);

    const onClick = () => {
        if (ethereum) {
          ethereum.request({ method: 'eth_requestAccounts', params: [] })
          .then((address) => {
            walletContext.setWalletAddress(address)
          });
        }
        else {
          alert("Please install the MetaMask extension first")
        }
      }

    return <header className="App-header">
    <Button type='primary' onClick={onClick}>
      <img src={MetamaskLogo} className="metamask-logo" alt="logo" />
      Connect to Metamask
    </Button>
  </header>
}

export default Connecting;