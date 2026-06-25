import Image from "next/image";

export default function About() {
  return (
    <div style={{ paddingTop: 68, backgroundColor: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px" }}>

        {/* Hero 이미지 + 소개 */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 60, marginBottom: 60, alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", backgroundColor: "#f0f0f0" }}>
            <Image src="/images/events/petfesta_2.jpg" alt="유니온 그룹" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 40vw" />
          </div>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", marginBottom: 16, color: "#1a1a1a" }}>UNION GROUP</h2>
            <p style={{ fontSize: 13, color: "#777", marginBottom: 8, letterSpacing: "0.1em" }}>대표 / 원용식</p>
            <div style={{ width: 32, height: 1, backgroundColor: "#ccc", margin: "20px 0" }} />
            <p style={{ fontSize: 13, color: "#555", lineHeight: 2 }}>
              팝업스토어, 페스타, 기업 행사 등<br />
              다양한 현장에 검증된 인력을 공급하는<br />
              전문 행사 인력 에이전시입니다.
            </p>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 2, marginTop: 16 }}>
              대표가 직접 상담부터 현장 투입,<br />
              사후 관리까지 책임집니다.
            </p>
          </div>
        </div>

        <div style={{ height: 1, backgroundColor: "#eee", marginBottom: 60 }} />

        {/* CASTING PROCESS */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.2em", marginBottom: 16 }}>CASTING PROCESS</h2>
          <div style={{ width: 1, height: 24, backgroundColor: "#ccc", margin: "0 auto" }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 32, marginBottom: 60 }}>
          {[
            { n: "01", t: "의뢰", d: "행사 내용 및 일정 의뢰 접수" },
            { n: "02", t: "행사 내용 분석", d: "행사 기획 및 브랜드 분석\n행사 장소에 따른 행사 대상 분석" },
            { n: "03", t: "미팅", d: "클라이언트와 온/오프라인 미팅\n견적 제안 및 검토" },
            { n: "04", t: "1차 LIST UP", d: "기업 및 브랜드의 이미지에 어울리는 프로모터 1차 자체 선별 후 프로필 제출" },
            { n: "05", t: "2차 LIST UP", d: "클라이언트와 함께 최종 인원 선별\n브랜드 및 기업 교육자료 전달" },
            { n: "06", t: "최종 선발", d: "인원들을 통한 최종 인원 선발\n브랜드 및 기업 교육자료 전달" },
            { n: "07", t: "일정 진행", d: "현장 상황에 따라 탄력적으로 관리\n현장 담당자와 수시 소통" },
            { n: "08", t: "결과 보고", d: "행사 종료 후 클라이언트에게 피드백\n및 성과 결과 보고" },
          ].map((p) => (
            <div key={p.n} style={{ paddingBottom: 24, borderBottom: "1px solid #f0f0f0" }}>
              <p style={{ fontSize: 28, fontWeight: 900, color: "#e0e0e0", marginBottom: 8 }}>{p.n}</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>{p.t}</p>
              <p style={{ fontSize: 11, color: "#999", lineHeight: 1.8, whiteSpace: "pre-line" }}>{p.d}</p>
            </div>
          ))}
        </div>

        <div style={{ height: 1, backgroundColor: "#eee", marginBottom: 60 }} />

        {/* CASTING POINT */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.2em", marginBottom: 16 }}>CASTING POINT</h2>
          <div style={{ width: 1, height: 24, backgroundColor: "#ccc", margin: "0 auto" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 40, textAlign: "center" }}>
          {[
            { t: "프로모터", d: "각 브랜드와 기업의 이미지에 어울리는 인원 선별\n자체 DB 분석을 통한 인원 선별\n기본 경력 5년 - 10년 이상의 다양한 경험자 투입\n모델, 배우 출신의 비주얼이 뛰어난 프로모터 선발\n행사 프로그램 아이디어가 뛰어난 인원도 선별" },
            { t: "슈퍼바이저", d: "기본 경력 5년 - 10년 이상의 전문 슈퍼바이저 투입\n행사 전반의 인원, 인력, 물자, 공간 관리에 능한 인재 선발\n클라이언트 및 담당자와 원활한 소통으로 높은 신뢰도\n현장 상황에 맞는 솔루션 능력 보유 인재 선발" },
            { t: "스태프", d: "행사 특성에 맞지 않는 무경험자 없음\n3000명 이상의 자체 DB풀을 통해 즉시 투입 가능한 인원 선발\n기본 경력 3년 이상의 전문 운영 스태프 투입" },
          ].map((c) => (
            <div key={c.t}>
              <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 16, color: "#1a1a1a" }}>{c.t}</p>
              <div style={{ width: 1, height: 20, backgroundColor: "#ccc", margin: "0 auto 16px" }} />
              <p style={{ fontSize: 12, color: "#777", lineHeight: 2, whiteSpace: "pre-line" }}>{c.d}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
