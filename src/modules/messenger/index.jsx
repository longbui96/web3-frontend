import { useContext } from 'react';
import { Button, Layout, Row, Col } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import { WalletContext } from '../../contexts/wallet';
import MetamaskButton from '../../components/MetamaskButton';
import ContactList from '../../components/ContactList';
import ChatRoom from '../../components/ChatRoom';

import './index.scss';

const { Content } = Layout;

const headerStyle = {
  padding: 0,
  backgroundColor: 'transparent',
  lineHeight: '20px',
  marginBottom: '20px',
};

const contentStyle = {
  minHeight: 120,
  textAlign: 'center',
  lineHeight: '120px',
};

const Messenger = () => {
  const walletContext = useContext(WalletContext);

  return (
    <Layout style={{ backgroundColor: 'transparent', marginBlock: '20px' }}>
      <Row justify={'end'} align={'middle'} style={headerStyle}>
        <Col style={{ textAlign: 'right' }}>
          <MetamaskButton>{walletContext.walletAddress}</MetamaskButton>
          {walletContext.balance && <p style={{ margin: 0 }}>Having {walletContext.balance} MATICs</p>}
        </Col>
        <Col span={0}>
          <Button
            icon={<LogoutOutlined />}
            style={{ height: '52px', width: '50px', marginLeft: 10 }}
            onClick={() => {
              // walletContext.setWalletAddress(null);
            }}
          />
        </Col>
      </Row>
      <Content style={contentStyle}>
        <Row>
          <Col span={8}>
            <ContactList />
          </Col>
          <Col span={16}>
            <ChatRoom />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Messenger;
