import * as THREE from "three"
import { BoxOptions } from "@/types.ts"

export function createBox({
  width = 1,
  height = 1,
  depth = 1,
  color = 0x00ff00,
}: BoxOptions = {}) {
  const geometry = new THREE.BoxGeometry(width, height, depth)
  const material = new THREE.MeshBasicMaterial({ color })

  return new THREE.Mesh(geometry, material)
}

export function createCube(size: number = 1, color: number = 0x00ff00) {
  return createBox({ width: size, height: size, depth: size, color })
}
