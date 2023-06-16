import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'antd';

import { WalletContext } from '../../contexts/wallet';
import { MetamaskButton } from '../../components/MetamaskButton';

const ConnectScreen = () => {
  const walletContext = useContext(WalletContext);
  const navigate = useNavigate();

  const onClick = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts', params: [] })
        .then((address) => {
          walletContext.setWalletAddress(address)
          navigate('/m')
        });
    }
    else {
      alert("Please install the MetaMask extension first")
    }
  }

  return <Row style={{ width: '100%', height: "100vh" }} justify={'center'} align={'middle'}>
    <MetamaskButton onClick={onClick}>Connect to Metamask</MetamaskButton>
  </Row>
}

export default ConnectScreen;