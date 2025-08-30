export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type CreateCommentDto = Omit<Comment, 'id'>;
export type UpdateCommentDto = Partial<CreateCommentDto>;