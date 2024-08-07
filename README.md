# React Three Fiber + vite starter template

## Install from scratch

Install vite 

```shell
npm create vite@latest -- --template react
```

cd into the project

```shell
cd r3f-vite-starter
```

Install depedencies

```shell
npm i @react-three/fiber @react-three/drei @react-three/rapier three three-stdlib
```

Install dev dependencies

```shell
npm i -D vite-plugin-glsl @types/three
```

Install tailwind

```shell
npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p
```

Install tailwind prettier plugin

```shell
npm install -D prettier prettier-plugin-tailwindcss
```

Create the .prettierrc file
```
// .prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

Update the tailwind.config.js file
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Update vite.config.js with the react and glsl plugins
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
});
```

Update index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Update App.jsx and use tailwind to create a full screen canvas
```jsx
import React from "react";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#0f0f0f"]} />
        <Experience />
      </Canvas>
    </div>
  );
};

export default App;
```

## Optional Install

postprocessing

```shell
npm i @react-three/postprocessing
```

leva controls

```shell
npm i leva
```

Additional repositories can be found on https://github.com/orgs/pmndrs/repositories


