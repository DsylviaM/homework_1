import { Post } from '../../../shared/constants/posts';

export const filterByLength = (posts: Post[], minLength: number): Post[] => {
  return posts.filter(post => post.title.length >= minLength);
};