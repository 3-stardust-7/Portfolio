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
      className="w-80 h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center transition-transform duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <Sparkles className="w-12 h-12 text-yellow-200 mb-4" />
        <h2 className="text-xl font-bold mb-2">Shiny Feature</h2>
        <p className="text-gray-600 text-sm mb-4">
          This is a short description of something awesome.
        </p>
        <Magnet className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition">
          Learn More
        </Magnet>
      </div>
    </Tilt>
  );
}
