import { Avatar, Form, Input, List, Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { PlusCircleOutlined } from '@ant-design/icons';

import './index.scss'

const { Search } = Input;

const mockList = [
  { address: '0x25459d928FD87271d729a98cBD13cbe2A0d093da' }
];

const ContactList = () => {
  const [contactList, setContactList] = useState(mockList);
  const [searchKey, setSearchKey] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (searchKey) {
      setContactList(mockList.filter(e => e.address.includes(searchKey)));
    }
    else {
      setContactList(mockList);
    }
  }, [searchKey])

  const onSearch = (value) => {
    setSearchKey(value);
  };

  return <div className="container">
    <Form>
      <Form.Item>
        <Search placeholder="Input the address" onSearch={onSearch} size="large"/>
      </Form.Item>
    </Form>
    <List
      className="contact-list"
      dataSource={contactList.length ? contactList : [{ address: searchKey, isAdding: true }]}
      renderItem={({ address, isAdding }) => (
        isAdding ?
          <List.Item style={{ cursor: 'pointer' }} onClick={() => {
            mockList.push({ address });
            setSearchKey('');
          }}>
            <List.Item.Meta
              description="Click here to add this new address"
              title={address.length > 15 ? `${address.slice(0, 7)}...${address.slice(address.length - 8, address.length)}` : address}
            />
          </List.Item>
          :
          <Link to={`/m/${address}`}>
            <Tooltip arrow title={address} placement="right">
              <List.Item className={location.pathname.slice(3) === address && "active"}>
                <List.Item.Meta
                  avatar={
                    <Avatar size={50} src={`http://xsgames.co/randomusers/assets/avatars/pixel/${address % 53}.jpg`} shape="circle" />
                  }
                  title={address.length > 15 ? `${address.slice(0, 7)}...${address.slice(address.length - 8, address.length)}` : address}
                />
              </List.Item>
            </Tooltip>
          </Link>
      )}
    />
  </div>
}

export default ContactList; 