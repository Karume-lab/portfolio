import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const openGraphImage = async (): Promise<ImageResponse> => {
  const me = `${process.env.NEXT_PUBLIC_APP_URL}/core/me.png`;

  return new ImageResponse(
    <div tw="flex flex-col items-center justify-center w-full h-full bg-black text-white">
      {/* biome-ignore lint/performance/noImgElement: <Image /> cannot be used here */}
      <img
        src={me}
        alt="Daniel Karume"
        style={{
          filter: "grayscale(75%)",
        }}
      />
    </div>,
    {
      ...size,
    },
  );
};

export default openGraphImage;
