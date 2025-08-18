import { useState, useEffect } from 'react';
import { fetchPosts, fetchUserPosts } from '../api/postApi';

export const usePosts = (userId) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = userId 
          ? await fetchUserPosts(userId) 
          : await fetchPosts();
        
        setPosts(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [userId]);

  return { posts, loading, error };
};