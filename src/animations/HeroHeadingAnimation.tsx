const driveText = "DRIVE IN";
const dripText = "DRIP OUT";

function getRandomDegree(idx: number) {
  // Each letter gets a "random" rotation but it's deterministic on idx for SSR/hydration reasons.
  const degrees = [-9, -5, 0, 7, 13, -11, 11, 0, 5, -7, 9, -13];
  return degrees[idx % degrees.length];
}

export default function HeroHeadingAnimation() {
  return (
    <h1
      className="font-bold mb-6 leading-tight flex flex-wrap justify-center"
      style={{
        fontFamily: "'Architype Aubette W90', sans-serif",
        fontSize: "8rem",
      }}
      data-section="hero-heading"
    >
      <span 
        className="flex flex-wrap"
        style={{
          color: "var(--brand-yellow)",
        }}
      >
        {driveText.split("").map((char, idx) =>
          char === " " ? (
            <span key={`drive-space-${idx}`} style={{ width: "0.5em" }} />
          ) : (
            <span
              key={`drive-${idx}`}
              className="inline-block"
              style={{
                transform: `rotate(${getRandomDegree(idx)}deg)`,
                transition: "transform 0.75s cubic-bezier(.66,.01,.43,1.05)",
                willChange: "transform",
                display: "inline-block",
                minWidth: "0.7em",
              }}
            >
              {char}
            </span>
          )
        )}
      </span>
      <span className="text-white flex flex-wrap ml-3">
        {dripText.split("").map((char, idx) =>
          char === " " ? (
            <span key={`drip-space-${idx}`} style={{ width: "0.5em" }} />
          ) : (
            <span
              key={`drip-${idx}`}
              className="inline-block"
              style={{
                transform: `rotate(${getRandomDegree(idx + driveText.length)}deg)`,
                transition: "transform 0.75s cubic-bezier(.66,.01,.43,1.05)",
                willChange: "transform",
                display: "inline-block",
                minWidth: "0.7em",
              }}
            >
              {char}
            </span>
          )
        )}
      </span>
    </h1>
  );
}
