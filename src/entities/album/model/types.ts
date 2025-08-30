export interface Album {
  userId: number;
  id: number;
  title: string;
}

export type CreateAlbumDto = Omit<Album, 'id'>;
export type UpdateAlbumDto = Partial<CreateAlbumDto>;