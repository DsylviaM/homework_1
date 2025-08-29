import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PostListPage = lazy(() => import('../../../pages/PostListPage/PostListPage'));
const PostDetailsPage = lazy(() => import('../../../pages/PostDetailsPage/PostDetailsPage'));
const UserAlbumsPage = lazy(() => import('../../../pages/UserAlbumsPage/UserAlbumsPage'));
const AlbumPhotosPage = lazy(() => import('../../../pages/AlbumPhotosPage/AlbumPhotosPage'));
const UserTodosPage = lazy(() => import('../../../pages/UserTodosPage/UserTodosPage'));
const UserPostsPage = lazy(() => import('../../../pages/UserPostsPage/UserPostsPage'));
const UserLayout = lazy(() => import('../../../pages/UserLayout/ui/UserLayout'));
// const PostPage = lazy(() => import('../../../pages/PostPage/PostPage'));


export const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      
      <Route path="/posts" element={<PostListPage  />} />
      <Route path="/posts/:id" element={<PostDetailsPage />} />

      {/* /albums/1/photos не показывает фото */}
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
    </Suspense>
  );
};