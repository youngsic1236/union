import type { Metadata } from "next";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "서비스 | UNION GROUP",
  description: "팝업스토어, 페스타, 기업행사, 아르바이트 대행 등 유니온 그룹의 전문 행사 인력 서비스를 소개합니다.",
  keywords: "행사인력 서비스, 팝업스토어 스태프, 프로모터, 슈퍼바이저, 모델 캐스팅",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
}
