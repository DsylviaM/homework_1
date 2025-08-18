export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

export const fetchUserPosts = async (userId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );
  return response.json();
};