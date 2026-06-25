import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 68, backgroundColor: "#fff", minHeight: "calc(100vh - 160px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "60px 32px" }}>
          <p style={{ fontSize: 72, fontWeight: 900, color: "#f0f0f0", lineHeight: 1, marginBottom: 16 }}>404</p>
          <h1 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.15em", color: "#1a1a1a", marginBottom: 12 }}>PAGE NOT FOUND</h1>
          <div style={{ width: 1, height: 32, backgroundColor: "#ddd", margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, color: "#999", marginBottom: 32 }}>요청하신 페이지를 찾을 수 없습니다.</p>
          <Link href="/" style={{
            display: "inline-block", backgroundColor: "#1a1a1a", color: "#fff",
            fontSize: 12, letterSpacing: "0.15em", padding: "12px 32px", fontWeight: 500,
          }}>
            홈으로 돌아가기
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
