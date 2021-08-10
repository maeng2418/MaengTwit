export interface IUser {
  id: number;
  nickname: string;
  Posts: [];
  Followings: [];
  Followers: [];
}

export interface IPostImage {
  src: string;
}

export interface IPostComment {
  User: Pick<IUser, 'nickname'>;
  content: string;
}

export interface IPost {
  id: number;
  User: Pick<IUser, 'id' | 'nickname'>;
  content: string;
  Images: IPostImage[];
  Comments: IPostComment[];
}
