
import React, { useState } from 'react';
import { Mic, Send, MicOff, History, Sparkles } from 'lucide-react';
import { analyzeDiary } from '../services/geminiService';

const Diary: React.FC = () => {
  const [content, setContent] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const handleSave = async () => {
    if (!content.trim()) return;
    
    setLoading(true);
    try {
      const result = await analyzeDiary(content);
      setAnalysis(result);
      // In a real app, we would save to local storage or a database
    } catch (error) {
      console.error(error);
      alert('분석 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const toggleRecording = () => {
    if (!isRecording) {
      // Logic for starting recording would go here
      setIsRecording(true);
      // Simulated transcription
      setTimeout(() => {
        setContent(prev => prev + (prev ? ' ' : '') + '오늘 손주들과 함께 공원에 가서 즐거운 시간을 보냈습니다. 날씨가 참 좋았어요.');
      }, 2000);
    } else {
      setIsRecording(false);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-[40px] p-6 shadow-sm border border-gray-100 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Sparkles className="text-amber-500" size={20} />
          오늘 하루는 어떠셨나요?
        </h3>
        
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="여기에 오늘 있었던 일들을 적어보세요. 목소리로 기록할 수도 있어요."
          className="w-full h-48 p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 text-lg leading-relaxed placeholder:text-gray-300 transition-all resize-none"
        />

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={toggleRecording}
            className={`flex-1 h-14 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
              isRecording 
                ? 'bg-red-100 text-red-600 animate-pulse' 
                : 'bg-teal-50 text-teal-600'
            }`}
          >
            {isRecording ? <MicOff size={24} /> : <Mic size={24} />}
            {isRecording ? '기록 중...' : '음성으로 기록'}
          </button>
          
          <button
            disabled={!content || loading}
            onClick={handleSave}
            className="w-14 h-14 bg-teal-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 disabled:opacity-30 disabled:shadow-none transition-all active:scale-95"
          >
            {loading ? <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div> : <Send size={24} />}
          </button>
        </div>
      </div>

      {analysis && (
        <div className="bg-gradient-to-br from-teal-50 to-sky-50 p-6 rounded-[30px] border border-teal-100 mb-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={20} className="text-teal-600" />
            <h4 className="font-bold text-teal-800">인공지능의 따뜻한 한마디</h4>
          </div>
          <p className="text-teal-900 font-bold mb-2">"{analysis.summary}"</p>
          <p className="text-sm text-teal-700 leading-relaxed">{analysis.feedback}</p>
        </div>
      )}

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4 px-2">
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <History size={18} className="text-gray-400" />
            지난 일기들
          </h3>
          <button className="text-sm text-teal-600 font-bold">전체보기</button>
        </div>
        
        <div className="space-y-3">
          <div className="p-4 bg-white rounded-2xl border border-gray-100 flex gap-4 items-center">
            <div className="text-center min-w-[50px]">
              <p className="text-xs text-gray-400">어제</p>
              <p className="text-xl font-black text-gray-800">23</p>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm text-gray-600 truncate">오늘은 병원에 다녀왔다. 간호사가 매우 친절했다...</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-gray-100 flex gap-4 items-center">
            <div className="text-center min-w-[50px]">
              <p className="text-xs text-gray-400">03.22</p>
              <p className="text-xl font-black text-gray-800">22</p>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm text-gray-600 truncate">날씨가 좋아서 시장 구경을 갔다. 맛있는 사과를 샀다...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diary;
