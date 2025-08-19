import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PostListPage = lazy(() => import('../../../pages/PostListPage'));
const PostDetailsPage = lazy(() => import('../../../pages/PostDetailsPage'));
const UserAlbumsPage = lazy(() => import('../../../pages/UserAlbumsPage'));
const AlbumPhotosPage = lazy(() => import('../../../pages/AlbumPhotosPage'));
const UserTodosPage = lazy(() => import('../../../pages/UserTodosPage'));
const UserPostsPage = lazy(() => import('../../../pages/UserPostsPage'));
const UserLayout = lazy(() => import('../../../pages/UserLayout/ui/UserLayout'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/posts" element={<PostListPage />} />
      <Route path="/posts/:id" element={<PostDetailsPage />} />
      <Route path="/albums/:id/photos" element={<AlbumPhotosPage />} />
      
      <Route path="/users/:id" element={<UserLayout />}>
        <Route index element={<UserPostsPage />} />
        <Route path="posts" element={<UserPostsPage />} />
        <Route path="albums" element={<UserAlbumsPage />} />
        <Route path="todos" element={<UserTodosPage />} />
      </Route>
      
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};