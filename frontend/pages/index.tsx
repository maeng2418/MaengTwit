import { NextPage } from 'next';
import { AppLayout, PostForm, PostCard } from 'components';
import { State } from 'store';
import { useSelector } from 'react-redux';

const Home: NextPage = () => {
  const { isLoggedIn } = useSelector((state: State) => state.user);
  const { mainPosts } = useSelector((state: State) => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {/* 
        반복되는 것들이 지워지거나 순서가 달라지거나
        중간에 추가될 가능성이 있는 것들은 index를 key로
        사용해서는 안된다!!!
      */}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
