import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import FadeObserver from "@/components/FadeObserver";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4000"),
  title: "UNION GROUP | 유니온 그룹 행사인력 에이전시",
  description: "유니온 그룹은 팝업스토어, 페스타, 기업행사 등 다양한 현장에 최적의 행사 인력을 제공하는 전문 에이전시입니다.",
  keywords: "행사인력, 에이전시, 팝업스토어, 유니온그룹, 행사스태프, 도우미",
  openGraph: {
    title: "UNION GROUP | 유니온 그룹 행사인력 에이전시",
    description: "유니온 그룹은 팝업스토어, 페스타, 기업행사 등 다양한 현장에 최적의 행사 인력을 제공하는 전문 에이전시입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "UNION GROUP",
    images: [{ url: "/images/logo/union-logo-cropped.png", width: 387, height: 276 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "유니온 그룹",
  alternateName: "UNION GROUP",
  description: "팝업스토어, 페스타, 기업행사 등 다양한 현장에 최적의 행사 인력을 제공하는 전문 에이전시",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4000",
  telephone: "010-7701-0929",
  email: "Uniongom@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "봉천동 673-88",
    addressLocality: "관악구",
    addressRegion: "서울특별시",
    addressCountry: "KR",
  },
  founder: { "@type": "Person", name: "원용식" },
  knowsAbout: ["행사인력", "팝업스토어", "프로모터", "슈퍼바이저", "행사스태프"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col bg-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollToTop />
        <FadeObserver />
      </body>
    </html>
  );
}
