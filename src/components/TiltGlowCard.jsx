// components/TiltGlowCard.jsx
import Tilt from "react-parallax-tilt";
import { Sparkles } from "lucide-react";
import Magnet from "./Magnet";

export default function TiltGlowCard({ title, description, icon }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.6}
      glareColor="#ffffff"
      glarePosition="all"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className="w-80 h-48 bg-red-300 rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center transition-transform duration-300"
    >
  
    </Tilt>
  );
}
