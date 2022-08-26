import * as THREE from "three"
import Camera from "./Utils/Camera"
import Sizes from "./Utils/Size"

export default class Experience {
   static instance

   constructor(canvas){
      if(Experience.instance){
         return Experience.instance
      }
      
      Experience.instance = this
      this.canvas = canvas
      this.scene = new THREE.Scene()
      this.sizes = new Sizes()
      this.camera = new Camera()
   }
}