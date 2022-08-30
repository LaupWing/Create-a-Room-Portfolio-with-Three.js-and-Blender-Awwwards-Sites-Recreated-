import Experience from "..";
import * as THREE from "three"

export default class Renderer {
   constructor(){
      this.experience = new Experience()
      this.sizes = this.experience.sizes
      this.canvas = this.experience.canvas
      this.scene = this.experience.scene
      this.camera = this.experience.camera

      this.setRenderer()
      
   }

   resize(){
      
   }

   update(){
      
   }
}