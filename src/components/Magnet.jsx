import { useRef } from "react";

export default function Magnet({ children, className = "" }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = btnRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    const button = btnRef.current;
    button.style.transform = "translate(0, 0)";
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative px-6 py-3 rounded-xl bg-black text-white font-semibold overflow-hidden transition-transform duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
