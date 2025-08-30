export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type CreateTodoDto = Omit<Todo, 'id'>;
export type UpdateTodoDto = Partial<CreateTodoDto>;