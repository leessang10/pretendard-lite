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

### 스타일 라이브러리별 사용법

#### Tailwind CSS

```javascript
// 1. 먼저 CSS를 import 합니다
// src/styles/globals.css 또는 main CSS 파일
@import 'pretendard-lite/style.css';

// 2. Tailwind 설정에 폰트를 추가합니다
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
};

// 3. 사용 예시
// className="font-sans"로 적용됩니다
```

#### Styled Components

```javascript
// globalStyle.js
import { createGlobalStyle } from 'styled-components';
import 'pretendard-lite/style.css';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--font-sans);
  }
`;

// App.js
import { GlobalStyle } from './globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 나머지 컴포넌트들 */}
    </>
  );
}
```

#### Emotion

```javascript
// globalStyles.js
import { Global, css } from '@emotion/react';
import 'pretendard-lite/style.css';

export const globalStyles = (
  <Global
    styles={css`
      body {
        font-family: var(--font-sans);
      }
    `}
  />
);

// App.js
import { globalStyles } from './globalStyles';

function App() {
  return (
    <>
      {globalStyles}
      {/* 나머지 컴포넌트들 */}
    </>
  );
}
```

#### Next.js

```javascript
// pages/_app.js 또는 pages/_app.tsx
import 'pretendard-lite/style.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

#### Vue.js

```javascript
// main.js
import 'pretendard-lite/style.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

#### Angular

```css
/* styles.css */
@import 'pretendard-lite/style.css';

:root {
  --font-sans: 'Pretendard', system-ui, sans-serif;
}

body {
  font-family: var(--font-sans);
}
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
