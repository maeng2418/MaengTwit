/** @jsxImportSource @emotion/react */
import React from 'react';
import { Form, Input } from 'antd';
import { css } from '@emotion/react';

const NicknameEditForm: React.FC = () => {
  const formStyle = css`
    margin-bottom: 20px;
    border: 1px solid #d9d9d9;
    padding: 20px;
  `;
  return (
    <Form css={formStyle}>
      <Input.Search addonBefore={'닉네임'} enterButton={'수정'} />
    </Form>
  );
};

export default NicknameEditForm;
