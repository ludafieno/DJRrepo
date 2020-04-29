import React from "react";
import { List, Avatar, Icon } from "antd";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Animal = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          extra={
            <img
              width={272}
              alt="logo"
              src={item.img_url}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src='https://imgflip.com/s/meme/Philosoraptor.jpg' />}
            title={<a href={`/animals/${item.id}`}>{item.name}</a>}
            description={item.content}
          />
          {item.description}
        </List.Item>
      )}
    />
  );
};

export default Animal;
