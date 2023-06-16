import { Col, Input, Row } from "antd";
import { SendOutlined } from "@ant-design/icons";

import "./index.scss";
import MessageBox from "../MessageBox";
import { useState } from "react";

const mockMessages = [
  {
    sender: '0x6424b8992fcfb7b384bc3c54ecd58d1299872a67',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    receiver: '0x25459d928FD87271d729a98cBD13cbe2A0d093da',
    timestamp: new Date()
  },
  {
    sender: '0x25459d928FD87271d729a98cBD13cbe2A0d093da',
    content: 'Vivamus ac nisi egestas, congue enim at, sodales nunc. Aenean ante lorem, tincidunt in luctus pellentesque, tempus eget libero.',
    receiver: '0x6424b8992fcfb7b384bc3c54ecd58d1299872a67',
    timestamp: new Date()
  },
  {
    sender: '0x25459d928FD87271d729a98cBD13cbe2A0d093da',
    content: 'Vestibulum rhoncus volutpat risus in mattis. Aliquam fringilla, magna vel sodales semper, sem felis gravida dui, eu blandit neque orci sit amet neque. Sed rhoncus malesuada odio, tempor placerat mauris lacinia vitae.',
    receiver: '0x6424b8992fcfb7b384bc3c54ecd58d1299872a67',
    timestamp: new Date()
  },
  {
    sender: '0x6424b8992fcfb7b384bc3c54ecd58d1299872a67',
    content: 'Integer cursus finibus justo, nec dignissim urna. Nunc in justo leo. Nulla tincidunt egestas turpis, vel rhoncus mauris ultricies sit amet',
    receiver: '0x25459d928FD87271d729a98cBD13cbe2A0d093da',
    timestamp: new Date()
  }
]

const { Search } = Input;

const ChatRoom = () => {
  const [messageBoxes, setMessageBoxes] = useState(mockMessages);

  return <div className="container">
    <Row align={'bottom'} style={{ height: '100%' }}>
      <Col span={24} style={{ height: '755px', marginBottom: '15px' }}>
        <div style={{ height: "100%", width: '100%', overflowY: 'scroll', display: 'flex', alignItems: 'flex-end', flexDirection: 'column', gap: 15 }}>
          {
            messageBoxes.map(e => <MessageBox {...e}/>)
          }
        </div>
      </Col>
      <Col span={24} style={{ height: '40px' }}>
        <Search
          placeholder="Input your message"
          // onSearch={onSearch}
          size="large"
          enterButton={<SendOutlined />}
        />
      </Col>
    </Row>
  </div>
}

export default ChatRoom; 