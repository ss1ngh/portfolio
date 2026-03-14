import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";
import { readFileSync } from "fs";
import { join } from "path";

// Keep the Node.js runtime to bypass the 1MB limit
export const runtime = "nodejs";

export const alt = DATA.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  try {
    // Read files as Node Buffers and immediately convert them to Base64 Data URIs.
    // This entirely prevents the "DataView" ArrayBuffer crash.
    const pfpBuffer = readFileSync(join(process.cwd(), "public", "pfp.png"));
    const pfpSrc = `data:image/png;base64,${pfpBuffer.toString("base64")}`;

    const bannerBuffer = readFileSync(
      join(process.cwd(), "public", "banner.png"),
    );
    const bannerSrc = `data:image/png;base64,${bannerBuffer.toString("base64")}`;

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
          src={bannerSrc}
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
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
            src={pfpSrc}
            alt={DATA.name}
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "200px",
              border: "6px solid #ffffff",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              fontFamily: systemFontStack,
              fontSize: "100px",
              fontWeight: "900",
              color: "#ffffff",
              textAlign: "right",
              letterSpacing: "-0.02em",
              maxWidth: "900px",
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
