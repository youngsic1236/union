import type { Metadata } from "next";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "포트폴리오 | UNION GROUP",
  description: "유니온 그룹의 팝업스토어, 페스타, 기업행사 등 다양한 행사 현장 포트폴리오를 확인하세요.",
  keywords: "유니온그룹 포트폴리오, 팝업스토어, 페스타, 기업행사, 행사인력",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
