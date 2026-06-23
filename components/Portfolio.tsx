"use client";

import { useState } from "react";
import Image from "next/image";

const works = [
  { id: 1, cat: "POP-UP STORE", title: "잠실 팝업 베이커리", date: "2025.12", imgs: ["/images/events/jamsil_1.jpg","/images/events/jamsil_2.jpg","/images/events/jamsil_3.jpg","/images/events/jamsil_4.jpg","/images/events/jamsil_5.jpg"] },
  { id: 2, cat: "FESTA",        title: "2025 궁디팡팡 캣페스타", date: "2025.12", imgs: ["/images/events/petfesta_1.jpg","/images/events/petfesta_2.jpg","/images/events/petfesta_3.jpg","/images/events/petfesta_4.jpg"] },
  { id: 3, cat: "POP-UP STORE", title: "송도 팝업 현장", date: "2025.12", imgs: ["/images/events/songdo_1.jpg","/images/events/songdo_2.jpg","/images/events/songdo_3.jpg"] },
  { id: 4, cat: "CORPORATE",    title: "LG 기업 행사", date: "2025.10", imgs: ["/images/events/lg_1.jpg","/images/events/lg_2.jpg","/images/events/lg_3.jpg","/images/events/lg_4.jpg"] },
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const allImgs = works.flatMap((w) => w.imgs.map((src) => ({ src, title: w.title, cat: w.cat, date: w.date })));

  return (
    <main style={{ paddingTop: 68, backgroundColor: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ textAlign: "center", borderBottom: "1px solid #eee", paddingBottom: 40, marginBottom: 48 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "0.25em", color: "#1a1a1a" }}>PORTFOLIO</h1>
          <div style={{ width: 1, height: 24, backgroundColor: "#ccc", margin: "16px auto 0" }} />
        </div>

        {/* 행사별 섹션 */}
        {works.map((w) => (
          <div key={w.id} style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #f0f0f0" }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>{w.title}</h2>
              <span style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.15em" }}>{w.cat}</span>
              <span style={{ fontSize: 11, color: "#bbb", marginLeft: "auto" }}>{w.date}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4 }}>
              {w.imgs.map((src, i) => (
                <div key={i} onClick={() => setLightbox(src)}
                  style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", backgroundColor: "#f5f5f5", cursor: "pointer" }}>
                  <Image src={src} alt={w.title} fill style={{ objectFit: "cover", transition: "transform 0.3s" }}
                    sizes="20vw"
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>

      {lightbox && (
        <div onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, backgroundColor: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <Image src={lightbox} alt="" width={1200} height={900} style={{ maxHeight: "85vh", width: "auto", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer" }}>×</button>
        </div>
      )}
    </main>
  );
}
