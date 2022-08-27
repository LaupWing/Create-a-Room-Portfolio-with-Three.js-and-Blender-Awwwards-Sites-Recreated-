import Experience from "..";
import * as THREE from "three"

export default class Renderer {
   constructor(){
      this.experience = new Experience()
      this.sizes = this.experience.sizes
      this.canvas = this.experience.canvas
      this.scene = this.experience.scene

      this.setRenderer()
      
   }

   setRenderer(){
      this.renderer = new THREE.WebGL1Renderer({
         canvas: this.canvas,
         antialias: true
      })
   }

   resize(){
   }

   update(){}
}