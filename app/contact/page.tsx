import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "문의하기 | UNION GROUP",
  description: "유니온 그룹에 행사 인력 문의를 남겨주세요. 빠른 시간 내 답변 드리겠습니다.",
  keywords: "행사인력 문의, 유니온그룹 연락처, 행사스태프 견적",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
