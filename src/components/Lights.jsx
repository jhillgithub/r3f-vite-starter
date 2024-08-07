import { Environment } from "@react-three/drei";
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Environment files={"/hdrs/neon_photostudio_1k.hdr"} />
    </>
  );
};

export default Lights;
