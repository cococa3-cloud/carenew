
# 케어링 (Caring) - 시니어 종합 케어 어플리케이션

시니어들의 두뇌 건강과 신체 활동을 돕는 종합 케어 서비스입니다.

## 주요 기능
- **두뇌 훈련**: Gemini AI 기반 맞춤형 퀴즈 및 게임 (6개 카테고리)
- **신체 활동**: 일일 맞춤형 스트레칭 및 운동 가이드
- **마음 공부**: 긍정적인 명언과 명상 가이드
- **나의 일기**: 음성 녹음 및 텍스트 기록, AI 감정 분석 및 피드백

## 기술 스택
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Google Gemini API (@google/genai)
- Lucide React (Icons)

## Vercel 배포 방법
1. 이 저장소를 GitHub에 업로드합니다.
2. [Vercel](https://vercel.com/)에 접속하여 새로운 프로젝트를 생성합니다.
3. GitHub 저장소를 연결합니다.
4. **Environment Variables** 설정 섹션에서 다음을 추가합니다:
   - `API_KEY`: Google AI Studio에서 발급받은 Gemini API 키
5. 'Deploy' 버튼을 누르면 배포가 완료됩니다.

## 로컬 실행 방법
```bash
npm install
npm run dev
```
