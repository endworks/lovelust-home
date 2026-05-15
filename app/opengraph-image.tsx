import { readFileSync } from "fs";
import path from "path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "LoveLust: Sexual Health";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const svg = readFileSync(
    path.join(process.cwd(), "public", "lovelust.svg"),
  ).toString("base64");
  const logo = `data:image/svg+xml;base64,${svg}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} width={760} height={409} alt="" />
    </div>,
    { ...size },
  );
}
