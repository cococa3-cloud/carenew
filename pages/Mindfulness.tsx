
import React from 'react';
import { Quote, Sparkles, Moon, Sun } from 'lucide-react';

const Mindfulness: React.FC = () => {
  return (
    <div className="p-6">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[40px] p-8 text-white mb-8 shadow-xl">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
            <Quote size={24} />
          </div>
          <Sparkles size={24} className="text-yellow-200 animate-pulse" />
        </div>
        <h3 className="text-xl font-bold leading-relaxed mb-4">
          "가장 늦었다고 생각할 때가 <br />가장 빠른 때입니다."
        </h3>
        <p className="text-indigo-100 text-sm">- 오늘의 명언</p>
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-4">마음 다스리기</h2>
      <div className="space-y-4">
        <button className="w-full p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl">
            <Sun size={24} />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-800">아침 명상</h4>
            <p className="text-xs text-gray-400 mt-1">하루를 상쾌하게 시작하는 5분</p>
          </div>
        </button>

        <button className="w-full p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
            <Moon size={24} />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-800">잠들기 전 평온</h4>
            <p className="text-xs text-gray-400 mt-1">숙면을 돕는 호흡법 10분</p>
          </div>
        </button>

        <button className="w-full p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-rose-100 text-rose-600 rounded-2xl">
            <Sparkles size={24} />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-800">감사 일기 읽기</h4>
            <p className="text-xs text-gray-400 mt-1">행복을 찾는 연습</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Mindfulness;
