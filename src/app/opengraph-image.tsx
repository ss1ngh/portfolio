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
    // Construct absolute URLs for Satori to fetch the local assets.
    // Requires DATA.url to be your exact production domain for live deployments.
    const pfpUrl = new URL("/pfp.png", DATA.url).toString();
    const bannerUrl = new URL("/banner.png", DATA.url).toString();

    // System font stack matching the native declarations in globals.css
    // Satori natively maps these to standard system glyphs without external fetching.
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
        {/* Background Banner Layer */}
        <img
          src={bannerUrl}
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
            flexDirection: "row", // Horizontal layout axis
            alignItems: "center", // Vertically aligns children on the cross-axis
            justifyContent: "space-between", // Maximizes space between the pfp and the text
            width: "100%",
            height: "100%",
            padding: "0 80px", // Inset padding to keep elements off the absolute edges
            zIndex: 1, // Establishes a new stacking context above the absolute elements
          }}
        >
          <img
            src={pfpUrl}
            alt={DATA.name}
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "120px", // 50% radius enforces a circular clipping mask
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
              textAlign: "right", // Right-aligns the text within its own bounding box
              letterSpacing: "-0.02em",
              maxWidth: "600px", // Constrains line length to prevent layout breaking
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
