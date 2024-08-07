import React, { useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { Color } from "three";

const ColorShiftMaterial = shaderMaterial(
  { time: 0, color: new Color(0.2, 0.0, 0.1) },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  /*glsl*/ `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      vec3 colorshift = sin(vUv.yxx + time) + color;
      gl_FragColor.rgba = vec4(colorshift, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `
);
extend({ ColorShiftMaterial });

const ShaderBox = () => {
  const ref = useRef();
  useFrame(({ clock }, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.5;
    ref.current.rotation.x += delta * 0.5;
    ref.current.material.uniforms.time.value = clock.getElapsedTime();
  });
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <colorShiftMaterial color="aquamarine" time={1} />
    </mesh>
  );
};

export default ShaderBox;
