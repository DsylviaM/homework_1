import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Ленивая загрузка компонентов (чтобы не грузить всё сразу)
const PostListPage = lazy(() => import('../../../pages/PostListPage'));
const PostDetailsPage = lazy(() => import('../../../pages/PostDetailsPage'));
const UserAlbumsPage = lazy(() => import('../../../pages/UserAlbumsPage'));
const AlbumPhotosPage = lazy(() => import('../../../pages/AlbumPhotosPage'));
const UserTodosPage = lazy(() => import('../../../pages/UserTodosPage'));
const UserPostsPage = lazy(() => import('../../../pages/UserPostsPage'));

export const Routing = () => {
  return (
    <Routes>
      {/* Маршрут для списка всех постов */}
      <Route path="/posts" element={<PostListPage />} />

      {/* Маршрут для конкретного поста (id — динамический параметр) */}
      <Route path="/posts/:id" element={<PostDetailsPage />} />

      {/* Маршрут для альбомов пользователя */}
      <Route path="/users/:id/albums" element={<UserAlbumsPage />} />

      {/* Маршрут для фотографий в альбоме */}
      <Route path="/albums/:id/photos" element={<AlbumPhotosPage />} />

      {/* Маршрут для задач пользователя */}
      <Route path="/users/:id/todos" element={<UserTodosPage />} />

      {/* Маршрут для постов пользователя */}
      <Route path="/users/:id/posts" element={<UserPostsPage />} />
    </Routes>
  );
};