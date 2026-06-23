"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 0", background: "transparent",
    border: "none", borderBottom: "1px solid #ddd",
    fontSize: 13, color: "#1a1a1a", outline: "none",
  };

  return (
    <main style={{ paddingTop: 68, backgroundColor: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ textAlign: "center", borderBottom: "1px solid #eee", paddingBottom: 40, marginBottom: 48 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "0.25em", color: "#1a1a1a" }}>CONTACT</h1>
          <div style={{ width: 1, height: 24, backgroundColor: "#ccc", margin: "16px auto 16px" }} />
          <p style={{ fontSize: 13, color: "#777" }}>접수 폼 / 이메일 / 다이렉트 전화 가능</p>
          <p style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>(이메일 주소를 반드시 적어주셔야 회신 드릴 수 있습니다)</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>

          {/* 폼 */}
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <p style={{ fontSize: 16, fontWeight: 700 }}>문의가 접수됐습니다</p>
              <p style={{ fontSize: 13, color: "#999" }}>빠른 시간 내 연락드리겠습니다</p>
              <button onClick={() => setSubmitted(false)} style={{ marginTop: 8, background: "none", border: "none", fontSize: 12, color: "#aaa", textDecoration: "underline", cursor: "pointer" }}>
                다시 문의하기
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <input type="text" name="name" value={form.name} onChange={onChange} required style={inp} placeholder="성함" />
              <input type="email" name="email" value={form.email} onChange={onChange} required style={inp} placeholder="이메일" />
              <input type="text" name="subject" value={form.subject} onChange={onChange} required style={inp} placeholder="제목" />
              <textarea name="message" value={form.message} onChange={onChange} rows={6}
                style={{ ...inp, resize: "none", paddingTop: 12 }} placeholder="내용을 입력해주세요" />
              <button type="submit" style={{
                backgroundColor: "#1a1a1a", color: "#fff",
                border: "none", padding: "14px 32px",
                fontSize: 13, fontWeight: 600, letterSpacing: "0.1em",
                cursor: "pointer", width: "fit-content",
              }}>
                문의하기
              </button>
            </form>
          )}

          {/* 연락처 정보 */}
          <div>
            <div style={{ backgroundColor: "#f5f5f5", padding: 24, marginBottom: 24, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center", color: "#999", fontSize: 12 }}>지도 영역</div>
            </div>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 10 }}>서울시 관악구 봉천동 673-88</p>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.9 }}>
              M. 010-7701-0929<br />
              E-mail. Uniongom@gmail.com
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
