import { useParams } from 'react-router-dom';

const UserTodosPage = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <div style={{ fontSize: '64px', marginBottom: '20px' }}>📝</div>
      <h2>Задачи пользователя #{id}</h2>
      <div style={{ 
        background: '#e8f5e8', 
        padding: '30px', 
        borderRadius: '12px',
        margin: '20px auto',
        maxWidth: '400px'
      }}>
        <p style={{ margin: '0', color: '#2e7d32' }}>
          ✅ Выполнить homework по React на 100%
        </p>
      </div>
    </div>
  );
};

export default UserTodosPage;