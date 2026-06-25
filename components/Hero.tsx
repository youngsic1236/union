import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div style={{ paddingTop: 68, backgroundColor: "#fff" }}>

      {/* 메인 슬로건 */}
      <div style={{ textAlign: "center", padding: "72px 32px 48px", borderBottom: "1px solid #eee" }}>
        <p style={{ fontSize: 13, color: "#999", letterSpacing: "0.1em", marginBottom: 20 }}>
          " 유니온 그룹만의 특별한 인력 솔루션을 지금 만나보세요 "
        </p>
        <p style={{ fontSize: 13, color: "#555", lineHeight: 2, marginBottom: 28 }}>
          유니온 그룹은 하나의 행사 1:1 맞춤 상담과 컨셉회의,<br />
          인원 섭외까지 <strong>올인원 서비스 시스템</strong>을 제공합니다.
        </p>
        <p style={{ fontSize: 15, color: "#1a1a1a", lineHeight: 2, marginBottom: 32, fontWeight: 500 }}>
          &lsquo;느낌있는 사람들&rsquo; 로<br />
          &lsquo;분위기 있는 현장&rsquo; 을<br />
          유니온 에이전시와 함께해 드립니다
        </p>
        <Link href="/portfolio" style={{ display: "inline-block", backgroundColor: "#2d5a4e", color: "#fff", fontSize: 12, letterSpacing: "0.15em", padding: "12px 32px", fontWeight: 500 }}>
          회사 소개서 보기
        </Link>
      </div>

      {/* 이미지 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 4, padding: 4 }}>
        {[
          "/images/events/jamsil_1.jpg",
          "/images/events/petfesta_1.jpg",
          "/images/events/songdo_1.jpg",
          "/images/events/lg_1.jpg",
          "/images/events/jamsil_2.jpg",
          "/images/events/petfesta_2.jpg",
          "/images/events/songdo_2.jpg",
          "/images/events/lg_2.jpg",
        ].map((src, i) => (
          <div key={i} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", backgroundColor: "#f0f0f0" }}>
            <Image src={src} alt="" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 50vw, 25vw" />
          </div>
        ))}
      </div>

      {/* see more */}
      <div style={{ textAlign: "center", padding: "20px", borderBottom: "1px solid #eee" }}>
        <Link href="/portfolio" style={{ fontSize: 12, color: "#999", letterSpacing: "0.15em" }}>see more →</Link>
      </div>

      {/* 서비스 소개 */}
      <div data-fade style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px", borderBottom: "1px solid #eee" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 60, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.05em", marginBottom: 20, color: "#1a1a1a" }}>ONLINE PROMOTION</h2>
            <ul style={{ listStyle: "none", lineHeight: 2.2, color: "#555", fontSize: 13 }}>
              <li>온라인 대행</li>
              <li>서비스 활용</li>
              <li>SNS 홍보</li>
              <li>기타 홍보</li>
              <li>YOUTUBE 및 영상 제작</li>
              <li style={{ marginTop: 8 }}>배우, 모델, 인플루언서 섭외</li>
            </ul>
          </div>
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", backgroundColor: "#f5f5f5" }}>
            <Image src="/images/events/petfesta_3.jpg" alt="" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 40vw" />
          </div>
        </div>
      </div>

      {/* CASTING */}
      <div data-fade style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px", borderBottom: "1px solid #eee", textAlign: "center" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.2em", marginBottom: 48 }}>CASTING</h2>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 24, textAlign: "center" }}>
          {[
            { title: "PROMOTER", desc: "행사장, 박람회, 쇼룸, 전시,\n부스행사, 마케팅홍보대사,\n팝업, 전시 도우미 등" },
            { title: "MODEL", desc: "바디프로필, 잡지를 필두로\nSNS, YOUTUBE, 촬영대행" },
            { title: "SUPERVISOR", desc: "다수의 프로모터와 스태프 관리\n및 클라이언트 및 현장\n진행 및 행사 운영" },
            { title: "STAFF", desc: "현장에 알맞는 진행 지원,\n운영 지원을 위한\n전문 스태프 운영" },
          ].map((c) => (
            <div key={c.title}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 12, color: "#1a1a1a" }}>{c.title}</p>
              <div style={{ width: 1, height: 32, backgroundColor: "#ccc", margin: "0 auto 12px" }} />
              <p style={{ fontSize: 12, color: "#777", lineHeight: 1.8, whiteSpace: "pre-line" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 문제점 vs 솔루션 */}
      <div data-fade style={{ backgroundColor: "#1a1a1a", color: "#fff", padding: "60px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 16, letterSpacing: "0.2em", fontWeight: 700, marginBottom: 48 }}>현황 인력 파견의 문제점</h2>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 32, marginBottom: 48 }}>
            {[
              { n: "01", t: "비합리적 단가 견적", d: "인프라도 없이 필요 이상 많은 단가를 제시하고 질 낮은 서비스를 제공" },
              { n: "02", t: "진행 노하우", d: "현장 행사 운영경험 없이 무조건 인원만 배치하고 현장 관리 전혀 안됨" },
              { n: "03", t: "무작위 인원 선별", d: "행사별로 그때그때 급하게 인원을 선별하고 검증 없이 무작위 배치" },
              { n: "04", t: "진행 채널 이슈", d: "대표와의 1대1 소통보다 여러 단계 거쳐서 진행되어 의사소통이 고려 된 서비스 불가" },
            ].map((i) => (
              <div key={i.n}>
                <p style={{ fontSize: 22, fontWeight: 900, color: "rgba(255,255,255,0.2)", marginBottom: 8 }}>{i.n}</p>
                <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{i.t}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{i.d}</p>
              </div>
            ))}
          </div>

          <h2 style={{ textAlign: "center", fontSize: 16, letterSpacing: "0.2em", fontWeight: 700, marginBottom: 40 }}>UNION SOLUTIONS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 32 }}>
            {[
              { n: "01", t: "합리적 단가", d: "인력만 뽑아 파견하는것이 아닌 행사 기획 및 서비스 관리 진행가능한 솔루션 제공" },
              { n: "02", t: "다양한 장르의 경력", d: "행사팀장부터 다양한 경험 보유. 행사 진행을 단계별로 세분화하여 전문적으로 관리" },
              { n: "03", t: "자체 교육 진행", d: "유니온 그룹 자체적으로 모집하여 교육 및 CS교육을 이수한 인원만 배치" },
              { n: "04", t: "진행 채널 세분화", d: "통화 문자로도 빠른 소통이 가능한 전문 인력배치. 사전 담당자와 소통과 일정관리 및 전문 현장 완수" },
            ].map((i) => (
              <div key={i.n}>
                <p style={{ fontSize: 22, fontWeight: 900, color: "rgba(255,255,255,0.2)", marginBottom: 8 }}>{i.n}</p>
                <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{i.t}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CLIENT */}
      <div data-fade style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px", textAlign: "center", borderTop: "1px solid #eee" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.2em", marginBottom: 40 }}>CLIENT</h2>
        <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: 24, alignItems: "center" }}>
          {["기아", "LG", "SK텔레콤", "올리브영", "현대", "KBL", "삼양라면", "한성백제", "궁디팡팡", "Wiim"].map((c) => (
            <div key={c} style={{ padding: "16px 8px", borderRadius: 4, backgroundColor: "#f9f9f9", fontSize: 12, color: "#555", fontWeight: 600, letterSpacing: "0.05em" }}>
              {c}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
