
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Brain, 
  Activity, 
  Heart, 
  BookOpen, 
  Home as HomeIcon, 
  User,
  ChevronLeft
} from 'lucide-react';
import Home from './pages/Home';
import BrainTraining from './pages/BrainTraining';
import PhysicalActivity from './pages/PhysicalActivity';
import Mindfulness from './pages/Mindfulness';
import Diary from './pages/Diary';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: <HomeIcon size={24} />, label: '홈' },
    { path: '/brain', icon: <Brain size={24} />, label: '두뇌' },
    { path: '/activity', icon: <Activity size={24} />, label: '신체' },
    { path: '/mind', icon: <Heart size={24} />, label: '마음' },
    { path: '/diary', icon: <BookOpen size={24} />, label: '일기' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-around items-center safe-area-pb shadow-lg z-50">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center p-2 rounded-xl transition-colors ${
            isActive(item.path) ? 'text-teal-500' : 'text-gray-400'
          }`}
        >
          {item.icon}
          <span className="text-xs mt-1 font-bold">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const getTitle = () => {
    switch (location.pathname) {
      case '/brain': return '두뇌 훈련';
      case '/activity': return '신체 활동';
      case '/mind': return '마음 공부';
      case '/diary': return '나의 일기';
      default: return '케어링';
    }
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-50">
      <div className="flex items-center gap-3">
        {!isHome && (
          <Link to="/" className="p-1 -ml-1 text-gray-600">
            <ChevronLeft size={28} />
          </Link>
        )}
        <h1 className="text-2xl font-extrabold text-teal-600">{getTitle()}</h1>
      </div>
      <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
        <User size={24} />
      </div>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 pb-24">
        <Header />
        <main className="max-w-md mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brain" element={<BrainTraining />} />
            <Route path="/activity" element={<PhysicalActivity />} />
            <Route path="/mind" element={<Mindfulness />} />
            <Route path="/diary" element={<Diary />} />
          </Routes>
        </main>
        <Navigation />
      </div>
    </HashRouter>
  );
};

export default App;
