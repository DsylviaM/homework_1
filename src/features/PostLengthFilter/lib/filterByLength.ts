import { Post } from "../../../features/PostList/model/types/post";

export const filterByLength = (posts: Post[], minLength: number): Post[] => {
  if (!Array.isArray(posts)) {
    return [];
  }
  return posts.filter(post => post.title.length >= minLength);
};