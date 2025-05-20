# Pretendard Lite

가볍고 빠른 프리텐다드 폰트 패키지입니다.

## 설치

```bash
npm install pretendard-lite
```

## 사용 방법

### JavaScript/TypeScript

```javascript
// ESM
import 'pretendard-lite/style.css';

// CommonJS
require('pretendard-lite/style.css');
```

### Next.js

```javascript
// pages/_app.js 또는 pages/_app.tsx
import 'pretendard-lite/style.css';
```

### CSS

```css
body {
  font-family: var(--font-sans);
}

/* 폰트 웨이트 사용 예시 */
.light-text {
  font-weight: 300;
}

.regular-text {
  font-weight: 400;
}

.bold-text {
  font-weight: 700;
}
```

## 특징

- Light(300), Regular(400), Bold(700) 웨이트 지원
- woff2 포맷 사용으로 최적화된 로딩
- CSS 변수를 통한 쉬운 적용
- 모든 주요 프레임워크 지원 (React, Vue, Angular 등)

## 라이선스

MIT License
