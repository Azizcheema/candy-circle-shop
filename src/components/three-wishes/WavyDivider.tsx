interface WavyDividerProps {
  color?: string;
  position?: "top" | "bottom";
  variant?: "scallop" | "wave";
  className?: string;
  flip?: boolean;
}

export function WavyDivider({
  color = "#F5EDE0",
  position = "bottom",
  variant = "scallop",
  className = "",
  flip = false,
}: WavyDividerProps) {
  const isTop = position === "top";

  if (variant === "scallop") {
    return (
      <div
        className={`absolute left-0 right-0 w-full overflow-hidden leading-none ${
          isTop ? "top-0" : "bottom-0"
        } ${className}`}
        style={{
          transform: isTop
            ? flip
              ? "scaleY(-1)"
              : undefined
            : flip
            ? undefined
            : "scaleY(-1)",
        }}
      >
        <svg
          className="relative block w-full"
          style={{ height: "clamp(30px, 4vw, 60px)" }}
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C60,60 60,0 120,0 C180,0 180,60 240,60 C300,60 300,0 360,0 C420,0 420,60 480,60 C540,60 540,0 600,0 C660,0 660,60 720,60 C780,60 780,0 840,0 C900,0 900,60 960,60 C1020,60 1020,0 1080,0 C1140,0 1140,60 1200,60 C1260,60 1260,0 1320,0 C1380,0 1380,60 1440,60 L1440,60 L0,60 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none ${
        isTop ? "top-0" : "bottom-0"
      } ${className}`}
      style={{
        transform: isTop ? "rotate(180deg)" : undefined,
      }}
    >
      <svg
        className="relative block w-full"
        style={{ height: "clamp(30px, 4vw, 60px)" }}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 Q360,60 720,30 Q1080,0 1440,30 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
