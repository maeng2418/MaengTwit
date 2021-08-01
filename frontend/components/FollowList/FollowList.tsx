/** @jsxImportSource @emotion/react */
import React, { useMemo } from 'react';
import { List, Button, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

interface IFollowList {
  header: string;
  data: { nickname: string }[];
}

const FollowList: React.FC<IFollowList> = ({ header, data }) => {
  const listStyle = css`
    margin-bottom: 20px;
  `;

  const loadMoreStyle = css`
    text-align: center;
    margin: 10px 0;
  `;

  const listItemStyle = css`
    margin-top: 20px;
  `;

  const listGrid = useMemo(
    () => ({
      gutter: 4,
      xs: 2,
      md: 3,
    }),
    [],
  );

  return (
    <List
      header={<div>{header}</div>}
      css={listStyle}
      grid={listGrid}
      size="small"
      loadMore={
        <div css={loadMoreStyle}>
          <Button>더 보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item css={listItemStyle}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    ></List>
  );
};

export default FollowList;
