import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export const alt = DATA.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  try {
    const cabinetGrotesk = readFileSync(
      join(process.cwd(), "public/fonts/CabinetGrotesk-Medium.ttf"),
    );
    const clashDisplay = readFileSync(
      join(process.cwd(), "public/fonts/ClashDisplay-Semibold.ttf"),
    );

    const pfpBuffer = readFileSync(join(process.cwd(), "public", "pfp.png"));
    const pfpSrc = `data:image/png;base64,${pfpBuffer.toString("base64")}`;

    const pixelTreeBuffer = readFileSync(
      join(process.cwd(), "public", "pixelatedTree.png"),
    );
    const pixelTreeSrc = `data:image/png;base64,${pixelTreeBuffer.toString("base64")}`;

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          padding: "40px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FAFAFA",
            border: "1px solid #E5E5E5",
            borderRadius: "24px",
            padding: "60px",
            position: "relative",
          }}
        >
          {/* Top Section: Pixel Tree */}
          <div
            style={{
              display: "flex",
              marginBottom: "auto",
            }}
          >
            <img
              src={pixelTreeSrc}
              alt="Pixel Tree"
              style={{
                width: "230px",
                height: "230px",
                // borderRadius: "125px",
                // border: "1px solid #E5E5E5",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Bottom Section: Text with PFP */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center", // Align items vertically in the name container
                marginBottom: "8px",
              }}
            >
              {/* Shifted PFP */}
              <img
                src={pfpSrc}
                alt={DATA.name}
                style={{
                  width: "80px", // Smaller size
                  height: "80px", // Smaller size
                  borderRadius: "40px", // Maintain circular shape
                  border: "1px solid #E5E5E5",
                  objectFit: "cover",
                  marginRight: "16px", // Space between PFP and name
                }}
              />
              {/* Name */}
              <div
                style={{
                  display: "flex",
                  fontFamily: "Clash Display",
                  fontSize: "100px",
                  fontWeight: 600,
                  color: "#0A0A0A",
                  letterSpacing: "-0.04em",
                  textTransform: "lowercase",
                }}
              >
                {DATA.name}
              </div>
            </div>
            {/* Tagline and URL */}
            <div
              style={{
                display: "flex",
                fontFamily: "Cabinet Grotesk",
                fontSize: "32px",
                fontWeight: 400,
                color: "#737373",
                letterSpacing: "-0.01em",
              }}
            >
              engineering the modern web • {DATA.url.replace("https://", "")}
            </div>
          </div>
        </div>
      </div>,
      {
        ...size,
        fonts: [
          {
            name: "Cabinet Grotesk",
            data: cabinetGrotesk,
            weight: 400,
            style: "normal",
          },
          {
            name: "Clash Display",
            data: clashDisplay,
            weight: 600,
            style: "normal",
          },
        ],
      },
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response(
      `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
      { status: 500 },
    );
  }
}
