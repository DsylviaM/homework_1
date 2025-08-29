import axios from 'axios';
import { Post, Comment } from '../types/post';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchAllPosts = async (limit: number = 4): Promise<Post[]> => {
  const response = await axios.get<Post[]>(`${API_URL}/posts`);
  return response.data.slice(0, limit);
};
export const fetchUserPosts = async (userId: string): Promise<Post[]> => {
  const response = await axios.get<Post[]>(`${API_URL}/users/${userId}/posts`);
  return response.data;
};

export const fetchPostComments = async (postId: number,limit: number = 2): Promise<Comment[]> => {
  const response = await axios.get<Comment[]>(`${API_URL}/posts/${postId}/comments`);
  return response.data.slice(0, limit);
};
