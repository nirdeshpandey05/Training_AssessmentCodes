
import React, { useMemo, useState } from "react";

type Color = "red" | "black" | "yellow" | "green";

interface Bubble {
  id: number;
  color: Color;
}

const BUBBLE_COUNT = 10; 

const bubbleContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(48px, 1fr))",
  gap: "12px",
  padding: "16px",
  maxWidth: 720,
  margin: "24px auto"
};

const bubbleStyleBase: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: "50%",
  cursor: "pointer",
  transition: "transform 120ms ease, box-shadow 120ms ease, opacity 120ms ease",
};

const getBubbleStyle = (color: Color): React.CSSProperties => ({
  ...bubbleStyleBase,
  background:
    color === "red"
      ? "#ff4d4f"
      : color === "yellow"
      ? "#fadb14"
      : color === "green"
      ? "#52c41a"
      : "#1f1f1f", 
  ...(color === "yellow"
    ? { boxShadow: "0 4px 10px rgba(250,219,20,0.35)" }
    : {}),
});

const getRandomColor = (): Color => {
  const colors: Color[] = ["red", "black", "yellow", "green"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Bubbles: React.FC = () => {
  const initialBubbles = useMemo<Bubble[]>(
    () =>
      Array.from({ length: BUBBLE_COUNT }, (_, i) => ({
        id: i + 1,
        color: getRandomColor(),
      })),
    []
  );

  const [bubbles, setBubbles] = useState<Bubble[]>(initialBubbles);
  const [clickedYellowCount, setClickedYellowCount] = useState<number>(0);

  const onBubbleClick = (index: number) => {
    setBubbles(prev => {
      const copy = [...prev];
      const b = copy[index];

      if (b.color === "yellow") {
        copy[index] = { ...b, color: "black" };
        setClickedYellowCount(c => c + 1);
      }

      return copy;
    });
  };

  const resetAll = () => {
    setBubbles(initialBubbles);
    setClickedYellowCount(0);
  };

  return (
    <div>
      <h2>Colored Bubbles</h2>
      <div style={bubbleContainerStyle}>
        {bubbles.map((b, idx) => (
          <button
            key={b.id}
            onClick={() => onBubbleClick(idx)}
            aria-label={`bubble-${b.color}`}
            style={getBubbleStyle(b.color)}
            onMouseDown={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.95)";
            }}
            onMouseUp={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          />
        ))}
      </div>

      <div>
        <div>
          <strong>Clicked yellow to black:</strong> {clickedYellowCount}
        </div>
        <button
          onClick={resetAll}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Bubbles;