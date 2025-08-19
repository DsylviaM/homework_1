import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const PostListPage = lazy(() => import('../../../pages/PostListPage'));
const PostDetailsPage = lazy(() => import('../../../pages/PostDetailsPage'));
const UserAlbumsPage = lazy(() => import('../../../pages/UserAlbumsPage'));
const AlbumPhotosPage = lazy(() => import('../../../pages/AlbumPhotosPage'));
const UserTodosPage = lazy(() => import('../../../pages/UserTodosPage'));
const UserPostsPage = lazy(() => import('../../../pages/UserPostsPage'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />}>
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
      </Route>
      <Route path="/users/:id/" element={<UserPostsPage />}>
        <Route path="/users/:id/posts" element={<UserPostsPage />} />
        <Route path="/users/:id/albums" element={<UserAlbumsPage />} />
        <Route path="/users/:id/todos" element={<UserTodosPage />} />
      </Route>
      <Route path="/albums/:id/photos" element={<AlbumPhotosPage />} />
    </Routes>
  );
};