import { useParams } from 'react-router-dom';
import UserLayout from '../UserLayout/ui/UserLayout';

const AlbumPhotosPage = () => {
  const { id } = useParams();

  return (
    <div>
    <UserLayout />
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Фотографии альбома #{id}</h2>
      <div style={{ 
        background: '#e9ecef', 
        padding: '60px 40px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <p style={{ margin: '0', color: '#6c757d' }}>📷 Раздел в разработке</p>
      </div>
    </div>
    </div>
  );
};

export default AlbumPhotosPage;