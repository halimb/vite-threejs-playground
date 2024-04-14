import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { ControlsConfig } from "@/types.ts"

export function createControls({
  camera,
  canvas,
  enableDamping = true,
  dampingFactor = 0.25,
}: ControlsConfig) {
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = enableDamping
  controls.dampingFactor = dampingFactor

  return controls
}
