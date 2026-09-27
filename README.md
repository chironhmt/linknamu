# 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 Link in Bio 서비스입니다.

## 기술 스택

- Next.js 14 (App Router)
- Tailwind CSS
- MongoDB Atlas (클릭 수 저장)

## 시작하기

1. 의존성 설치

   ```bash
   npm install
   ```

2. 환경 변수 설정

   `.env.local.example`을 참고해 `.env.local` 파일을 만들고 MongoDB Atlas 연결 문자열을 채워주세요.

   ```bash
   cp .env.local.example .env.local
   ```

3. 개발 서버 실행

   ```bash
   npm run dev
   ```

   [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 프로젝트 구조

- `src/app` - 라우트 및 API 핸들러
- `src/components` - UI 컴포넌트
- `src/lib` - 프로필/링크 데이터, MongoDB 연결

## 데이터 수정

- 프로필 정보: `src/lib/profile.ts`
- 링크 카드 목록: `src/lib/links.ts`

## 클릭 수 집계

링크 카드를 클릭하면 `POST /api/links/[id]/click`이 호출되어 MongoDB의 `linkClicks` 컬렉션에 클릭 수가 누적됩니다.
