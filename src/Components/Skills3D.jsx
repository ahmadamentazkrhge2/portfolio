import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiGit, 
  SiGithub 
} from "react-icons/si";


const skills = [
  { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Responsive Design", icon: <SiHtml5 color="#FF6F61" /> }, // أيقونة مؤقتة
  { name: "Git / GitHub", icon: <SiGithub color="#FFFFFF" /> }, // لون أبيض
];

function Skill({ position, skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Html center>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              fontSize: hovered ? 40 : 30,
              transition: "all 0.2s",
            }}
          >
            {skill.icon}
          </div>
          <span
            style={{
              marginTop: 5,
              fontSize: 14,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {skill.name}
          </span>
        </div>
      </Html>
    </mesh>
  );
}

function SkillsSphere() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += 0.001;
    }
  });

  const radius = 2;
  const skillPositions = skills.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);
    return [x, y, z];
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <Skill key={index} position={skillPositions[index]} skill={skill} />
      ))}
    </group>
  );
}

export default function Skills3D() {
  return (
    <div id="skills" style={{ width: "100%", height: "700px" }} className="pt-20 pb-20 skills-container">
      <h2 className="text-4xl font-bold text-center mb-12 text-amber-50 ">
        Skills
      </h2>

      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <SkillsSphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
