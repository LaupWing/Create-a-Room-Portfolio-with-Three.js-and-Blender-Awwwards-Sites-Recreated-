import * as THREE from "three"
import Camera from "./Utils/Camera"
import Renderer from "./Utils/Renderer"
import Sizes from "./Utils/Size"
import Time from "./Utils/Time"

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
      this.renderer = new Renderer()
      this.time = new Time()
   }
}