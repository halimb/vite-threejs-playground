import "./style.css"

import { dirname } from "./vite.config.ts"

console.log({ dirname })
import { setup, createCube } from "@/three/index.ts"

const { scene, camera, controls } = setup({
  selector: "#app",
})

scene.add(createCube(1, 0xff0000))
camera.position.z = 3
controls.update()
