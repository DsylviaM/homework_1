export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type CreatePhotoDto = Omit<Photo, 'id'>;
export type UpdatePhotoDto = Partial<CreatePhotoDto>;