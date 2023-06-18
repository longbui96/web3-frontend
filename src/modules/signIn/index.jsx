import { Row } from 'antd';

import MetamaskButton from '../../components/MetamaskButton';

const ConnectScreen = () => {

  return (
    <Row
      style={{ width: '100%', height: '100vh' }}
      justify={'center'}
      align={'middle'}
    >
      <MetamaskButton
        // onClick={onClick}
      >
        Connecting to Metamask
      </MetamaskButton>
    </Row>
  );
};

export default ConnectScreen;
