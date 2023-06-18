import { useContext } from 'react';
import { Card, Col, Row } from 'antd';
import moment from 'moment';

import { WalletContext } from '../../contexts/wallet';

import './index.scss';

const MessageBox = (message) => {
  const walletContext = useContext(WalletContext);
  const isMyMessage = message.sender === walletContext.walletAddress;

  return (
    <Row
      align={'bottom'}
      justify={isMyMessage ? 'end' : 'start'}
      style={{ width: '100%', paddingInline: '10px' }}
    >
      <Col>
        <Card
          title={<small>{message.sender}</small>}
          bordered={false}
          style={{
            textAlign: 'left',
            width: 'fit-content',
            backgroundColor: isMyMessage ? 'antiquewhite' : 'ghostwhite',
          }}
        >
          <div>{message.content}</div>
          <small style={{ float: 'right', color: 'rgba(0, 0, 0, 0.45)' }}>
            {moment(message.timestamp).format('DD-MM-YYYY HH:mm:ss')}
          </small>
        </Card>
      </Col>
    </Row>
  );
};

export default MessageBox;
