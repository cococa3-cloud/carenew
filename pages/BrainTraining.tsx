
import React, { useState } from 'react';
import { 
  Calculator, 
  Type as Font, 
  Eye, 
  Puzzle, 
  Zap, 
  Lightbulb,
  X,
  CheckCircle2
} from 'lucide-react';
import { generateBrainQuiz } from '../services/geminiService';

const categories = [
  { id: 'math', title: '연산 놀이', icon: <Calculator />, color: 'bg-orange-100 text-orange-600', desc: '간단한 더하기 빼기' },
  { id: 'word', title: '단어 완성', icon: <Font />, color: 'bg-blue-100 text-blue-600', desc: '비어있는 글자 찾기' },
  { id: 'observation', title: '관찰력', icon: <Eye />, color: 'bg-green-100 text-green-600', desc: '다른 그림 찾기' },
  { id: 'logic', title: '논리 퀴즈', icon: <Puzzle />, color: 'bg-purple-100 text-purple-600', desc: '순서 맞추기' },
  { id: 'speed', title: '순발력', icon: <Zap />, color: 'bg-yellow-100 text-yellow-600', desc: '빠르게 반응하기' },
  { id: 'memory', title: '기억력', icon: <Lightbulb />, color: 'bg-pink-100 text-pink-600', desc: '카드 뒤집기' },
];

const BrainTraining: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [quiz, setQuiz] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const startQuiz = async (category: any) => {
    setSelectedCategory(category);
    setLoading(true);
    setQuiz(null);
    setUserAnswer(null);
    setIsCorrect(null);
    
    try {
      const data = await generateBrainQuiz(category.title);
      setQuiz(data);
    } catch (error) {
      console.error(error);
      alert('퀴즈를 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (option: string) => {
    setUserAnswer(option);
    setIsCorrect(option === quiz.answer);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setQuiz(null);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => startQuiz(cat)}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all active:scale-95"
          >
            <div className={`p-4 rounded-2xl mb-3 ${cat.color}`}>
              {/* Fix: Casting icon to React.ReactElement<any> resolves the "size does not exist" type error */}
              {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 32 })}
            </div>
            <h4 className="font-bold text-gray-800">{cat.title}</h4>
            <p className="text-[10px] text-gray-400 mt-1">{cat.desc}</p>
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-[40px] p-8 relative overflow-hidden">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            {loading ? (
              <div className="py-12 flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 font-bold">문제를 만드는 중...</p>
              </div>
            ) : quiz ? (
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${selectedCategory.color}`}>
                  {selectedCategory.title}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-6 leading-relaxed">
                  {quiz.question}
                </h3>
                
                <div className="space-y-3">
                  {quiz.options.map((option: string, idx: number) => (
                    <button
                      key={idx}
                      disabled={userAnswer !== null}
                      onClick={() => handleAnswer(option)}
                      className={`w-full p-4 text-left rounded-2xl border-2 transition-all font-bold ${
                        userAnswer === option 
                          ? isCorrect 
                            ? 'bg-green-50 border-green-500 text-green-700' 
                            : 'bg-red-50 border-red-500 text-red-700'
                          : 'bg-gray-50 border-transparent text-gray-700 hover:border-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {isCorrect !== null && (
                  <div className={`mt-6 p-4 rounded-2xl flex items-start gap-3 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                    <CheckCircle2 size={24} className={isCorrect ? 'text-green-500' : 'text-red-500'} />
                    <div>
                      <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        {isCorrect ? '정답입니다! 참 잘하셨어요!' : '아쉬워요! 정답은 ' + quiz.answer + '입니다.'}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">{quiz.explanation}</p>
                    </div>
                  </div>
                )}

                <button 
                  onClick={closeModal}
                  className="w-full mt-8 py-4 bg-teal-500 text-white rounded-2xl font-bold shadow-lg shadow-teal-100"
                >
                  다른 문제 풀기
                </button>
              </div>
            ) : (
              <div className="py-8 text-center">
                <p className="text-red-500 font-bold">오류가 발생했습니다.</p>
                <button onClick={closeModal} className="mt-4 text-teal-600 underline">돌아가기</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrainTraining;
