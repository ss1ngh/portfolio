import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = DATA.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          position: "relative",
          padding: "80px",
        }}
      >
        <img
          src="/banner.png"
          alt="banner"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src="/pfp.webp"
            alt={DATA.name}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "40px",
              border: "6px solid rgba(255, 255, 255, 0.8)",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "100px",
                fontWeight: 700,
                color: "#ffffff",
                fontFamily: "system-ui, -apple-system, sans-serif",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              {DATA.name}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
