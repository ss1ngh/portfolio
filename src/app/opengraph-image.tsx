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
  try {
    const pfpBuffer = await fetch(
      new URL("../../public/pfp.png", import.meta.url),
    ).then((res) => res.arrayBuffer());

    const bannerBuffer = await fetch(
      new URL("../../public/banner.png", import.meta.url),
    ).then((res) => res.arrayBuffer());

    const systemFontStack =
      '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif';

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: "#000000",
        }}
      >
        <img
          src={bannerBuffer as unknown as string}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Overlay Layer for Text Contrast */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        {/* Foreground Content Layer */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "0 80px",
            zIndex: 1,
          }}
        >
          <img
            src={pfpBuffer as unknown as string}
            alt={DATA.name}
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "120px",
              border: "6px solid #ffffff",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              fontFamily: systemFontStack,
              fontSize: "72px",
              fontWeight: "600",
              color: "#ffffff",
              textAlign: "right",
              letterSpacing: "-0.02em",
              maxWidth: "600px",
            }}
          >
            {DATA.name}
          </div>
        </div>
      </div>,
      {
        ...size,
      },
    );
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(
      `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
      {
        status: 500,
      },
    );
  }
}
