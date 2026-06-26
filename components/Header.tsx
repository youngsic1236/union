"use client";

import { useState, useEffect } from "react";
import Image from "@/components/Img";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "HOME", href: "/" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "#fff", borderBottom: "1px solid #eee" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/images/logo/union-logo-cropped.png" alt="UNION GROUP" width={30} height={30} style={{ objectFit: "contain", filter: "invert(1)" }} />
          <span style={{ fontFamily: "'Noto Sans KR'", fontWeight: 700, fontSize: 13, letterSpacing: "0.18em", color: "#1a1a1a" }}>UNION GROUP</span>
        </Link>

        <nav style={{ display: "flex", gap: 32 }} className="hidden md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 12,
              letterSpacing: "0.12em",
              color: pathname === l.href ? "#1a1a1a" : "#999",
              fontWeight: pathname === l.href ? 700 : 400,
              borderBottom: pathname === l.href ? "1.5px solid #1a1a1a" : "none",
              paddingBottom: 2,
            }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", display: "flex", flexDirection: "column", gap: 5 }}>
          <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#1a1a1a" }} />
          <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#1a1a1a" }} />
          <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#1a1a1a" }} />
        </button>
      </div>

      {open && (
        <div style={{ backgroundColor: "#fff", borderTop: "1px solid #eee", padding: "24px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: 13, letterSpacing: "0.12em", color: pathname === l.href ? "#1a1a1a" : "#999", fontWeight: pathname === l.href ? 700 : 400 }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
