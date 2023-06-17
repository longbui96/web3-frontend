import { Routes, Route } from 'react-router-dom';

import './App.css';
import MainLayout from './layouts/main';
import ConnectScreen from './modules/signIn';
import Messenger from './modules/messenger';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="connect" element={<ConnectScreen />} />
        <Route path="m" element={<Messenger />}>
          <Route path=":id" element={<Messenger />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
