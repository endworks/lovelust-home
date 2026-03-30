import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "LoveLust: Sexual Health";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://lovelust.health";
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #fcf9f8 0%, #ffe4ec 60%, #fcf9f8 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${appUrl}/icon.png`}
          width={120}
          height={120}
          alt=""
          style={{ borderRadius: 28 }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#1b1c1c",
            display: "flex",
          }}
        >
          Love
          <span style={{ color: "#f61e6d" }}>Lust</span>
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#4d444b",
            fontWeight: 400,
          }}
        >
          Sexual Health — Private &amp; Encrypted
        </div>
      </div>
    </div>,
    { ...size },
  );
}
