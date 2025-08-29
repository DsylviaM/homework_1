import { useParams } from 'react-router-dom';
import { useGetTodosByUserIdQuery } from '../../entities/todo/api/todosApi';
import styles from './UserTodosPage.module.scss';

const UserTodosPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = id ? parseInt(id) : 1;

  const { 
    data: todos, 
    isLoading, 
    error 
  } = useGetTodosByUserIdQuery(userId, {
    skip: !userId,
  });

  if (isLoading) {
    return (
      <div>
        <div className={styles.loadingContainer}>
          <div>Загрузка задач...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className={styles.errorContainer}>
          <h2>Ошибка загрузки задач</h2>
          <p>Не удалось загрузить задачи пользователя</p>
        </div>
      </div>
    );
  }

  if (!userId) {
    return (
      <div>
        <div className={styles.errorContainer}>
          <h2>Пользователь не найден</h2>
          <p>Неверный ID пользователя</p>
        </div>
      </div>
    );
  }

  const completedTodos = todos?.filter(todo => todo.completed) || [];
  const pendingTodos = todos?.filter(todo => !todo.completed) || [];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.icon}>📝</div>
          <h2 className={styles.title}>Задачи пользователя #{userId}</h2>
          <div className={styles.stats}>
            <span className={styles.stat}>
              Всего: <strong>{todos?.length || 0}</strong>
            </span>
            <span className={styles.stat}>
              Выполнено: <strong className={styles.completed}>{completedTodos.length}</strong>
            </span>
            <span className={styles.stat}>
              Осталось: <strong className={styles.pending}>{pendingTodos.length}</strong>
            </span>
          </div>
        </div>

        {/* Выполненные задачи */}
        {completedTodos.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>✅ Выполненные задачи ({completedTodos.length})</h3>
            <div className={styles.todosList}>
              {completedTodos.map(todo => (
                <div key={todo.id} className={`${styles.todoCard} ${styles.completed}`}>
                  <div className={styles.todoContent}>
                    <h4 className={styles.todoTitle}>{todo.title}</h4>
                    <span className={styles.todoId}>Задача #{todo.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Невыполненные задачи */}
        {pendingTodos.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>⏳ Оставшиеся задачи ({pendingTodos.length})</h3>
            <div className={styles.todosList}>
              {pendingTodos.map(todo => (
                <div key={todo.id} className={`${styles.todoCard} ${styles.pending}`}>
                  <div className={styles.todoContent}>
                    <h4 className={styles.todoTitle}>{todo.title}</h4>
                    <span className={styles.todoId}>Задача #{todo.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Нет задач */}
        {todos?.length === 0 && (
          <div className={styles.noTodos}>
            <div className={styles.noTodosIcon}>📋</div>
            <h3 className={styles.noTodosTitle}>Нет задач</h3>
            <p className={styles.noTodosText}>У этого пользователя пока нет задач</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTodosPage;