import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "HOME", href: "/" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#fff", borderTop: "1px solid #eee", padding: "40px 32px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 32, marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Image src="/images/logo/union-logo-cropped.png" alt="UNION GROUP" width={20} height={20} style={{ objectFit: "contain", filter: "invert(1)" }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#1a1a1a" }}>UNION GROUP</span>
          </div>

          <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: 11, letterSpacing: "0.12em", color: "#aaa" }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ fontSize: 11, color: "#aaa", lineHeight: 2 }}>
            상호명 : 유니온 그룹 &nbsp; 대표 : 원용식<br />
            M.&nbsp;<a href="tel:01077010929" style={{ color: "#aaa" }}>010-7701-0929</a>
            &nbsp;&nbsp;E.&nbsp;<a href="mailto:Uniongom@gmail.com" style={{ color: "#aaa" }}>Uniongom@gmail.com</a><br />
            서울시 관악구 봉천동 673-88
          </p>
          <p style={{ fontSize: 10, color: "#ccc" }}>© 2026 UNION GROUP. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
