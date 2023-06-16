import { Card, Col, Row } from "antd";
import './index.scss';
import moment from "moment";
import { useContext } from "react";
import { WalletContext } from "../../contexts/wallet";

const MessageBox = (message) => {
  const walletContext = useContext(WalletContext);
  const isMyMessage = message.sender === walletContext.walletAddress?.[0];

  return (
    <Row align={'bottom'} justify={isMyMessage ? 'end' : 'start'} style={{ width: '100%', paddingInline: '10px' }}>
      <Col>
        <Card
          title={message.sender}
          bordered={false}
          style={{
            textAlign: 'left',
            width: 'fit-content',
            backgroundColor: isMyMessage ? 'antiquewhite' : 'ghostwhite'
          }}
        >
          <div>{message.content}</div>
          <small style={{ float: 'right' }}>{moment(message.timestamp).format('DD-MM-YYYY HH:mm:ss')}</small>
        </Card>
      </Col>
    </Row>
  )
}

export default MessageBox;