import { ImageResponse } from "next/og";

export const alt = "iLab Tech Support | iPhone & Apple Repair Bahrain";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg,#0b0b0c 0%,#2a2a2d 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, letterSpacing: 4, color: "#c0c0c0" }}>
          ILAB TECH SUPPORT
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>
            iPhone &amp; Apple Repair
          </div>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05, color: "#c0c0c0" }}>
            in Bahrain
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#a0a0a0" }}>
          Genuine Apple displays · 1-year warranty · 3 service centers
        </div>
      </div>
    ),
    size,
  );
}
