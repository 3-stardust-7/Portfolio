// Cursor.jsx
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (

      <div
        className="fixed border-gray-200 border-3 cursor-none top-0 left-0 w-6 h-6 bg-red-300 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
  );
}
