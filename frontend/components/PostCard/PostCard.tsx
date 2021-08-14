import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from '@ant-design/icons';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'store';
import { IPost } from 'assets/types';
import { Button, Popover, Card } from 'antd';
import { PostImages } from 'components';
import Avatar from 'antd/lib/avatar/avatar';

interface IPostCard {
  post: IPost;
}

const PostCard: React.FC<IPostCard> = ({ post }) => {
  const { user } = useSelector((state: State) => state.user);
  const [liked, setLiked] = useState<boolean>(false);
  const [commentFormOpened, setCommentFormOpened] = useState<boolean>(false);

  const onToggleLike = useCallback(() => setLiked((prev) => !prev), []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone key="heart" twoToneColor="#eb2f96" onClick={onToggleLike} />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {user?.id === post.User.id ? (
                  <>
                    <Button>수정</Button> <Button danger>삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
            {commentFormOpened && <div>댓글입력</div>}
            {/* <CommentForm />
            <Comments /> */}
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
    </div>
  );
};

export default PostCard;
