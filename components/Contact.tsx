"use client";

import { useState } from "react";

const FORMSPREE_ID = "xaqgqgka";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 0", background: "transparent",
    border: "none", borderBottom: "1px solid #ddd",
    fontSize: 13, color: "#1a1a1a", outline: "none",
  };

  return (
    <div style={{ paddingTop: 68, backgroundColor: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ textAlign: "center", borderBottom: "1px solid #eee", paddingBottom: 40, marginBottom: 48 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "0.25em", color: "#1a1a1a" }}>CONTACT</h1>
          <div style={{ width: 1, height: 24, backgroundColor: "#ccc", margin: "16px auto 16px" }} />
          <p style={{ fontSize: 13, color: "#777" }}>접수 폼 / 이메일 / 다이렉트 전화 가능</p>
          <p style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>(이메일 주소를 반드시 적어주셔야 회신 드릴 수 있습니다)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 60 }}>

          {status === "done" ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <p style={{ fontSize: 16, fontWeight: 700 }}>문의가 접수됐습니다</p>
              <p style={{ fontSize: 13, color: "#999" }}>빠른 시간 내 연락드리겠습니다</p>
              <button onClick={() => { setStatus("idle"); setForm(INITIAL_FORM); }}
                style={{ marginTop: 8, background: "none", border: "none", fontSize: 12, color: "#aaa", textDecoration: "underline", cursor: "pointer" }}>
                다시 문의하기
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <input type="text" name="name" value={form.name} onChange={onChange} required style={inp} placeholder="성함" />
              <input type="email" name="email" value={form.email} onChange={onChange} required style={inp} placeholder="이메일" />
              <input type="text" name="subject" value={form.subject} onChange={onChange} required style={inp} placeholder="제목" />
              <textarea name="message" value={form.message} onChange={onChange} rows={6}
                style={{ ...inp, resize: "none", paddingTop: 12 }} placeholder="내용을 입력해주세요" />
              {status === "error" && (
                <p style={{ fontSize: 12, color: "#e00" }}>전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
              )}
              <button type="submit" disabled={isSending} style={{
                backgroundColor: isSending ? "#999" : "#1a1a1a", color: "#fff",
                border: "none", padding: "14px 32px",
                fontSize: 13, fontWeight: 600, letterSpacing: "0.1em",
                cursor: isSending ? "not-allowed" : "pointer", width: "fit-content",
              }}>
                {isSending ? "전송 중..." : "문의하기"}
              </button>
            </form>
          )}

          <div>
            <div style={{ marginBottom: 24, position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <iframe
                src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8B%9C+%EA%B4%80%EC%95%85%EA%B5%AC+%EB%B4%89%EC%B2%9C%EB%8F%99+673-88&hl=ko&output=embed"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 10 }}>서울시 관악구 봉천동 673-88</p>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.9 }}>
              M. <a href="tel:01077010929" style={{ color: "#555" }}>010-7701-0929</a><br />
              E-mail. <a href="mailto:Uniongom@gmail.com" style={{ color: "#555" }}>Uniongom@gmail.com</a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
