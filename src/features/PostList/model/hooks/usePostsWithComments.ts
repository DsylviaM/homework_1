import { useGetPostsQuery } from '../../../../entities/post/api/postsApi';
import { useGetPostCommentsQuery } from '../../../../entities/comment/api/commentsApi';

export const usePostsWithComments = (limit: number = 4) => {
  const { 
    data: posts, 
    isLoading: postsLoading, 
    error: postsError 
  } = useGetPostsQuery();

  // Получаем комментарии для каждого поста
  const postIds = posts?.slice(0, limit).map(post => post.id) || [];
  
  const commentsResults = postIds.map(postId => 
    useGetPostCommentsQuery(postId, { skip: !postId })
  );

  const isLoading = postsLoading || commentsResults.some(result => result.isLoading);
  const error = postsError || commentsResults.find(result => result.error)?.error;

  // Формируем данные с комментариями
  const postsWithComments = posts?.slice(0, limit).map((post, index) => ({
    ...post,
    comments: commentsResults[index]?.data || []
  })) || [];

  return {
    posts: postsWithComments,
    isLoading,
    error
  };
};