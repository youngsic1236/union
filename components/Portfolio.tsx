"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "@/components/Img";

const works = [
  { id: 1,  cat: "POP-UP STORE", title: "잠실 팝업 베이커리", date: "2025.12", imgs: ["/images/events/jamsil_1.jpg","/images/events/jamsil_2.jpg","/images/events/jamsil_3.jpg","/images/events/jamsil_4.jpg","/images/events/jamsil_5.jpg","/images/events/jamsil_6.jpg","/images/events/jamsil_7.jpg","/images/events/jamsil_8.jpg","/images/events/jamsil_9.jpg","/images/events/jamsil_10.jpg","/images/events/jamsil_11.jpg"] },
  { id: 2,  cat: "POP-UP STORE", title: "Wiim 브랜드 팝업", date: "2025.12", imgs: Array.from({length:15},(_,i)=>`/images/events/wiim_${i+1}.jpg`) },
  { id: 3,  cat: "POP-UP STORE", title: "KBL×Marvel 팝업 (종합운동장)", date: "2025.12", imgs: Array.from({length:5},(_,i)=>`/images/events/kbl_stadium_${i+1}.jpg`) },
  { id: 4,  cat: "POP-UP STORE", title: "KBL×Marvel 팝업 (잠실 롯데백화점)", date: "2025.11", imgs: Array.from({length:6},(_,i)=>`/images/events/kbl_lotte_${i+1}.jpg`) },
  { id: 5,  cat: "POP-UP STORE", title: "성수 강지 팝업", date: "2025.11", imgs: Array.from({length:5},(_,i)=>`/images/events/seongsu_${i+1}.jpg`) },
  { id: 6,  cat: "FESTA",        title: "2025 궁디팡팡 캣페스타", date: "2025.12", imgs: ["/images/events/petfesta_1.jpg","/images/events/petfesta_2.jpg","/images/events/petfesta_3.jpg","/images/events/petfesta_4.jpg","/images/events/petfesta_5.jpg","/images/events/petfesta_6.jpg","/images/events/petfesta_7.jpg"] },
  { id: 7,  cat: "FESTA",        title: "어텀 페스타", date: "2025.10", imgs: Array.from({length:5},(_,i)=>`/images/events/autumn_${i+1}.jpg`) },
  { id: 8,  cat: "FESTA",        title: "AI Festa / AI Week", date: "2025.10", imgs: Array.from({length:6},(_,i)=>`/images/events/aifesta_${i+1}.jpg`) },
  { id: 9,  cat: "FESTA",        title: "타이 페스타", date: "2025.09", imgs: Array.from({length:5},(_,i)=>`/images/events/thaifesta_${i+1}.jpg`) },
  { id: 10, cat: "FESTA",        title: "맥주 페스타", date: "2025.08", imgs: Array.from({length:5},(_,i)=>`/images/events/beer_${i+1}.jpg`) },
  { id: 11, cat: "FESTA",        title: "스프링 위크", date: "2025.04", imgs: Array.from({length:4},(_,i)=>`/images/events/springweek_${i+1}.jpg`) },
  { id: 12, cat: "POP-UP STORE", title: "송도 팝업 현장", date: "2025.12", imgs: ["/images/events/songdo_1.jpg","/images/events/songdo_2.jpg","/images/events/songdo_3.jpg","/images/events/songdo_4.jpg"] },
  { id: 13, cat: "CORPORATE",    title: "코리아 핀테크위크 2025", date: "2025.11", imgs: Array.from({length:5},(_,i)=>`/images/events/fintech_${i+1}.jpg`) },
  { id: 14, cat: "CORPORATE",    title: "LG 기업 행사", date: "2025.10", imgs: ["/images/events/lg_1.jpg","/images/events/lg_2.jpg","/images/events/lg_3.jpg","/images/events/lg_4.jpg","/images/events/lg_5.jpg"] },
];

const CATS = ["ALL", "POP-UP STORE", "FESTA", "CORPORATE"] as const;
type Cat = typeof CATS[number];

type LightboxState = { imgs: string[]; index: number } | null;

export default function Portfolio() {
  const [filter, setFilter] = useState<Cat>("ALL");
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const filtered = filter === "ALL" ? works : works.filter((w) => w.cat === filter);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((lb) => lb && lb.index > 0 ? { ...lb, index: lb.index - 1 } : lb);
  }, []);

  const next = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((lb) => lb && lb.index < lb.imgs.length - 1 ? { ...lb, index: lb.index + 1 } : lb);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") setLightbox((lb) => lb && lb.index > 0 ? { ...lb, index: lb.index - 1 } : lb);
      if (e.key === "ArrowRight") setLightbox((lb) => lb && lb.index < lb.imgs.length - 1 ? { ...lb, index: lb.index + 1 } : lb);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close]);

  const btnStyle: React.CSSProperties = {
    position: "absolute", top: "50%", transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.15)", border: "none", color: "#fff",
    fontSize: 24, width: 44, height: 44, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer",
  };

  return (
    <div style={{ paddingTop: 68, backgroundColor: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ textAlign: "center", borderBottom: "1px solid #eee", paddingBottom: 40, marginBottom: 48 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "0.25em", color: "#1a1a1a" }}>PORTFOLIO</h1>
          <div style={{ width: 1, height: 24, backgroundColor: "#ccc", margin: "16px auto 24px" }} />

          <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  fontSize: 11, letterSpacing: "0.12em", padding: "7px 18px",
                  border: "1px solid",
                  borderColor: filter === c ? "#1a1a1a" : "#ddd",
                  backgroundColor: filter === c ? "#1a1a1a" : "transparent",
                  color: filter === c ? "#fff" : "#999",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.map((w) => (
          <div key={w.id} data-fade style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #f0f0f0" }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>{w.title}</h2>
              <span style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.15em" }}>{w.cat}</span>
              <span style={{ fontSize: 11, color: "#bbb", marginLeft: "auto" }}>{w.date}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: 4 }}>
              {w.imgs.map((src, i) => (
                <div key={i} onClick={() => setLightbox({ imgs: w.imgs, index: i })}
                  style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", backgroundColor: "#f5f5f5", cursor: "pointer" }}>
                  <Image src={src} alt={`${w.title} ${i + 1}`} fill style={{ objectFit: "cover", transition: "transform 0.3s" }}
                    sizes="(max-width: 768px) 50vw, 20vw"
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
        <div onClick={close}
          style={{ position: "fixed", inset: 0, zIndex: 100, backgroundColor: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ position: "relative", maxHeight: "85vh", maxWidth: "90vw", display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.imgs[lightbox.index]}
              alt="포트폴리오 이미지"
              width={1200}
              height={900}
              style={{ maxHeight: "85vh", maxWidth: "90vw", objectFit: "contain", width: "auto", height: "auto" }}
            />

            {lightbox.index > 0 && (
              <button aria-label="이전 이미지" onClick={prev} style={{ ...btnStyle, left: -52 }}>‹</button>
            )}
            {lightbox.index < lightbox.imgs.length - 1 && (
              <button aria-label="다음 이미지" onClick={next} style={{ ...btnStyle, right: -52 }}>›</button>
            )}

            <div style={{ position: "absolute", bottom: -32, left: "50%", transform: "translateX(-50%)", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
              {lightbox.index + 1} / {lightbox.imgs.length}
            </div>
          </div>

          <button
            aria-label="닫기"
            onClick={close}
            style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer" }}>×</button>
        </div>
      )}
    </div>
  );
}
