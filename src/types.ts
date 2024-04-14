import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export type BoxOptions = {
  width?: number
  height?: number
  depth?: number
  color?: number
}

export type ControlsConfig = {
  camera: THREE.PerspectiveCamera
  canvas: HTMLElement
  enableDamping?: boolean
  dampingFactor?: number
}

export type CameraConfig = {
  fov?: number
  aspectRatio?: number
  near?: number
  far?: number
  positionZ?: number
}

export type SetupConfig = {
  selector?: string
  cameraConfig?: Partial<CameraConfig>
  controlsConfig?: Partial<ControlsConfig>
  rendererConfig?: Partial<THREE.WebGLRendererParameters> & {
    width: number
    height: number
  }
}

export type SetupResult = {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  controls: OrbitControls
}
