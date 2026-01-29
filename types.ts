
export interface BrainGame {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  type: 'math' | 'word' | 'memory' | 'logic' | 'speed' | 'observation';
}

export interface DiaryEntry {
  id: string;
  date: string;
  content: string;
  type: 'text' | 'voice';
  summary?: string;
}

export interface Exercise {
  id: string;
  title: string;
  duration: string;
  level: 'easy' | 'medium' | 'hard';
  imageUrl: string;
}
