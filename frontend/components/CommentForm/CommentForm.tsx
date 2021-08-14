import { Button, Form, Input } from 'antd';
import { IPost } from 'assets/types';
import { useInput } from 'hooks';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'store';

interface ICommentForm {
  post: IPost;
}

const CommentForm: React.FC<ICommentForm> = ({ post }) => {
  const { user } = useSelector((state: State) => state.user);
  const [commentText, onChangeCommentText] = useInput('');

  const onSubmitComment = useCallback(() => {}, []);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button
          style={{ position: 'absolute', right: 0, bottom: -40 }}
          type="primary"
          htmlType="submit"
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
