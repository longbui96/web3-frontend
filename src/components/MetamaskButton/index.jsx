import { Button } from 'antd';

import MetamaskLogo from './../../assets/MetaMask_Fox.svg';

const MetamaskButton = (props) => {
  return (
    <Button
      type="primary"
      onClick={props.onClick}
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <img src={MetamaskLogo} className="metamask-logo" alt="metamask-logo" />
      {props.children}
    </Button>
  );
};

export default MetamaskButton;
