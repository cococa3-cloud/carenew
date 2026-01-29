
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Activity, Heart, BookOpen, Star, ArrowRight } from 'lucide-react';

const MenuCard = ({ to, title, icon, color, description }: any) => (
  <Link 
    to={to} 
    className={`block p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow mb-4`}
  >
    <div className="flex items-center gap-5">
      <div className={`p-4 rounded-2xl ${color}`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <ArrowRight className="text-gray-300" size={20} />
    </div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-8 bg-teal-50 p-6 rounded-3xl border border-teal-100">
        <p className="text-teal-700 font-bold mb-1">안녕하세요, 어르신!</p>
        <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
          오늘도 건강하고 <br />활기찬 하루 보내세요.
        </h2>
        <div className="mt-4 flex items-center gap-2 text-sm text-teal-600 bg-white/50 w-fit px-3 py-1 rounded-full">
          <Star size={16} fill="currentColor" />
          <span>오늘의 목표까지 한 걸음 남았어요!</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <MenuCard 
          to="/brain" 
          title="두뇌 훈련" 
          description="퀴즈와 게임으로 뇌를 깨워요"
          icon={<Brain size={32} className="text-teal-600" />} 
          color="bg-teal-100"
        />
        <MenuCard 
          to="/activity" 
          title="신체 활동" 
          description="간단한 체조로 몸을 유연하게"
          icon={<Activity size={32} className="text-sky-600" />} 
          color="bg-sky-100"
        />
        <MenuCard 
          to="/mind" 
          title="마음 공부" 
          description="명상과 좋은 글로 마음 다스리기"
          icon={<Heart size={32} className="text-rose-600" />} 
          color="bg-rose-100"
        />
        <MenuCard 
          to="/diary" 
          title="나의 일기" 
          description="오늘의 소중한 순간을 기록해요"
          icon={<BookOpen size={32} className="text-amber-600" />} 
          color="bg-amber-100"
        />
      </div>

      <div className="mt-8 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-lg mb-4 text-gray-800">최근 소식</h3>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <div className="min-w-[140px] h-24 bg-blue-50 rounded-2xl flex flex-col justify-end p-3">
            <p className="text-xs text-blue-600 font-bold">건강 상식</p>
            <p className="text-sm font-bold truncate">물 마시기 효과</p>
          </div>
          <div className="min-w-[140px] h-24 bg-green-50 rounded-2xl flex flex-col justify-end p-3">
            <p className="text-xs text-green-600 font-bold">이웃 소식</p>
            <p className="text-sm font-bold truncate">우리동네 축제</p>
          </div>
          <div className="min-w-[140px] h-24 bg-purple-50 rounded-2xl flex flex-col justify-end p-3">
            <p className="text-xs text-purple-600 font-bold">새 게임</p>
            <p className="text-sm font-bold truncate">그림 찾기 추가</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
