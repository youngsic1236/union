import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNION GROUP | 유니온 그룹 행사인력 에이전시",
  description: "유니온 그룹은 팝업스토어, 페스타, 기업행사 등 다양한 현장에 최적의 행사 인력을 제공하는 전문 에이전시입니다.",
  keywords: "행사인력, 에이전시, 팝업스토어, 유니온그룹, 행사스태프, 도우미",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
