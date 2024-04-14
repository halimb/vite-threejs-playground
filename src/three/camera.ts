import * as THREE from "three"
import { CameraConfig } from "@/types.ts"

export function createCamera({
  fov = 75,
  aspectRatio = window.innerWidth / window.innerHeight,
  near = 0.1,
  far = 1000,
  positionZ = 5,
}: CameraConfig = {}) {
  const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far)
  camera.position.z = positionZ

  return camera
}
