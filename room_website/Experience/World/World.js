import Experience from "..";
import * as THREE from "three"
import Room from "./Room";

export default class World {
   constructor(){
      this.experience = new Experience()
      this.sizes = this.experience.sizes
      this.canvas = this.experience.canvas
      this.scene = this.experience.scene
      this.camera = this.experience.camera
      this.resources = this.experience.resources

      this.resources.on("ready", ()=>{
         this.room = new Room()  
      })

   }

   resize(){
      
   }

   update(){
      
   }
}