import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div style={{ width: 1200, height: '100%', margin: '0px auto' }}>
      <Outlet />
    </div>
  );
}

export default MainLayout;
