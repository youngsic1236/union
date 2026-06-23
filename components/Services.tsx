export default function Services() {
  return (
    <main style={{ paddingTop: 68, backgroundColor: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ textAlign: "center", borderBottom: "1px solid #eee", paddingBottom: 40, marginBottom: 48 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "0.25em", color: "#1a1a1a" }}>SERVICES</h1>
          <div style={{ width: 1, height: 24, backgroundColor: "#ccc", margin: "16px auto 0" }} />
        </div>

        {/* CASTING */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", textAlign: "center", marginBottom: 40 }}>CASTING</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }}>
            {[
              { t: "PROMOTER", d: "행사장, 박람회, 쇼룸, 전시,\n부스행사, 마케팅홍보대사,\n팝업, 전시 도우미 등" },
              { t: "MODEL", d: "바디프로필, 잡지를 필두로\nSNS, YOUTUBE, 촬영대행" },
              { t: "SUPERVISOR", d: "다수의 프로모터와 스태프 관리\n및 클라이언트와 현장\n진행 및 행사 운영" },
              { t: "STAFF", d: "현장에 알맞는 진행 지원,\n운영 지원을 위한\n전문 스태프 운영" },
            ].map((c) => (
              <div key={c.t}>
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 12 }}>{c.t}</p>
                <div style={{ width: 1, height: 28, backgroundColor: "#ddd", margin: "0 auto 12px" }} />
                <p style={{ fontSize: 12, color: "#777", lineHeight: 1.9, whiteSpace: "pre-line" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 1, backgroundColor: "#eee", marginBottom: 60 }} />

        {/* 서비스 유형 */}
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", textAlign: "center", marginBottom: 40 }}>서비스 유형</h2>
          {[
            { n: "01", en: "POP-UP STORE", ko: "팝업스토어 운영", d: "브랜드 팝업스토어의 현장 운영 스태프 공급. 부스 스태프 · 고객 응대 · 운영 지원" },
            { n: "02", en: "FESTA",        ko: "페스타 & 축제 인력", d: "대규모 페스타와 문화 축제 현장 인원 구성. 행사 진행 · 안내 · 현장 운영" },
            { n: "03", en: "CORPORATE",   ko: "스포츠 & 기업 행사", d: "기업 체육대회, 스포츠 이벤트 등 기업 행사 전문 인력. 기업 이벤트 · 스포츠 · 진행" },
            { n: "04", en: "PART-TIME",   ko: "아르바이트 대행", d: "단기 행사 아르바이트 모집부터 현장 투입까지 원스톱 처리. 단기 인력 · 빠른 섭외" },
          ].map((s, i) => (
            <div key={s.n} style={{ display: "grid", gridTemplateColumns: "48px 180px 1fr", gap: 24, alignItems: "start", padding: "24px 0", borderBottom: "1px solid #f0f0f0" }}>
              <span style={{ fontSize: 11, color: "#ccc", fontFamily: "monospace", paddingTop: 2 }}>{s.n}</span>
              <div>
                <p style={{ fontSize: 10, color: "#aaa", letterSpacing: "0.2em", marginBottom: 6 }}>{s.en}</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>{s.ko}</p>
              </div>
              <p style={{ fontSize: 12, color: "#888", lineHeight: 1.8 }}>{s.d}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
