import './App.css';
import { useEffect, useContext } from 'react';
import { UserContext, UserContextProvider } from './context/user.context';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import TopBar from './components/TopBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Profile from './pages/Profile';

const AppContent = () => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = userData;

  useEffect(() => {
    if (!id) {
      navigate('/login');
    }
  }, [id, navigate])

  return (
    <div id="app-layout">
     <TopBar />
      <div className="page-view">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <UserContextProvider>
      <AppContent />
    </UserContextProvider>
  );
};

export default App;
