declare module 'pretendard-lite/style.css' {
  const content: any;
  export default content;
}

declare module 'pretendard-lite' {
  const fontFamily: string;
  export default fontFamily;
}

// CSS 변수 타입 선언
interface CSSProperties {
  '--font-sans': string;
}
