import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-gradient-to-b from-[#FFFAF2] via-[#FFF1E1] to-[#FFE2C7] font-sans text-gray-900 antialiased transition-colors dark:from-[#161320] dark:via-[#1B1726] dark:to-[#21192B] dark:text-gray-100"
      >
        {children}
      </body>
    </html>
  );
}
