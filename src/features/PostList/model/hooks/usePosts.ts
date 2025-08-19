// usePosts.ts
import { useState, useEffect } from 'react';
import { fetchAllPosts, fetchUserPosts, fetchPostComments } from '../api/postApi';
import type { Post, Comment } from '../types/post';

interface PostWithComments extends Post {
  comments: Comment[];
}

interface UsePostsResult {
  posts: (Post & PostWithComments)[];
  isLoading: boolean;
  error: string | null;
}

export const usePosts = (userId?: string): UsePostsResult => {
  const [posts, setPosts] = useState<(Post & PostWithComments)[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log("Post from API",posts);

  useEffect(() => {
    const loadPostsWithComments = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
         const postsData = userId 
          ? await fetchUserPosts(userId)
          : await fetchAllPosts();

        const postsWithComments = await Promise.all(
          postsData.map(async (post) => {
            const comments = await fetchPostComments(post.id);
            return { ...post, comments };
          })
        );

        setPosts(postsWithComments);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts and comments');
      } finally {
        setIsLoading(false);
      }
    };

    loadPostsWithComments();
  }, [userId]);

  return { posts, isLoading, error };
};