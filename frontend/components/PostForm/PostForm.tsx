import { Button, Form, Input } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'store';
import { addPost } from 'store/slices/post';

const PostForm: React.FC = () => {
  const [text, setText] = useState<string>('');
  const { imagePaths } = useSelector((state: State) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback(() => {
    dispatch(addPost({}));
    setText('');
  }, []);

  const onChangeText = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }, []);

  const onClickImageUpload = useCallback(() => {
    if (imageInput.current) imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType={'multipart/form-data'} onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder={'어떤 신기한 일이 있었나요?'}
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type={'primary'} style={{ float: 'right' }} htmlType={'submit'}>
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v, i) => (
          <div key={i} style={{ display: 'inline-block' }}>
            <img src={v.src} style={{ width: '200px' }} alt={'이미지'} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
