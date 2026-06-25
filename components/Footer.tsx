import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#fff", borderTop: "1px solid #eee", padding: "32px 32px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
          <Image src="/images/logo/union-logo-cropped.png" alt="UNION GROUP" width={20} height={20} style={{ objectFit: "contain", filter: "invert(1)" }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#1a1a1a" }}>UNION GROUP</span>
        </div>
        <p style={{ fontSize: 11, color: "#aaa", lineHeight: 2 }}>
          상호명 : 유니온 그룹 &nbsp; 대표 : 원용식<br />
          M. 010-7701-0929 &nbsp; E. Uniongom@gmail.com<br />
          서울시 관악구 봉천동 673-88
        </p>
        <p style={{ fontSize: 10, color: "#ccc", marginTop: 12 }}>© 2026 UNION GROUP. All rights reserved.</p>
      </div>
    </footer>
  );
}
