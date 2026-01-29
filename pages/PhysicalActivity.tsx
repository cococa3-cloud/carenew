
import React from 'react';
import { Play, Clock, Flame } from 'lucide-react';

const ExerciseCard = ({ title, duration, calories, image }: any) => (
  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm mb-6">
    <div className="h-48 bg-gray-200 relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-teal-600 shadow-xl transition-transform hover:scale-110">
          <Play size={32} fill="currentColor" />
        </button>
      </div>
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <div className="flex gap-4">
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <Clock size={16} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <Flame size={16} className="text-orange-500" />
          <span>{calories} kcal</span>
        </div>
      </div>
    </div>
  </div>
);

const PhysicalActivity: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">오늘의 추천 운동</h2>
        <p className="text-sm text-gray-500">매일 15분씩 움직이면 혈액순환에 좋아요.</p>
      </div>

      <ExerciseCard 
        title="팔다리 스트레칭" 
        duration="10분" 
        calories="45"
        image="https://picsum.photos/seed/yoga1/400/300"
      />
      <ExerciseCard 
        title="의자 앉아 체조" 
        duration="15분" 
        calories="60"
        image="https://picsum.photos/seed/yoga2/400/300"
      />
      <ExerciseCard 
        title="가벼운 실내 걷기" 
        duration="20분" 
        calories="85"
        image="https://picsum.photos/seed/yoga3/400/300"
      />
    </div>
  );
};

export default PhysicalActivity;
