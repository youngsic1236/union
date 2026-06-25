import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "회사 소개 | UNION GROUP",
  description: "유니온 그룹 소개 — 대표 원용식이 직접 상담부터 현장 투입, 사후 관리까지 책임지는 전문 행사 인력 에이전시입니다.",
  keywords: "유니온그룹 소개, 행사인력 에이전시, 원용식, 캐스팅 프로세스",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
