import * as THREE from "three"
import { createCamera } from "@/three/camera"
import { createControls } from "@/three/controls"
import { createScene } from "@/three/scene"
import { SetupConfig, SetupResult } from "@/types.ts"

export * from "@/three/camera"
export * from "@/three/controls"
export * from "@/three/scene"
export * from "@/three/objects"

export function setup({
  selector = "#app",
  cameraConfig = {},
  controlsConfig = {},
  rendererConfig = { width: window.innerWidth, height: window.innerHeight },
}: SetupConfig = {}): SetupResult {
  const scene = createScene()
  const camera = createCamera(cameraConfig)
  const { width, height, ...restRendererConfig } = rendererConfig
  const renderer = new THREE.WebGLRenderer(restRendererConfig)
  renderer.setSize(width, height)

  const appElement = document.querySelector(selector)
  if (!appElement) {
    throw new Error(`App element with not found, using selector ${selector}`)
  }

  appElement.appendChild(renderer.domElement)

  const controls = createControls({
    ...controlsConfig,
    camera,
    canvas: renderer.domElement,
  })

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  animate()

  return { scene, camera, controls }
}
